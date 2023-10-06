import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchGitHubUser,
  fetchGitHubRepositories,
  fetchGitHubFollowers,
} from "./api";
import "./InitialPage.css";

const InitialPage = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // State for error message
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null); // Clear any previous error

    try {
      const user = await fetchGitHubUser(username);
      const repositories = await fetchGitHubRepositories(username);
      const followers = await fetchGitHubFollowers(username);

      navigate(`/repositories/${username}`, {
        state: { user, repositories, followers },
      });
    } catch (error) {
      setError("User not found or an error occurred."); // Set error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="initial-page-container">
      <input
        type="text"
        className="input-field"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading}
      />
      <button
        className="search-button"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Search"}
      </button>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default InitialPage;
