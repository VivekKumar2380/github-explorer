import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./FollowersList.css"; // Import your custom CSS file

const FollowersList = () => {
  const location = useLocation();
  const followers = location.state.followers;

  return (
    <div className="followers-list-container">
      <h1 className="followers-list-heading">Followers List</h1>
      <ul className="followers-list">
        {followers.map((follower) => (
          <li key={follower.id} className="follower-item">
            <Link to={`/follower-repositories/${follower.login}`} className="follower-link">
              <div className="follower-card">
                <img
                  src={follower.avatar_url}
                  alt={`${follower.login}'s avatar`}
                  className="follower-avatar"
                />
                <p className="follower-login">{follower.login}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
