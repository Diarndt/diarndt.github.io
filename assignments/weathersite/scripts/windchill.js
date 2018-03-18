 function wind() {
    var high = parseFloat(document.getElementById("highTemp").innerHTML);
    var low = parseFloat(document.getElementById("lowTemp").innerHTML);
  var t = (high + low) / 2;  
    var s = parseFloat(document.getElementById("windSpeed").innerHTML);
    var f = windChill(t,s);
     
   document.getElementById('windchill').innerHTML=f;
}
 function windChill(s,t) {    
    var chill = (35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16));
   
    return chill;
}