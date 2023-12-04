import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { productList } from "./data";

function App() {
  const productsRenderList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="container">
      <Button className="bg-blue-600" onClick={openModal}>Add new</Button>
      <Modal
        isOpen={isOpen}
        title="Add a new product"
        closeModal={() => closeModal}
      >
        <div className="flex items-center justify-between space-x-2 mt-5">
          <Button className="bg-blue-600">Edit</Button>
          <Button className="bg-red-600">Delete</Button>
        </div>
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {productsRenderList}
      </div>
    </div>
  );
}

export default App;
