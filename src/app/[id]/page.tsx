import BookInfo from "@/components/BookInfo";
import { getData } from "@/data";
import { IProduct } from "@/type";

const products: IProduct[] = getData();

export default async function Page({ params }: { params: { id: string } }) {
  const product = products.find((pr) => pr.id === params.id);
  return (
    <div className="px-[20px]">
      <BookInfo data={product as IProduct} />
    </div>
  );
}
