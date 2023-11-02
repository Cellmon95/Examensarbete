import {StoryblokStory} from 'storyblok-generate-ts'

export interface ButtonStoryblok {
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeaderStoryblok {
  name?: string;
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface MovieStoryblok {
  title?: string;
  movieId: number | string;
  _uid: string;
  component: "movie";
  [k: string]: any;
}

export interface MovieCarouselStoryblok {
  title?: string;
  movies?: MovieStoryblok[];
  _uid: string;
  component: "movieCarousel";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface ShowcaseStoryblok {
  _uid: string;
  component: "showcase";
  [k: string]: any;
}
