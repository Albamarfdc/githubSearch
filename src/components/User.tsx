import { UserProps } from "../types/user";

import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationOn />
          <span>{location}</span>
        </p>
      )}
      <div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Followings</p>
          <p>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Best projects</Link>
    </div>
  );
};

export default User;
