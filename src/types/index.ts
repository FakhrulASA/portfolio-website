export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    repoUrl: string;
}

export interface HeaderProps {
    title: string;
    links: Array<{ name: string; url: string }>;
}

export interface HomeProps {
    projects: Project[];
}