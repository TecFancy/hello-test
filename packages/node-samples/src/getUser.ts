// import { Octokit } from "octokit";

// const octokit = new Octokit({
//   auth: "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",
// });

const axios = require("axios");

const getUser = (params: { name?: string }) => {
  return axios.post("http://127.0.0.1:10086/users", params);
};

export default getUser;
