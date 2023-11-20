const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = response?.data;
    return data;
  } catch (error) {
    console.error("Error fetching: ", error);
    throw error;
  }
};

module.exports = fetchData;
