function attachEvents() {
    const LocationsAPI = "http://localhost:3030/jsonstore/forecaster/locations";
    const locationInputEl = document.querySelector("#request > #location");

    const submitBtn = document.querySelector("input#submit");
    const currCondEl = document.querySelector("div#forecast > div#current");
    const upcomingCondEl = document.querySelector("div#forecast > div#upcoming");

    submitBtn.addEventListener("click", solve);

    async function solve() {
        const currLocation = locationInputEl.value.toLowerCase();
        let code = "";

        const res = await fetch(`${LocationsAPI}`);
        const data = await res.json();

        for (const l of data) {

            if (l.name.toLowerCase() == currLocation) {
                code = l.code;
            }
        }

        const currCond = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        const currCondData = await currCond.json();
        console.log(currCondData);

        const currCondition = currCondData.forecast.condition;
        let currWeatherSymb = ''
        
        switch (currCondition) {
            case "Sunny": currWeatherSymb = '&#x2600'; break;
            case "Partly sunny": currWeatherSymb = '&#x26C5'; break;
            case "Overcast": currWeatherSymb = '&#x2601'; break;
            case "Rain": currWeatherSymb = '&#x2614';break;
            case "Degrees": currWeatherSymb = '&#176'; break;
            default: currWeatherSymb = ''; break;
        }

        console.log(currWeatherSymb);
        


        const upcomingCond = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        const upcomingCondData = await upcomingCond.json();
        console.log(upcomingCondData);

        upcoming

        

        const forecastsDiv = document.createElement('div');
        forecastsDiv.classList.add('forecasts');

        const conditionSymbSpan = document.createElement('span');
        conditionSymbSpan.classList.add('condition', 'symbol')

        const conditionSpan = document.createElement('div');
        conditionSpan.classList.add('condition');

        for (let i=0; i<3; i++) {
            const forecastData = document.createElement('span')
            forecastData.classList.add('forecast-data');
            console.log(forecastData);
            
        }
        
        
        
         

    }
}

attachEvents();
