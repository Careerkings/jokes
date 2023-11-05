const apiKey = 'ZgsQO9gJL8cFECQcsPpNHg==RYkZQ5rraGwLUcsa';
const apiUrl = 'https://api.api-ninjas.com/v1/jokes?Limit=1';
const option = {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey
    }
}




const jokesEl = document.getElementById('jokes');
const btnEl = document.getElementById('btn');


const getJokes = async () => { 
    

       fetch(apiUrl, option).then(res => res.json()).then(data => { 
        console.log(data[0].joke)
        jokesEl.textContent = data[0].joke;

       }).catch(error => {
        jokesEl.textContent = 'joke not available'

       })
}

btnEl.addEventListener('click', getJokes)












