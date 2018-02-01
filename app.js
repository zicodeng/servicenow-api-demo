var instance = 'dev18920';

var username = 'admin';
var pwd = 'Qwer1234';

// Create a new Axios instance with default settings.
var mAxios = axios.create({
    baseURL: `https://${instance}.service-now.com/api/now/v2/`,
    timeout: 5000,
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    auth: {
        username: username,
        password: pwd
    }
});

// Table API
// Get incident table which contains all incident tickets.
mAxios
    .get('table/incident')
    .then(function(response) {
        console.log(response.data.result);
    })
    .catch(function(error) {
        console.log(error);
    });
