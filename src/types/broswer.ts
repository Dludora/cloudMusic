export type Recommend = {
    title: string;
    description: string;
    authors: string[];
    imgUrl: string;
    link: string;
}

export type MusicList = {
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

export type Music = {
    id: number;
    songName: string;
    author: string;
    audioUrl: string;
    imgUrl: string;
}
