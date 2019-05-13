import Axios from "axios";

const getDataFromDB = async () => {
  let clients = await Axios.get(`http://localhost:2000/clients`);
  return clients.data;
};

const getClients = async () => {
  let clients = await Axios.get(`http://localhost:2000/client/actions`);
  return clients.data;
};

const updateClient = async (clientId, UpdateProperty, updateValue) => {
  await Axios.put(
    `http://localhost:2000/client/${clientId}/?propToUpdate=${UpdateProperty}`,
    { value: updateValue }
  );
};

export { getDataFromDB, getClients, updateClient };
