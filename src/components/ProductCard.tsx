import Image from "./Image";

interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image
        alt="productName"
        className="rounded-md"
        imageUrl="https://efreshli-uploads.s3.eu-central-1.amazonaws.com/products/Pp9pyS1UI1xAvvxNsVIvgXOYlladOPizULpqjJpP.png"
      />
      <h3>Quattro Macrame</h3>
      <p>
        Wooven chest offers essential storage for your nursery. Crafted from
        solid natural beech wood with a warm espresso finish, this 3-drawer unit
        features soft-closing drawers for quiet organization
      </p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 rounded-full bg-black cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-yellow-500 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-red-900 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between ">
        <span>$1,000 </span>
        <Image
          alt="productName"
          className="w-10 h-10 rounded-full object-bottom"
          imageUrl="https://efreshli-uploads.s3.eu-central-1.amazonaws.com/products/Pp9pyS1UI1xAvvxNsVIvgXOYlladOPizULpqjJpP.png"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <button className="bg-blue-600 p-2 w-full rounded-md">Edit</button>
        <button className="bg-red-600 p-2 w-full rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
