let play = document.getElementById('play');
let second = document.querySelector('.sec');
let fixed = document.querySelector('.fixed');
let minute = document.querySelector('.min')
let fixedmin=document.querySelector('.minfix')
let Reset= document.getElementById('reset')
let intervalId;
let min 
let secs
function onClick() {
  if (play.innerText === 'START') {
    min = minute.innerText;
    secs = second.innerText;
    intervalId = setInterval(() => {
      secs++;

       if(secs > 9)
       {
        fixed.style.display='none'
       } 

      if (secs > 59) {
        secs = 0;
        fixed.style.display = 'inline';
        min++;
      }
      if(min>9)
      {
       fixedmin.style.display='none';
      }
      minute.innerText = min;
      second.innerText = secs;
    }, 1000);

    play.innerText = 'STOP';
  } else {
    play.innerText = 'START';
    clearInterval(intervalId);
  }
}
function reset()
{
  min=0;
  minute.innerText=min
  fixedmin.style.display='inline'
  secs=0;
  fixed.style.display='inline'
  second.innerText=secs
}

play.addEventListener('click', onClick);
Reset.addEventListener('click', reset);
