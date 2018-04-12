
var section = document.querySelector('section');

var request = new XMLHttpRequest();

var url = "data/services.json";

request.open('GET', url , true);
request.responseType = 'json';
request.send();

request.onload = function() {
    var serviceData = request.response;
    
    showData(serviceData);
}


function showData(jsonObj) {
    var data = jsonObj['serviceData'];
    
    for (var i = 0; i< data.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myH3 = document.createElement('h3');
        var myList = document.createElement('ul');
        
        myH2.textContent = data[i].name;
        myPara1.textContent = 'Price: ' + data[i].price;
        myH3.textContent = 'Details:';
        
        var serviceDetails = data[i].detail;
        for (var j = 0; j < serviceDetails.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = serviceDetails[j];
            myList.appendChild(listItem);
        }
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myList);
        
        section.appendChild(myArticle);
    }
}



        