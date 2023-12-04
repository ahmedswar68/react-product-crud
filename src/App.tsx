import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Input from "./components/ui/Input";

function App() {
  const productsRenderList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  const formRenderList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
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
      <Button className="bg-blue-600" onClick={openModal}>
        Add new
      </Button>
      <Modal
        isOpen={isOpen}
        title="Add a new product"
        closeModal={() => closeModal}
      >
        <form className="space-y-3">
          {formRenderList}
        <div className="flex items-center justify-between space-x-3 mt-5">
          <Button className="bg-blue-600">Edit</Button>
          <Button className="bg-red-600">Delete</Button>
        </div>
        
        </form>
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {productsRenderList}
      </div>
    </div>
  );
}

export default App;
