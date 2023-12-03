import { ReactNode } from "react";

interface IProps {
  className: string;
  children?: ReactNode;
}

const Button = ({ className, children, ...rest }: IProps) => {
  return <button className={`${className}  p-2 w-full rounded-md` } {...rest}>{children}</button>;
};

export default Button;
