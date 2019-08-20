import axios from "axios";
const API_URL = "https://lichess.org/api/user/";

export class LichessAPIService {
  constructor() {}

  // this is the part i'm working on
  getuser(username) {
    const url = `${API_URL}/${username}`;

    return axios
      .get(url)
      .then(response => response.data)
      .catch();
  }
}
