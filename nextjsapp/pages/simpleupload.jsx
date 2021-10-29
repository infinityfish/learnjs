import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  const { register, handleSubmit } = useForm();

//this sends the data perfectly
  // const onSubmit = (data) => {
  //   axios.post("/api/simpleupload", data, {"content-type":'multipart/form-data'})
  //   .then(res => console.log(res))
  // };

  const onSubmit = async (data) => {
    const body = new FormData();
    body.append("file", data.picture[0]); //this uploads the file
    body.append("name", data.name);
    body.append("price", data.price);
    body.append("picture", data.picture[0].name); //this sends the name of the file
    axios.post("/api/simpleupload", body)
    .then(res => console.log(res))
    .catch(err => console.log(err));        
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} type="text"/>
      <input {...register('price', { required: true })} type="number"/>
      {/* <input {...register('quantity', { required: true }, {valueAsNumber: true})} type="number"/> */}
      <input {...register('picture', { required: true })} type="file" accept="image/png, image/jpeg, image/jpg"/>
      <button>Submit</button>
    </form>
  );
}

export default App;