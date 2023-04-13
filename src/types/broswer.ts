export type Recommend = {
    title: string;
    description: string;
    authors: string[];
    imgUrl: string;
    link: string;
}

export type newMusic = {
    id: number;
    title: string;
    author: string;
    imgUrl: string;
}

export type Audio = {
    isPlaying: boolean;
    audioUrl: string;
    name: string;
    author: string;
    imgUrl: string;
}