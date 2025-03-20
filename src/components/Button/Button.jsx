import { MdArrowForwardIos } from "react-icons/md";
const Button = ({ text, icon, border = "border-[1px]" }) => {
  return (
    <button
      className={` ${border} border-gray_m bg-gradient-to-tr from-gray_m to-black flex justify-center items-center bg-white font-semibold w-[16rem] transition-all duration-300 hover:scale-105 p-4 rounded-[8px] shadow-md shadow-gray_m hover:shadow-xl hover:shadow-gray_m cursor-pointer`}
    >
      {text}
      {icon && <MdArrowForwardIos className=" ml-2 mt-[2px]" />}
    </button>
  );
};
export default Button;
