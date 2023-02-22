import styles from "./Loader.module.css";
import { BiLoaderAlt } from "react-icons/bi";

const Loader = () => {
  return (
    <>
      <BiLoaderAlt className={styles.loader} />
    </>
  );
};

export default Loader;
