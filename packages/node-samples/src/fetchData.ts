const fetchData = (errMsg?: string) => {
  if (errMsg) {
    return new Promise((_resolve, reject) => {
      reject(errMsg);
    });
  }
  return new Promise((resolve) => {
    resolve("Hello");
  });
};

export default fetchData;
