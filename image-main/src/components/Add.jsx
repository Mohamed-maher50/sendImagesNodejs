import React from "react";
import { useState } from "react";
import FormData from "form-data";
import { useForm } from "react-hook-form";
import axios from "axios";
const Add = () => {
  const [product, setProduct] = useState();
  const [img, setImage] = useState(null);
  const { register, handleSubmit } = useForm();
  const handlerImage = (event) => {
    setImage(event.target.files[0]);
  };
  console.log(product);
  const handler = (title) => async (event) => {
    setProduct({
      ...product,
      [title]: event.target.value,
    });
    console.log(product);
  };
  const onsubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", img);
      formData.append("category", product.category);
      formData.append("countInStock", product.countInStock);
      formData.append("numReviews", product.numReviews);
      formData.append("price", product.price);
      formData.append("slug", product.slug);
      formData.append("description", product.description);
      formData.append("name", product.name);

      console.log(formData);
      const req = await axios.post(
        "http://localhost:5050/api/addProduct",
        formData
      );
      console.log(req);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      onSubmit={handleSubmit(onsubmit)}
      className="mt-10 w-[50%] mx-auto space-y-5"
    >
      <h1>Add Product</h1>
      <input
        type="text"
        onChange={handler("name")}
        className=" w-full border-2 p-2 border-gray-400"
        placeholder="name"
      />
      <input
        type="text"
        onChange={handler("slug")}
        className=" w-full border-2 p-2 border-gray-400"
        placeholder="slug"
      />
      <input
        type="text"
        onChange={handler("category")}
        className=" w-full border-2 p-2 border-gray-400"
        placeholder="category"
      />
      <input
        type="file"
        onChange={handlerImage}
        className=" w-full border-2 p-2 border-gray-400"
        placeholder="img"
      />
      <input
        type="text"
        onChange={handler("price")}
        className=" w-full border-2 p-2 border-gray-400"
        placeholder="price"
      />
      <input
        type="text"
        onChange={handler("numReviews")}
        className=" w-full border-2 p-2 border-gray-400"
        placeholder="numReviews"
      />
      <input
        type="text"
        onChange={handler("countInStock")}
        className=" w-full border-2 p-2 border-gray-400"
        placeholder="countInStock"
      />
      <input
        type="text"
        onChange={handler("description")}
        className=" w-full border-2 p-2 border-gray-400"
        placeholder="description"
      />
      <button
        onClick={onsubmit}
        className="bg-blue-400 w-full p-2 text-white cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default Add;
