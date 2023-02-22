import { UserProps } from "../types/user";

import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./User.module.css";


const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={styles.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
        <p className={styles.location}>
          <MdLocationOn />
          <span>{location}</span>
        </p>
      
      <div className={styles.status}>
        <div>
          <p className={styles.number}>Followers:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p className={styles.number}>Followings:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Best projects</Link>
      
    </div>
  );
};

export default User;
