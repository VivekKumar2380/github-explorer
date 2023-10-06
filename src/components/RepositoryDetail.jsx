// RepositoryDetail.js

import React from "react";
import { useLocation } from "react-router-dom";
import './RepositoryDetail.css'; // Import the CSS file

const RepositoryDetail = () => {
  const location = useLocation();
  const repository = location.state.repository;

  if (!repository) {
    return <div className="repository-not-found">Repository not found.</div>;
  }

  return (
    <div className="repository-detail-container">
      <h1 className="repository-detail-heading">Repository Details</h1>
      <div className="repository-info">
        <p className="repository-info-label">Name:</p>
        <p className="repository-info-value">{repository.name}</p>
      </div>
      <div className="repository-info">
        <p className="repository-info-label">Description:</p>
        <p className="repository-info-value">
          {repository.description || "No description available"}
        </p>
      </div>
      <div className="repository-info">
        <p className="repository-info-label">URL:</p>
        <a href={repository.html_url} className="repository-info-link">
          {repository.html_url}
        </a>
      </div>
    </div>
  );
};

export default RepositoryDetail;
