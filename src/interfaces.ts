//src/interfaces.ts

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
}