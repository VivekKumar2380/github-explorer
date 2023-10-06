import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RepositoryList.css"; // Import your CSS file for styling

const RepositoryList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, repositories, followers } = location.state;

  const handleFollowersClick = () => {
    navigate(`/followers/${user.login}`, { state: { user, followers } });
  };

  const handleRepositoryClick = (repository) => {
    navigate(`/repository/${repository.name}`, { state: { repository } });
  };

  return (
    <div className="repository-list-container">
      <div className="user-info">
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" />
        <h1 className="username">{user.login}</h1>
      </div>
      <h2 className="repositories-heading">Repositories:</h2>
      <ul className="repository-list">
        {repositories.map((repo) => (
          <li key={repo.id}>
            <button
              className="repository-button"
              onClick={() => handleRepositoryClick(repo)}
            >
              {repo.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="followers-button"
        onClick={handleFollowersClick}
      >
        View Followers
      </button>
    </div>
  );
};

export default RepositoryList;
