function showMessage(){

  const message =
  document.getElementById("message");

  message.style.display = "block";

  document.getElementById("message").innerHTML = `

  Olen ylpeä susta. ♡<br><br>

  Et oo mulle kuka tahansa paras kaveri,
  vaan ihminen kenen kanssa kaiken maailman jakaisin.
  <br><br>

  Haluun et me jatketaan kasvua yhdessä
  niin kuin me ollaan jatkettu jo 8 vuotta,
  sillä en malta oottaa et mun tulevat lapset
  saa tutustuu heidän future favorite auntieen 
  mutta ennen kaikkea yhteen maailman
  kauneimmista ihmisistä who has one of the truest heart. ♡
  <br><br>

  Sä oot mulle safe space,
  ja ihminen jonka toivon ruusun lailla jatkavan aina kukkimistaan,
  ettei sun valo ikinä hiivu.
  <br><br>

  Kiitos että oot juuri sinä. ♡

  <br><br>

  <img src="teidankuva.jpg" class="insidePic">

  `;
}

/* SYDÄMET */

function createHeart(){

  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "♡";

  heart.style.left =
    Math.random() * window.innerWidth + "px";

  heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";

  heart.style.animationDuration =
    (Math.random() * 5 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 300);