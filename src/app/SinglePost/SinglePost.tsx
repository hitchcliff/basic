import React from "react";
import Image1 from "../../assets/kevinnacario.webp";
import { Single } from "../../component";
import { SingleTypes, RecentTypes } from "../../component/Single/types";

export const recentSampleData: RecentTypes[] = [
  {
    title: "sample title",
    image: Image1,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis. asdfsadfdasf",
  },
  {
    title: "sample title",
    image: Image1,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis. asdfsadfdasf",
  },
  {
    title: "sample title",
    image: Image1,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, veritatis. asdfsadfdasf",
  },
];

export const dummySingleData: SingleTypes = {
  title: "sample title",
  meta: "Feb. 6, 1998",
  author: "Kevin Nacario",
  image: Image1,
  recent: recentSampleData,
  content:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda soluta nihil ipsam quae fuga? Optio neque officia quas? Explicabo possimus, repellat quod cumque, minus iusto a quis ea iste consectetur eaque quos culpa dignissimos ipsa optio laudantium amet. Perferendis nihil adipisci totam unde! Officiis tempore autem impedit eos commodi ipsam?",
};

export default function SinglePost() {
  return <Single data={dummySingleData} />;
}
