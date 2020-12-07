export interface PostTypes {
  id: string;
  title: string;
  content: string;
  createdAt: Date | string | number;
  image: any;
  user: { name: string; uid: string };
}

export interface ProjectTypes extends PostTypes {
  demo?: string;
}
