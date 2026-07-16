/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num){

if(pin.length >= 4) return;

pin += num;

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function clearPin(){

pin = pin.slice(0,-1);

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function checkPin(){

if(pin === "1806"){

document.getElementById("pinScreen")
.style.display="none";

document.getElementById("website")
.classList.remove("hidden");

document.getElementById("music")
.play().catch(()=>{});

}else{

alert("Wrong PIN ❤️");

pin="";

document.getElementById("pinInput")
.value="";

}

}

/* =========================
   OPEN HEART
========================= */

function openHeart(){

document.getElementById("bottleSection")
.classList.remove("hidden");

document.getElementById("bottleSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position="fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top="-30px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.opacity=".8";

heart.style.pointerEvents="none";

heart.style.animation =
`fall ${Math.random()*4+6}s linear`;

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,600);

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(120vh);
opacity:0;
}

}

@keyframes flowerBurst{

0%{
opacity:1;
transform:
translate(0,0)
scale(.5);
}

100%{
opacity:0;
transform:
translate(
var(--x),
var(--y)
)
scale(1.5)
rotate(360deg);
}

}

`;

document.head.appendChild(style);

/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;

function breakBottle(){

if(bottleOpened) return;

bottleOpened = true;

const bottle =
document.getElementById("bottle");

bottle.innerHTML = "💥";

createFlowerBurst();

setTimeout(()=>{

bottle.style.display="none";

document.getElementById(
"letterContainer"
).style.display="block";

typeLetter();

},1500);

}

/* =========================
   FLOWER BURST
========================= */

function createFlowerBurst(){

const flowers =
document.getElementById("flowers");

const emojis = [
"❤️",
"✨",
"🌹",
"❤️",
"✨",
"🌹"
];

for(let i=0;i<40;i++){

const flower =
document.createElement("div");

flower.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

flower.style.position =
"absolute";

flower.style.left = "0px";
flower.style.top = "0px";

flower.style.fontSize =
(Math.random()*15+25)+"px";

flower.style.setProperty(
"--x",
(Math.random()*700-350)+"px"
);

flower.style.setProperty(
"--y",
(-Math.random()*450-50)+"px"
);

flower.style.animation =
"flowerBurst 2.5s forwards";

flowers.appendChild(flower);

setTimeout(()=>{
flower.remove();
},2500);

}

}

/* =========================
   LETTER
========================= */

const message = `

another month with you,
another reason to be grateful
that life brought you into mine.

i don't need perfect days
or a perfect love story.

as long as i have you,
i already have more than enough.

no matter how many months pass,
i'll still choose you,
over and over again.

sayang aku gatau kedepannya
kita kayak gimana.

tapi disetiap kesempatan
aku bakal tetap milih kamu
disetiap versi hidupku.

kamu tau sendiri,
gimana bisa aku cinta orang lain
padahal hatiku isinya
udah kamu semua.

aku juga sadar,
sayang sama kamu
itu keputusan terbaik
yang pernah aku lakuin.

makanya aku bakal gitu terus,
sayang setiap hari.

no matter where life takes us,
i hope i'll always be the reason
you smile,

just like you'll always be mine.

happy mensive, shaka.

i love you,
endlessly ❤️

- jasper

`;

function typeLetter(){

const target =
document.getElementById("letterText");

target.innerHTML="";

let i = 0;

const typing =
setInterval(()=>{

target.innerHTML +=
message.charAt(i);

i++;

if(i >= message.length){

clearInterval(typing);

}

},5);

}

/* =========================
   QUIZ
========================= */

let currentQuestion = 0;

const questions =
document.querySelectorAll(".question");

function checkAnswer(button,correct){

if(!correct){

alert("Salah sayang ❤️");
return;

}

questions[currentQuestion]
.classList.remove("active");

currentQuestion++;

if(currentQuestion < questions.length){

questions[currentQuestion]
.classList.add("active");

}else{

document.getElementById("quizSuccess")
.classList.remove("hidden");

createConfetti();

document.getElementById("quizSuccess")
.scrollIntoView({
behavior:"smooth"
});

}

}

/* =========================
   CONFETTI
========================= */

function createConfetti(){

for(let i=0;i<80;i++){

const confetti =
document.createElement("div");

confetti.innerHTML =
["❤️","✨","🌹"][
Math.floor(Math.random()*3)
];

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top =
"-20px";

confetti.style.fontSize =
(Math.random()*20+15)+"px";

confetti.style.animation =
`fall ${Math.random()*3+3}s linear`;

confetti.style.pointerEvents =
"none";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},6000);

}

}
