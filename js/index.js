var apiKey = "b5665192-cbb1-4e74-8efb-541c574af3ad";
var texto = "";

fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
    apiKey
)
  .then((response) => {
    if (!response.ok)
      throw new Error("Erro ao conectar à API" + response.status);
    return response.json();
  })
  .then((api) => {
    for (let i = 0; i < 10; i++) {
      texto =
        texto +
        `
          <div class='media'>
              <img src='coin.jpg' class='align-self-center mr-3' alt='coin' width='100' height='60'>
              <div class='mediabody'>
                  <h5 class='mt-2'>${api.data[i].name}</h5>
                  <p>${api.data[i].symbol}</p>
              </div>
              <div align='center'>
                    <p>First Historical Data: ${api.data[i].first_historical_data}</p>
              </div>
          </div>        
          
          `;

      document.querySelector("#coin").innerHTML = texto;
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
