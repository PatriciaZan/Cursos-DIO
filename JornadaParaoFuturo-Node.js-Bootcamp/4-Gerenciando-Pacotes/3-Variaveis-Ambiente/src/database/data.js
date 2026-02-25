async function connectDB(user, password) {
  if (
    user === process.env.USERDATABASE &&
    password === process.env.PASSWORDDATABASE
  ) {
    console.log("DB connection approved");
  } else {
    console.log("DB connection failled");
  }
}

export default connectDB;
