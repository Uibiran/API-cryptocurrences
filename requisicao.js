//API key
var apikey = {
    key: 'ee63489e-9fab-4225-84a0-82c7c53d9fc6'
}
//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API+KEY=' + 
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + 
        response.status);
        return response.json();
    })
.then((api) => {
    console.log(api);
})
.catch((error)=>{
    console.error(error.message);
})