var franklin = document.querySelector('div.frank');
var greenville = document.querySelector('div.green');
var springfield = document.querySelector('div.spring');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
   var townData = request.response;
    showTowns(townData);
    }

function showTowns(jsonObj) {
    var towns = jsonObj['towns'];
    
    for(var i = 0; i < towns.length; i++) {
        
        if(towns[i].name != "Placerton") {
            
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var motto = document.createElement('h4');
            var year = document.createElement('p');
            var population = document.createElement('p');
            var avgRainfall = document.createElement('p');
            var events = document.createElement('ul');
            
            myH2.textContent = towns[i].name;
            motto.textContent = ' Motto: ' + towns[i].motto;
            year.textContent = ' Founded: ' + towns[i].yearFounded;
            population.textContent = ' Population: ' + towns[i].currentPopulation;
            avgRainfall.textContent = ' Average Rainfall: ' + towns[i].averageRainfall + ' inch';
            
            var events1 = document.createElement('h3');
            events1.textContent = ' Events: ';
            
            var events2 = towns[i].events;
            
            for (var j = 0; j < events2.length; j++) {
                var event = document.createElement('li');
                event.textContent = events2[j];
                
                events.appendChild(event);
            }
            
            myArticle.appendChild(myH2);
            myArticle.appendChild(motto);
            myArticle.appendChild(year);
            myArticle.appendChild(population);
            myArticle.appendChild(avgRainfall);
            myArticle.appendChild(events1);
            
            myArticle.appendChild(events);
            
                       
            if(towns[i].name == "Franklin") {
                franklin.appendChild(myArticle);
            }
              else if(towns[i].name == "Greenville") {
                  greenville.appendChild(myArticle);
            }
              else if(towns[i].name == "Springfield") {
                  springfield.appendChild(myArticle);
            }
              
            
            
        }
    }
}