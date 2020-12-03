export interface SingleTypes {
  title: string;
  meta: string;
  author: string;
  content: string;
  image: string;
  recent: RecentTypes[];
}

export interface RecentTypes {
  title: string;
  image: string;
  paragraph: string;
}
