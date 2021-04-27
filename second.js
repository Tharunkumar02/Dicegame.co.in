// console.log('Lets start');
var livePlayer,playerScores,codeBlock,gameStatus;

start();

document.querySelector('.btn-roll-dice').addEventListener('click',function(){

    if(gameStatus){
        
    // console.log('its working');
    //creating random number from 1 till 6
    var dice = Math.floor((Math.random()*6))+1;
    //getting the dice class
    var theDice = document.querySelector('.dice');

    //set back the dice to be visible or to display block
    theDice.style.display = 'block';

    theDice.src='../Img001/dice-'+dice+'.png';
  
   // console.log(dice);


  if(playerScores[0] < 20 && playerScores[1] < 20){
      
   document.getElementById('live-'+livePlayer).style.display='block';
   playerScores[livePlayer] += dice;
   scoreBlock();
   document.querySelector('#finalScore-'+livePlayer).textContent = playerScores[livePlayer];
   //console.log('Score for player '+livePlayer + ' : '+playerScores[livePlayer]);
   livePlayer === 0 ? livePlayer = 1 : livePlayer = 0;
   document.getElementById('live-'+livePlayer).style.display='none';
   
  }

  else{
     livePlayer === 0 ? livePlayer = 1 : livePlayer = 0;
      document.querySelector('#winner-'+livePlayer).classList.remove('invisible');
      document.querySelector('.dice').style.display = 'none';
      console.log('We have a winner');
      gameStatus = false;
  }
    }
  

});

//call the function scoreblock

function scoreBlock(){
    size = playerScores[livePlayer];

    if(size > 20){
        size = 20;
    }
    switch(livePlayer){

        case 0:
            document.getElementById('player-0-score-block').innerHTML = "";
            for(var i = 0; i < size; i++){
                document.getElementById('player-0-score-block').innerHTML += codeBlock;
            }
            break;
        case 1:
            document.getElementById('player-1-score-block').innerHTML = "";
            for(var i = 0; i < size; i++){
                document.getElementById('player-1-score-block').innerHTML += codeBlock;
            }
            break;
    }
}

// document.querySelector('.btn-reset').addEventListener('click',function(){
// //  alert('reset');
// document.querySelector('.dice').style.display = 'none';
// document.getElementById('finalScore-0').textContent = '0';
// document.getElementById('finalScore-1').textContent = '0';
// document.getElementById('player-0-score-block').innerHTML = '';
// document.getElementById('player-1-score-block').innerHTML = '';
// document.getElementById('live-0').style.display='none';
// document.getElementById('live-1').style.display='none';

// });

document.querySelector('.btn-reset').addEventListener('click',start);

function start(){
playerScores = [0,0];
livePlayer = 0;
codeBlock = '<div class="player-0-score-block-red"></div>';
gameStatus = true;
//set display none for the dice in the middle
document.querySelector('.dice').style.display = 'none';

//set player score to 0
document.getElementById('finalScore-0').textContent = '0';
document.getElementById('finalScore-1').textContent = '0';

//set live status to empty
document.getElementById('live-0').style.display='none';
document.getElementById('live-1').style.display='none';

//set the player block to empty
document.getElementById('player-0-score-block').innerHTML = '';
document.getElementById('player-1-score-block').innerHTML = '';

//add class invisible to winners
document.querySelector('#winner-0').classList.add('invisible');
document.querySelector('#winner-1').classList.add('invisible');
}