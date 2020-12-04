import axios from "axios";

export const getRepos = async () => {
  const resp = await axios.get("http://api.github.com/users/anilaydinn/repos");

  return resp.status === 200 ? resp.data : null;
};
