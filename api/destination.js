//007a6628-a7c8-4af3-9d86-af5be24f966d
const axios = require('axios');


const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_760bcd8ec8a44ff5ae1f04b7e27dfee0'
};

const data = {
  name: 'My Destination',
  to_url: 'https://ca1e-103-59-202-58.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));