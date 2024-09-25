import { Audio } from "react-loader-spinner";
import style from "../Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={style.containerLoader}>
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  );
};

export default Loader;
