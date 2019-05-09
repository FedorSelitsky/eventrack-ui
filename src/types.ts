export interface Artist {
  id: number;
  name: string;
  image_url: string;
  thumb_url: string;
  songkick_url: string;
  bandsintown_url: string;
  facebook_page_url: string;
}

export type Artists = Array<Artist>;

export interface Event {
  id: number;
  name: string;
  type: string;
  start: Date;
  end: Date;
  thumb_url: string;
  songkick_url: string;
}

export type Events = Array<Event>;
