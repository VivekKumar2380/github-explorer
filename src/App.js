import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPage from './components/InitialPage';
import RepositoryList from './components/RepositoryList';
import RepositoryDetail from './components/RepositoryDetail';
import FollowersList from './components/FollowersList';
import FollowerRepositoryList from './components/FollowerRepositoryList'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<InitialPage />} />
        <Route path='/repositories/:username' element={<RepositoryList />} />
        <Route path='/repository/:repoName' element={<RepositoryDetail />} />
        <Route path='/followers/:username' element={<FollowersList />} />
        <Route path='/follower-repositories/:followerUsername' element={<FollowerRepositoryList />} />
        <Route path='*' element={"No url found"}/> 
      </Routes>
    </Router>
  );
}

export default App;
