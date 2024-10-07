import axios from 'axios'

const github=axios.create({
  baseURL:import.meta.env.VITE_GITHUB_URL,
  headers:{Authorization :`token:${import.meta.env.VITE_GITHUB_TOKEN}`}
  
})

export const searchUser = async (username) => {
  const params = new URLSearchParams({
    q: username,
  });
  try {
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUser = async (login) => {
  const response = await fetch(`https://api.github.com/users/${login}`);
  if (response.status === 404) {
    return response.status;
  }
  const data = await response.json();
  return data;
};

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await fetch(
    `https://api.github.com/users/${login}/repos?${params}`
  );
  if (response.status === 404) {
    return response.status;
  }
  const data = await response.json();
  return data;
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}