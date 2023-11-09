function getNews(params) {
    const url = 'https://newsi-api.p.rapidapi.com/api/category?category=world&language=en&country=us&sort=top&page=1&limit=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd3df6e72f5msh0abcfec439681abp18c4d8jsn251ed9143e49',
		'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
	}
};

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}

getNews();


function getWeather(params) {
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Birmingham&days=3';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd3df6e72f5msh0abcfec439681abp18c4d8jsn251ed9143e49',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
       
}

getWeather();