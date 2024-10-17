"use client";

import Link from "next/link";
import Button from "../Button";

type CardProps = {
  title: string;
  price: number;
  Image: string;
  id: string;
};

const Card: React.FC<CardProps> = ({ title, price, Image, id }) => {
  const buyClickHandler = async () => {
    const response = await fetch(
      "https://5e0a-213-142-146-5.ngrok-free.app/api/webhook",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ id, title, price }),
      }
    );
    const result = await response.json();
    console.log("result", result);
    // const tg = (window as any).Telegram.WebApp;
    // tg.MainButton.text = "Pay";
    // tg.MainButton.show();
    // tg.MainButton.onClick(() => {
    //   tg.sendInvoice();
    // });
  };

  return (
    <div className="h-max border border-solid border-card-border text-center grow-0 shrink-0 basis-[calc(50%-10px)] md:basis-[calc(25%-10px)] lg:justify-center">
      <img
        src={Image}
        alt="Изображение книги"
        className="w-full h-[200px] object-contain"
      />
      <div className="flex flex-col gap-4	text-center pt-2.5 px-2.5 pb-5">
        <a href={`/${id}`} className="text-sm">
          {title}
        </a>
        <div className="text-2xl font-bold">{price} РУБ.</div>
        <div className="flex flex-col justify-center items-center gap-5">
          <Button text="Купить" onClick={buyClickHandler} />
          <Link href={`/${id}`}>
            <Button btnType="link" text="Подробнее" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
