import React from "react";
import { useForm } from "react-hook-form";

export default function Picture() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('picture', { required: true })} type="file" accept="image/png, image/jpeg, image/jpg"/>
      <button>Submit</button>
    </form>
  );
}
