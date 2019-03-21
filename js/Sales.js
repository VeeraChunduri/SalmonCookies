'use strict';
function Cookies(name,minNumCust,maxNumCust,avgCookieSale) {
  this.name = name;
  this.minNumCust = minNumCust;
  this.maxNumCust = maxNumCust;
  this.avgCookieSale = avgCookieSale;
}
Cookies.prototype.getCustCount=function(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

var firstandpike = new Cookies('1st and Pike',23,65,6.3);
var seatac = new Cookies('SeaTac Airport',3,24,1.2);
var seattlecenter = new Cookies('Seattle Center',11,38,3.7);
var capitolhill = new Cookies('Capitol Hill',20,38,2.3);
var alki = new Cookies('Alki',2,16,4.6);
var stores = [firstandpike, seatac, seattlecenter, capitolhill, alki];    

  var StoreList = document.getElementById('store-table');
  let rows = new Array(13);
  var storetime;
  var numCust;
  var numCookies;
  var storeCount =0;
  function generatetable () {
  
    var trr = document.createElement('tr');
    trr.style.border="1px solid black";
    var thh = document.createElement('th');
    thh.style.border="1px solid black";
   
    var tx1 = document.createTextNode('Location');
    thh.appendChild(tx1);
    trr.appendChild(thh);
     
  for (var i = 6; i <= 19; i++) 
  {  
    var thh = document.createElement('th');
    thh.style.border="1px solid black";

      if (i < 12) {
        storetime = i + 'am';}
    else if (i===12) {
        storetime = i + 'pm' ;
    }
        else if(i>12) {
         storetime = (i-12) + 'pm' ;
        }
    var tx1 = document.createTextNode(storetime);
    thh.appendChild(tx1);
    trr.appendChild(thh);
    StoreList.appendChild(trr);
   
  } //heading is constructed

var th = document.createElement('th');
th.style.border="1px solid black"
var header = document.createTextNode("Daily Location Total"); 
th.appendChild(header)
trr.appendChild(th);
for (var i = 6; i <= 19; i++) 
    rows[i-6]=0;

  while (storeCount < stores.length) {
    var totCookies = 0;
    var trr = document.createElement('tr');
    trr.style.border="1px solid black";
    var tdd = document.createElement('td');
    var tx = document.createTextNode (stores[storeCount].name);
    tdd.appendChild(tx);
    trr.appendChild(tdd);
    StoreList.appendChild(trr);  
    
    for (var i = 6; i <= 19; i++) 
    {  
      var thh = document.createElement('th');
      thh.style.border="1px solid black";
      numCust = stores[storeCount].getCustCount(stores[storeCount].minNumCust,stores[storeCount].maxNumCust);
      numCookies = Math.ceil(numCust * stores[storeCount].avgCookieSale); 
      var tx1 = document.createTextNode(numCookies);
      thh.appendChild(tx1);
      trr.appendChild(thh);
      StoreList.appendChild(trr);
      totCookies = totCookies + numCookies;
      rows[i-6] = rows[i-6] + numCookies;
    } //heading is constructed
    var td = document.createElement('td');
    td.style.border="1px solid black"
    var header = document.createTextNode(totCookies); 
    td.appendChild(header)
    trr.appendChild(td);
    storeCount++;
  }
var tr = document.createElement('tr');
tr.style.border="1px solid black";
var td = document.createElement('td');
td.style.border="1px solid black"
var header = document.createTextNode('Total'); 
td.appendChild(header);
tr.appendChild(td);

for (i=0; i<rows.length;i++) {   
    var td = document.createElement('td');
    td.style.border="1px solid black" 
    td.style.textAlign="center"
    var data = document.createTextNode(rows[i]); 
    td.appendChild(data)
    tr.appendChild(td);
}
StoreList.appendChild(tr);
}
  generatetable();