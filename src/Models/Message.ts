import axios from "axios";
import UserModel from './User'

class Message {
  user: typeof UserModel | undefined
  headers = {
    "Content-Type": "application/json",
  };
  async send(user: typeof UserModel | undefined, recepient: string, message: string) {
    try {
      const url = `https://api.green-api.com/waInstance${user?.idInstance}/sendMessage/${user?.apiTokenInstance}`;
      const payload = `{\r\n\t"chatId": "${recepient}",\r\n\t"message": "${message}"\r\n}`;
      return await axios.post(url, payload, { headers: this.headers });
    } catch {
      alert("Ошибка отправки сообщения");
    }
  }
  async recive(user: typeof UserModel | undefined) {
    try {
    const url = `https://api.green-api.com/waInstance${user?.idInstance}/receiveNotification/${user?.apiTokenInstance}`;
    return await axios.get(url);
  } catch {
    alert("Ошибка получения сообщения");
  }
  }
  async delete(user: typeof UserModel | undefined, id: number) {
    try {
    const url = `https://api.green-api.com/waInstance${user?.idInstance}/deleteNotification/${user?.apiTokenInstance}/${id}`;
    return await axios.delete(url);
  } catch {
    alert("Ошибка удаления сообщения");
  }
  }
}

const messageModel = new Message();
export default messageModel;
