import ProductCard from "./components/ProductCard"

function App() {

  return (
    <>
    <div className="bg-red-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
    </>
  )
}

export default App
