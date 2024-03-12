const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_760bcd8ec8a44ff5ae1f04b7e27dfee0'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICdEMDgwMTYzQTkwRjJhNTEzY0JEZUFhQzc2NzYyRTQ0QWU0RkMyYWMxJykgJiYgCih0eF9sb2dzX2FkZHJlc3MgPT0gJzB4ODEyMDI5MjdiMWM1QjNCNzVmMWM2MjVlOWM4NTcxYTgxNzYzNjUzQycpICYmIAoodHhfbG9nc190b3BpYzAgPT0gJzB4ZGRmMjUyYWQxYmUyYzg5YjY5YzJiMDY4ZmMzNzhkYWE5NTJiYTdmMTYzYzRhMTE2MjhmNTVhNGRmNTIzYjNlZicp',
  network: 'ethereum-sepolia',
  destinationIds: ['007a6628-a7c8-4af3-9d86-af5be24f966d']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ 'D080163A90F2a513cBDeAaC76762E44Ae4FC2ac1') && 
// (tx_logs_address == '0x81202927b1c5B3B75f1c625e9c8571a81763653C') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')