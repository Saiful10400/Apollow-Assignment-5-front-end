import { FC } from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void; // Function type for onClick
    disable?: boolean;   // Optional boolean type for disable
    className?: string;  // Optional string type for className
  }

const Button: FC<ButtonProps> = ({text,onClick,disable,className}) => {
    return (
        <button disabled={disable?true:false} onClick={onClick} className={`font-bold btn hover:bg-black bg-black text-white p-2 rounded-xl ${className}`}>{text}</button>
    );
};

export default Button; 

// {text,onClick,disable,className}