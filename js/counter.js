const numberBlock = document.getElementById("numbers");
const endPoint = 60;
const speed = 2; // скорость, время за которое нужно произвести анимацию в сек
var scores = {
  score1: { score: 0,  end: 5100 },
  score2: { score: 0,  end: 17 },
  score3: { score: 0,  end: 29 }
};

window.addEventListener('scroll', function() {
  const numberBlockPos = numberBlock.offsetTop,
        winHeight = window.innerHeight;
  let winScrollTop = window.scrollY,
      scrollToElem = winScrollTop + winHeight,
      anamatedNumbers = false;
  
  if( (scrollToElem + 30 > numberBlockPos) && !anamatedNumbers) {
    TweenMax.to(scores.score1, speed, {score: scores.score1.end, onUpdate: updateHandler, onUpdateParams: [1]});
    TweenMax.to(scores.score2, speed, {score: scores.score2.end, onUpdate: updateHandler, onUpdateParams: [2]});
    TweenMax.to(scores.score3, speed, {score: scores.score3.end, onUpdate: updateHandler, onUpdateParams: [3]});
  }
});

function updateHandler(index) {
  let numberBlock = document.querySelector('.col[data-target="' + index  + '"] div');
  numberBlock.innerHTML = scores[`score${index}`].score.toFixed(0);
}
