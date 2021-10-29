import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Picture() {


  const { register, handleSubmit } = useForm();
  const [image, setImage] = React.useState(null);
  const [createObjectURL, setCreateObjectURL] = React.useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];

      setImage(img);
      setCreateObjectURL(URL.createObjectURL(img));
    }
  };

  const onSubmit = async (data) => {
    const body = new FormData();
    body.append("file", image, data.picture[0].name);
    body.append("name", data.name);
    axios.post("/api/fileupload", body)
    .then(res => console.log(res))
    .catch(err => console.log(err));        
  };




  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={createObjectURL} />
      <input {...register('name', { required: true })} type="text"/>
      <input {...register('picture', { required: true })} type="file" onChange={uploadToClient} accept="image/png, image/jpeg, image/jpg"/>
      <button>Submit</button>
    </form>
  );
}