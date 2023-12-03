import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  const productsRenderList = productList.map((product)=><ProductCard product={product} key={product.id}/>)

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {productsRenderList}
      </div>
    </div>
  );
}

export default App;
