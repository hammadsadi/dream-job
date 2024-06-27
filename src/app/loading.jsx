import { ImSpinner9 } from "react-icons/im";

const loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-800">
      <ImSpinner9 />
    </div>
  );
};

export default loading;
