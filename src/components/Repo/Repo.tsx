import { RepositoryProp } from "../../types/repo";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import styles from "./Repo.module.css";

const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepositoryProp) => {
  return (
    <div className={styles.repo}>
      <h3>{name}</h3>
      <div className={styles.repo_btn}>
        <BsCodeSlash /> {language}
        <a href={html_url} target="_blank">
          {" "}
          <div className={styles.git}>
            {" "}
            <FiGithub />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Repo;
