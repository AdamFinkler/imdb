export interface movieDTO{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[]; // Array of genre IDs
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string; // Use Date type if you prefer to parse it later
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

