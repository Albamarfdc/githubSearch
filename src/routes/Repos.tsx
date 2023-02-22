import { RepositoryProp } from "../types/repo";

import Repo from "../components/Repo/Repo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Repos.module.css";
import Loader from "../components/Loader/Loader";

const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState<RepositoryProp[] | [] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRepositories = async function (username: string) {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setLoading(false);

      let sortRepos = data.sort(
        (a: RepositoryProp, b: RepositoryProp) =>
          b.stargazers_count - a.stargazers_count
      );
      sortRepos = sortRepos.slice(0, 5);
      setRepos(sortRepos);
    };
    if (username) {
      loadRepositories(username);
    }
  }, []);

  // AGREGAR EL LOADER
  if (!repos && loading) return <Loader />;

  return (
    <div className={styles.repos}>
      <h2>Explore user repositories:</h2>
      <h2>{username}</h2>
      {repos && repos.length === 0 && <p>No repositories found</p>}
      {repos && repos.length > 0 && (
        <div className={styles.respos_box}>
          {repos.map((repo: RepositoryProp) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
