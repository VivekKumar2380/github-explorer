
export async function fetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return response.json();
  }
  
  export async function fetchGitHubRepositories(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Repositories not found');
    }
    return response.json();
  }
  export async function fetchGitHubFollowers(username) {
    const response = await fetch(`https://api.github.com/users/${username}/followers`);
    if (!response.ok) {
      throw new Error('Repositories not found');
    }
    return response.json();
  }
  