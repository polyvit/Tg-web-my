import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

{
  /* <link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="./favicon-16x16.png"
></link>; */
}

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
