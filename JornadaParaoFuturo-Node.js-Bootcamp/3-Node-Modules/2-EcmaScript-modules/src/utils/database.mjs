const dataBaseType = {
  userType: "admin",
  typeData: "datalocal",
};

async function connectToDatabase(dataName) {
  console.log("Connecting: ", dataName);
}

async function disconnectToDatabase() {
  console.log("Disconecting: ", dataName);
}

export { connectToDatabase, disconnectToDatabase, dataBaseType };
