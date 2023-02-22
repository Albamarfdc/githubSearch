import { Link, Outlet } from "react-router-dom";

import styles from "./App.module.css";
import GitHub from "./assets/img/github.png";

function App() {
  return (
    <div className={styles.app}>
      <Link to="/">
      <img className={styles.app_img} src={GitHub} alt="GithubLog" />
      </Link>
      {/*El Outlet para renderizar el contenido de las rutas que se encuentran en el archivo main.tsx  */}
      <Outlet />
    </div>
  );
}

export default App;
