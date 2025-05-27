import { useNavigate } from "react-router-dom";

const Start = () => {
  const newPage = useNavigate();

  const HandleChange = () => {
    newPage("/starting"); 
  };

  return (
    <div
      className="text-center text-black cursor-pointer text-2xl h-8 w-20 mx-auto mt-5 rounded-4xl bg-white"
      onClick={HandleChange}
    >
      Start
    </div>
  );
};

export default Start;
