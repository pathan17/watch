


function updateWatch(){
const spanhour = document.getElementById("hour");
const spanminit = document.getElementById("minit");
const spansecound = document.getElementById("secound");

const now = new Date();
const hours = String(now.getHours());
const minits = String(now.getMinutes());
const secounds = String(now.getSeconds());

spanhour.textContent = hours;
spanminit.textContent = minits;
spansecound.textContent = secounds;

}
   
setInterval (updateWatch,1000)


updateWatch()