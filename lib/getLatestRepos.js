import axios from "axios";

const getLatestRepos = async (data) => {
  // console.log("data", data);
  try {
    const username = data.githubUsername;

    // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
    );
    let repos = res.data.items;
    return repos.splice(0, 6);
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
