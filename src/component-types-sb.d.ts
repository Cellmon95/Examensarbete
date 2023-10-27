import {StoryblokStory} from 'storyblok-generate-ts'

export interface ButtonStoryblok {
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface MovieStoryblok {
  title?: string;
  _uid: string;
  component: "movie";
  [k: string]: any;
}

export interface MovieCarouselStoryblok {
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

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
