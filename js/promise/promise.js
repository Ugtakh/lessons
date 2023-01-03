console.log("Promise");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout((id) => {
      resolve([0, 1, 2]);
    }, 2000);
  });
};

const getData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        if (id === 1) {
          resolve("Saraa");
        } else if (id === 2) {
          resolve("boldoo");
        } else {
          reject("Hereglegchiin medeelel oldsongui");
        }
      },
      5000,
      userId
    );

    // reject(new Error("Failed"));
  });
};

getUsers()
  .then((users) => {
    console.log(users);
    getData(users[1])
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log("Error message", err);
  });

console.log("Async and Await");

async function getInfo() {
  const users = await getUsers();
  console.log(users);
  const user = await getData(users[1]);
  // console.log(user);
  return user;
}

getInfo().then((user) => {
  console.log(user);
});

console.log("End");
