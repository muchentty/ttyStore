import ProductCard from "./productCard";  
interface proInterface{
    name:string,
    slug:string,
    description:string,
    price:number,
    images:string[],
    [key:string]:unknown
}
const ProductList = ({ data, title,  }: { data: proInterface[]; title: string,}) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4"> {title}</h2>
      <ProductItem data={data} />
    </div>
  );
};
const ProductItem = ({ data }: { data: proInterface[] }) => {
  if (data.length === 0) {
    return (
      <div>
        <p>No products</p>
      </div>
    );
  } else {
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => ( <ProductCard product={item} key={item.slug}/> ))}
    </div>;
  }
};
export default ProductList;
