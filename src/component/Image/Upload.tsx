import React, { useEffect, useState } from "react";

interface ImageUploadProp {
  handleChange: (file: any) => void;
}

export default function Upload({ handleChange }: ImageUploadProp) {
  const [file, setFile] = useState<string>("");
  // const [imagePreviewUrl, setImagePreviewUrl] = useState<any | ArrayBuffer>("");

  useEffect(() => {
    handleChange(file);
  }, [file]);

  function handleImageChange(e: any) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      // setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {/* {imagePreviewUrl ? <img src={imagePreviewUrl} /> : null} */}
    </div>
  );
}
