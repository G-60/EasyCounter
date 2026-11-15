const inc10 = document.getElementById("inc10");
const inc1 =  document.getElementById("inc1");
const resetbtn = document.getElementById("reset");
const dec10 = document.getElementById("dec10");
const dec1 = document.getElementById("dec1");
let  counter = document.getElementById("counter");
let count = 0;

inc10.onclick = function() {
    count+=10;
    counter.textContent = count;
}
inc1.onclick = function() {
    count+=1;
    counter.textContent = count;
}
resetbtn.onclick = function () {
    count = 0;
    counter.textContent = count;
}
dec10.onclick = function() {
    count-=10;
    counter.textContent = count;
}
dec1.onclick = function () {
    count-=1;
    counter.textContent = count
}