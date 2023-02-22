const getUser = (params: { name?: string }) => {
  return new Promise((resolve, reject) => {
    if (params) {
      resolve({
        name: params.name,
        email: `${params.name?.toLowerCase()}@foxmail.com`,
      });
    } else {
      reject({ status: "error", msg: "Please provide a `name` parameter." });
    }
  });
};

export default getUser;
