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
    { value: updateValue },
    function() {
      console.log(clientId, UpdateProperty, updateValue);
    }
  );
};

const addClient = async (name, country, owner) => {
  const newClient = {
    name: name,
    email: "",
    firstContact: Date.now(),
    emailType: null,
    sold: false,
    owner: owner,
    country: country
  };
  await Axios.post(`http://localhost:2000/client/new`, newClient).catch(
    error => {
      console.log(error);
    }
  );
};

export { getDataFromDB, getClients, updateClient, addClient };
