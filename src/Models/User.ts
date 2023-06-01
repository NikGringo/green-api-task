import axios from "axios";

class UserModel {
  idInstance: string = "";
  apiTokenInstance: string = "";

  host = "https://api.green-api.com";
  async getInfo(idInstance: string, apiTokenInstance: string) {
    const url = `${this.host}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
    return await axios.get(url);
  }
}
const userModel = new UserModel();
export default userModel;
