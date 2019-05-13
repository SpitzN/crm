import Axios from "axios";
import { async } from "q";

const getDataFromDB = async () => {
  let clients = await Axios.get(`http://localhost:2000/clients`);
  return clients.data;
};

const getClientToUpdate = async () => {
  let clients = await Axios.get(`http://localhost:2000/actions`);
  return clients.data;
};

export { getDataFromDB, getClientToUpdate };
