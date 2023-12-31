import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, imageURL, description, price, category, colors } = product;
  const colorsRenderList = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
      <Image
        alt="productName"
        className="rounded-md h-52 w-full lg:object-cover"
        imageUrl={imageURL}
      />
      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2">{colorsRenderList}</div>
      <div className="flex items-center justify-between ">
        <span>{price}</span>
        <Image
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
          imageUrl={category.imageURL}
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-blue-600">Edit</Button>
        <Button className="bg-red-600">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
