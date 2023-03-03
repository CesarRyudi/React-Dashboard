const buscaData = (
  locais = "1%2C2",
  datainicio = "2022-12-01",
  datafim = "2023-12-01"
) => {
  const url = `http://192.168.1.199:8085/api/v1/frontend/leituras?locais=${locais}&datainicio=${datainicio}&datafim=${datafim}`;

  console.log(url);
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(JSON.stringify(data)));
};
export default buscaData;