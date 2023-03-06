import axios from "axios";
let config = {
  method: "POST",
  data: {},
  url: `http://localhost/wordpress/wp-json/wp/v2/`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3ODA3OTI5NiwiZXhwIjoxODM1NzU5Mjk2fQ.aSNu0EeLSsUxCvWhZ_UtwB3vnT9TFgqsGL9YhsR765g",
  },
};

axios(config)
  .then((response) => {
    let values = response.data;
  })
  .catch((e) => {
    console.log("error", JSON.stringify(e));
  });
export default config;
