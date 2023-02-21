import { Outlet } from "react-router-dom";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1> GitHub search</h1>
      {/*El Outlet para renderizar el contenido de las rutas que se encuentran en el archivo main.tsx  */}
      <Outlet />
    </div>
  );
}

export default App;
