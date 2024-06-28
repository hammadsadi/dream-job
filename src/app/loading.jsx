import { ImSpinner9 } from "react-icons/im";

const loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-50/10">
      <ImSpinner9 className="animate-spin text-5xl" />
    </div>
  );
};

export default loading;
