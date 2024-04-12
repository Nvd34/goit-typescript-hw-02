
function getPromise<T extends Array<string | number>>(): Promise<T> {
  return new Promise<T>((resolve) => {
    resolve(["Text", 50] as T);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};
