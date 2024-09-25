import { ThreeDots } from "react-loader-spinner";
import style from "./Loader.module.css";

const LoaderMoreInform = () => {
  return (
    <div className={style.containerLoader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#F6F6F6"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoaderMoreInform;
