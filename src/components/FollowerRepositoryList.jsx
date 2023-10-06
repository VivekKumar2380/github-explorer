import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FollowerRepositoryList.css"; // Import your custom CSS file

const FollowerRepositoryList = () => {
  const { followerUsername } = useParams();
  const [follower, setFollower] = useState({ login: followerUsername, repositories: [] });

  // Fetch follower's data and repositories based on the username
  useEffect(() => {
    async function fetchFollowerData(username) {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const userData = await response.json();
          const repositoriesResponse = await fetch(`https://api.github.com/users/${username}/repos`);
          if (repositoriesResponse.ok) {
            const repositoriesData = await repositoriesResponse.json();
            setFollower({ ...userData, repositories: repositoriesData });
          }
        } else {
          console.error("Error fetching follower data");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchFollowerData(followerUsername);
  }, [followerUsername]);

  return (
    <div className="follower-repository-list-container">
      <h1 className="follower-repository-list-heading">Repository List for {follower.login}</h1>
      <div className="follower-details">
        <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} className="follower-avatar" />
        <p className="follower-username">Username: {follower.login}</p>
      </div>

      <h2 className="repositories-heading">Repositories</h2>
      <ul className="repository-list">
        {follower.repositories.map((repo) => (
          <li key={repo.id} className="repository-item">
            <a href={repo.html_url} className="repository-link">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerRepositoryList;
