
const contentful = require("contentful");
export const client = contentful.createClient({
  space: REACT_APP_SPACE_ID,
  accessToken: REACT_APP_ACCESS_TOKEN,
});