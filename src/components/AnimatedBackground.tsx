import React, { useEffect, useRef } from 'react';

/* ── Dark palette ── */
const DARK = {
  p1: '#7c3aed', p2: '#06b6d4', p3: '#a78bfa', p4: '#67e8f9',
  connR: 124, connG: 58,  connB: 237,
  gridA:   0.06,
  partA:  [0.30, 0.75],
  connA:   0.20,
  shapeA: [0.04, 0.10],
  tokA:   [0.05, 0.12],
  tokKotlinA: [0.10, 0.20],
};

/* ── Light palette — darker, more saturated so they show on #f0f2ff ── */
const LIGHT = {
  p1: '#5b21b6', p2: '#0e7490', p3: '#6d28d9', p4: '#0891b2',
  connR: 91,  connG: 33,  connB: 182,
  gridA:   0.18,
  partA:  [0.55, 0.90],
  connA:   0.45,
  shapeA: [0.12, 0.24],
  tokA:   [0.18, 0.32],
  tokKotlinA: [0.28, 0.48],
};

const CODE_TOKENS = [
  /* ── Kotlin language ── */
  'fun ', 'val ', 'var ', 'data class', 'object',
  'companion', 'suspend', 'coroutine', 'flow {}',
  'sealed', 'when {}', 'by lazy', '?.', '?:',
  '!!', '::class', 'reified', 'inline fun', 'init {}',
  'override', 'lateinit', 'typealias', '.apply {}',
  '.also {}', '.let {}', '.run {}', '.map {}',
  /* ── Android / Jetpack ── */
  '@Composable', 'ViewModel()', 'LiveData<>',
  'StateFlow<>', 'LaunchedEffect', 'remember {}',
  'NavController', 'Hilt', '@Inject', 'Room',
  'Retrofit', 'Coroutine', 'Dispatchers.IO',
  'AndroidX', 'Lifecycle', '@HiltViewModel',
  'buildGradle', 'Manifest', 'adb shell',
  /* ── general coding vibe ── */
  '{ }', '//', '...', '<T>', 'null', 'void',
  '::', '→', 'λ', '0xFF', '01101',
];

type Particle = { x: number; y: number; vx: number; vy: number; r: number; color: string; alpha: number };
type Token    = { x: number; y: number; vx: number; vy: number; text: string; alpha: number; size: number; rot: number; rotV: number; color: string };
type Shape    = { x: number; y: number; vx: number; vy: number; size: number; rot: number; rotV: number; sides: number; alpha: number; color: string };

const rand  = (a: number, b: number) => a + Math.random() * (b - a);
const pick  = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

function polygon(ctx: CanvasRenderingContext2D, cx: number, cy: number, sides: number, r: number, rot: number) {
  ctx.beginPath();
  for (let i = 0; i <= sides; i++) {
    const a = rot + (i / sides) * Math.PI * 2;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let W = 0;
    let H = 0;

    /* ── resize ── */
    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener('resize', resize);

    /* ── theme helper — read live each frame ── */
    const theme = () => document.body.classList.contains('light') ? LIGHT : DARK;

    /* ── build scene ── */
    const N_PART   = Math.min(65, Math.floor((W * H) / 12000));
    const N_TOKENS = 32;
    const N_SHAPES = 12;
    const CONN     = Math.min(160, W * 0.13);

    const mkParticle = (): Particle => {
      const T = theme();
      return {
        x: rand(0, W), y: rand(0, H),
        vx: rand(-0.22, 0.22), vy: rand(-0.22, 0.22),
        r: rand(1.5, 3.2),
        color: pick([T.p1, T.p2, T.p3, T.p4]),
        alpha: rand(T.partA[0], T.partA[1]),
      };
    };

    const mkToken = (): Token => {
      const T = theme();
      const text = pick(CODE_TOKENS);
      const isKotlin = /fun |val |var |data class|@Composable|ViewModel|StateFlow|LaunchedEffect|@Inject|@HiltViewModel|suspend|coroutine|Dispatchers/.test(text);
      return {
        x: rand(0, W), y: rand(0, H),
        vx: rand(-0.1, 0.1), vy: rand(-0.07, 0.07),
        text,
        alpha: isKotlin ? rand(T.tokKotlinA[0], T.tokKotlinA[1]) : rand(T.tokA[0], T.tokA[1]),
        size: isKotlin ? rand(14, 26) : rand(11, 20),
        rot: rand(-0.18, 0.18),
        rotV: rand(-0.003, 0.003),
        color: isKotlin ? pick([T.p2, T.p3]) : pick([T.p3, T.p4]),
      };
    };

    const mkShape = (): Shape => {
      const T = theme();
      return {
        x: rand(0, W), y: rand(0, H),
        vx: rand(-0.09, 0.09), vy: rand(-0.09, 0.09),
        size: rand(18, 64),
        rot: rand(0, Math.PI * 2),
        rotV: rand(-0.006, 0.006),
        sides: pick([3, 4, 6]),
        alpha: rand(T.shapeA[0], T.shapeA[1]),
        color: pick([T.p1, T.p2, T.p3]),
      };
    };

    const particles = Array.from({ length: N_PART },   mkParticle);
    const tokens    = Array.from({ length: N_TOKENS }, mkToken);
    const shapes    = Array.from({ length: N_SHAPES }, mkShape);

    /* ── wrap helpers ── */
    const wrapPos = (obj: { x: number; y: number; vx: number; vy: number }, pad = 60) => {
      if (obj.x < -pad) obj.x = W + pad;
      if (obj.x > W + pad) obj.x = -pad;
      if (obj.y < -pad) obj.y = H + pad;
      if (obj.y > H + pad) obj.y = -pad;
    };

    /* ── main draw loop ── */
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const T = theme();

      /* 1 — dot grid */
      ctx.fillStyle = `rgba(${T.connR},${T.connG},${T.connB},${T.gridA})`;
      const sp = 55;
      for (let x = sp; x < W; x += sp) {
        for (let y = sp; y < H; y += sp) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* 2 — wire-frame shapes */
      for (const s of shapes) {
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.strokeStyle = s.color;
        ctx.lineWidth   = 0.9;
        polygon(ctx, s.x, s.y, s.sides, s.size, s.rot);
        ctx.stroke();
        polygon(ctx, s.x, s.y, s.sides, s.size * 0.5, s.rot + Math.PI / s.sides);
        ctx.stroke();
        ctx.restore();
        s.rot += s.rotV;
        s.x   += s.vx;
        s.y   += s.vy;
        wrapPos(s, s.size + 10);
      }

      /* 3 — floating code tokens */
      for (const t of tokens) {
        ctx.save();
        ctx.globalAlpha = t.alpha;
        ctx.fillStyle   = t.color;
        ctx.font        = `600 ${t.size}px 'Space Grotesk', 'Courier New', monospace`;
        ctx.translate(t.x, t.y);
        ctx.rotate(t.rot);
        ctx.fillText(t.text, 0, 0);
        ctx.restore();
        t.rot += t.rotV;
        t.x   += t.vx;
        t.y   += t.vy;
        wrapPos(t, 80);
      }

      /* 4 — particle connection edges */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN) {
            const alpha = (1 - dist / CONN) * T.connA;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${T.connR},${T.connG},${T.connB},${alpha.toFixed(3)})`;
            ctx.lineWidth   = 0.65;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      /* 5 — particle nodes */
      for (const p of particles) {
        /* glow ring */
        ctx.save();
        ctx.globalAlpha = p.alpha * 0.25;
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        /* core dot */
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        wrapPos(p, 5);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedBackground;
