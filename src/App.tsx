import { ChangeEvent, useState, FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputsList, productList } from "./data";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import Select from "./components/ui/Select";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // ---------------STATE---------------------------
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // ---------------HANDLER---------------------------
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;

    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    
    setProducts((prev) => [{ ...product, colors: tempColors, category: selectedCategory }, ...prev]);
    setTempColors([]);
    closeModal();
  };

  const onCancel = () => {
    closeModal();
    setProduct(defaultProductObj);
  };

  // ---------------RENDERS---------------------------
  const productsRenderList = products.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  const formRenderList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>

      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const colorsRenderList = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={()=>{
        if(tempColors.includes(color)){
          setTempColors(prev => prev.filter(item =>item !== color));
          return;
        }
        setTempColors(prev => [...prev, color]);
      }}
    />
  ));

  // ---------------JSX---------------------------
  return (
    <div className="container">
      <Button
        onClick={openModal}
        className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium"
      >
        Add new
      </Button>
      <Modal isOpen={isOpen} title="Add a new product" closeModal={closeModal}>
        <form className="space-y-3" onSubmit={submitHandler}>
          {formRenderList}
          <Select selected={selectedCategory} setSelected={setSelectedCategory}/>
          <div className="flex items-center my-4 space-x-2">
            {colorsRenderList}
          </div>
          <div className="flex items-center flex-wrap space-x-1">
            {tempColors.map(color => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-[#f5f5fa] hover:bg-gray-300 !text-black"
              onClick={onCancel}
            >
              Cancel
            </Button>
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
