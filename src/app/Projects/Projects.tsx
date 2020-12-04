import React, { useState } from "react";
import Collection from "../../component/Collection/Collection";
import { sampleData } from "../Home/News/News";

export default function Projects() {
  const [search, setSearch] = useState<string>();
  console.log("from projects", search);
  return (
    <Collection
      data={sampleData[0]}
      title="Projects"
      handleSearch={setSearch}
    />
  );
}
