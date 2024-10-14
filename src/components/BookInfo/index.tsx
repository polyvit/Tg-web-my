"use client";

import React from "react";
import Button from "../Button";
import { IProduct } from "@/type";

const subtitle = "text-custom-red mb-2.5 font-normal";

const BookInfo = ({ data }: { data: IProduct }) => {
  const clickHandler = () => {
    console.log("click");
  };

  return (
    <>
      <h1 className="font-bold text-3xl md:text-5xl mb-6">{data?.title}</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <img className="w-full md:max-w-[70%]" src={data?.Image} alt="image" />
        <div>
          <span className={subtitle}>Краткое описание:</span>
          <p className="leading-normal mb-5">{data?.about}</p>
          <span className={subtitle}>Цена:</span>
          <div className="mb-2.5 text-[28px]">
            <span className="font-bold mr-2.5">{data?.price} РУБ.</span>
            <span className="text-custom-light-gray line-through">
              {data?.price + 300} РУБ.
            </span>
          </div>
          <Button text="Сделать заказ" onClick={clickHandler} />
        </div>
      </div>
    </>
  );
};

export default BookInfo;
