import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";

{
  /* <link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="./favicon-16x16.png"
></link>; */
}

// https://nextjs.org/docs/app/building-your-application/optimizing/scripts

export const metadata: Metadata = {
  title: "My Shop",
  description: "Here you can books in telegram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js" />
      </head>
      <body>
        <div id="root">
          <div className="relative pb-[30px]">
            <div className="w-full pb-[20px]">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
