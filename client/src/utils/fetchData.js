/* eslint-disable no-debugger */
import axios from "axios";

const fetchDataGet = async (url = "") => {
  try {
    let config = {
      url,
      method: "get",
    };

    let response = await axios(config);
    
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { fetchDataGet };
