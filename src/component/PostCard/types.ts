export interface PostTypes {
  id: string;
  title: string;
  content: string;
  createdAt: Date | string | number;
  image: string;
  user: { name: string; uid: string };
}
