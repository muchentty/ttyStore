// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
import { prismaSampleData } from "@/lib/sample-data";
import ProductList from "@/components/products/productList";  
const HomePage = () => {
  return <>
      <ProductList data={prismaSampleData.products} title="Featured Products"  />
  </>;
};
export default HomePage;
