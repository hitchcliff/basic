import React, { useState } from "react";
import { Direction } from "../../App.types";
import Collection from "../../component/Collection/Collection";
import { sampleData } from "../Home/News/News";

export default function Blog() {
  const [search, setSearch] = useState<string>();
  console.log("from blog", search);
  return (
    <Collection
      data={sampleData[0]}
      title="Blog"
      handleSearch={setSearch}
      route={Direction.Blog}
    />
  );
}
