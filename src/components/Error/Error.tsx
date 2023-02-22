// importar imagen de la carpeta public
import error from "../../assets/img/404.jpg"
import styles from "./Error.module.css"


const Error = () => {
  return <div className={styles.img}>
    <img src={error} alt="error" />

  </div>;
};

export default Error;
