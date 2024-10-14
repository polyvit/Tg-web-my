"use client";

import Card from "@/components/Card";
import { getData } from "@/data";
import { IProduct } from "@/type";
import { useEffect } from "react";

const products: IProduct[] = getData();

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      (window as any).Telegram.WebApp.ready();
    }, 0);
  }, []);

  return (
    <div className="px-[20px] flex flex-wrap gap-2.5">
      {products.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
}
