import axios from "axios";

export default {
  getRandomUser: function () {
    return axios.get(
      "https://randomuser.me/api/?inc=name,email,picture,cell&nat=us&results=100"
    );
  },
};
