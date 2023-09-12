const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');

function deferFn(callback, ms) {
  setTimeout(callback, ms);
}

function processResult(result) {
  status.innerText = result.toUpperCase();
}

function flipCoin() {
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads won' : 'tails won';
  console.log(random, result);
  sendData(result);
  deferFn(function () {
    coin.setAttribute('class', 'animate-' + result);
    deferFn(processResult.bind(null, result), 2900);
  }, 100);
}


const sendData = (coinVal) => {
  // Data to send
  const dataToSend = {
    coinVal,
  };

  axios.post('/api/data', dataToSend)
    .then((response) => {
      // Handle the response from the server
      console.log('Server response:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

button.addEventListener('click', flipCoin)