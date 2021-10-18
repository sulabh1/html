new Promise((resolve, reject) => {
  throw new Error("error");
}).then(console.log);
