import Image from "next/image";
import Link from "next/link";
interface proInterface {
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  [key: string]: unknown;
}
const ProductCard = ({ product }: { product: proInterface }) => {
  return (
    <div>
      <div  className="border p-4 rounded-lg">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
            priority={true}
            width={300}
            height={300}
          />
        </Link>

        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="font-bold text-xl">${product.price}</p>
      </div>
    </div>
  );
};
export default ProductCard;
