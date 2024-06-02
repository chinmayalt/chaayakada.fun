window.addEventListener('load', function() {
  new Noty({
    type: 'warning',
    layout: 'center', 
    text: 'Scroll inside the box to see the next slides!!!',
    timeout: 2000, 
  }).show();
});



const rightBox = document.querySelector('.right ');
const imageContainer = document.querySelector('.image-container');
const content = document.querySelector('.content');
const images = ['img5.jpg', 'img1.jpg', 'img2.jpg', 'img4.jpg' , 'img3.jpg'];
const texts = ["Maaammuuu.... guess whattt dayyy it iss.....its yourr birthdayyy buahahah.. Fucker you got me to get excitedd for youurr birthdayy.... OK so this is going to be very blah blah blah... but thodakkathilll lemmeee sayyyyy..........HAPPPYYYY BIRTTHHDAYYYY BABBBYYYYYY .... LOOTS AND LOOOOOOTSSSS OFFF KISSHESSS FORR YOUUU 😚😚😚😚😚💕💕.... hehhehehe.... you haveeee nooo ideaaaa howwww muchh youu meaaan to mee.... me typing thiss and soo excited even thinking about you :) .... fuckerr,,, you'ree justt perfecttt.. ",
                "idk what else to explain hehe... you'ree perfectt the wayy i see it... you'ree justt shoo shoooo nicee... andd mee veryy veryyyy glaaddd and thankfulll you'ree myy frienddd and that you existt ... soo thats today .. the day you were born... the best day ever ( exaggerated ) but still hehe... soo fuckerrr Thaannguuuuuuu ... for beingg thereee in my life.. and its not just beingg there... me have been soooo happyyy.... and sooo comfortable since you've been there hehehe .. ok 0_0 mathiyalle... see me go blah balh blah", 
                'Alll thee timeee i haddd with youuu... itss beeen the besttt.... i meaan itt... fuckerrr me really scaredd... but yea maamuu no leaavee... i wanna beee withh youu foreveerrrr hehe ... and spend sooooo muchh timee with youu... and dooo alll kinds of vekili with youuu .... givee youu kisshess... annooyyy youuu... hugg youu... bitee youu... basicallyyy i wantt youuu!!!! not for anyone else 😌😌 I wishh myy babbyy kore koreeee yearsssss ... me wanna celebratee yourr birthdayyy withh youuu eeh that wholee day with you... ok edk vallom vere arkkelkum kananel vidam meh... ooo and the paawaa.... mee hopee you louuu it hehehe ', 
                'Ohhh thiss dayy wasss sooo funn hehehe... it was 2 dayss adupichh.... adyathe day paadath poi kedn ucha varee hehehe sooo muchh funn i hadd with my babbyyyy eeehh... goodd i missh youu sooo muchh.... meee louuuu youuu maaammuuuuu .. yea and the second day we went to vilangan kunnu and shobha and the parkk... thats thee bestttt outingg we had... me wantt likee that again and again and again... and vaikittum povanda... i would be sad... we stayy togetherr... hehehhhe .... fuckerr idk anything andd everythitngggg us doingg it together in my mindd justt makess itt soo much more fun... i have told you all this but me wanna tell you again ... and bday aitt nthelm okke paraynde', 
                "Fuckerrr i really reallyy hope we go to amrita togethrr... i have putt sooo muchh hope on that... me wont be able to handle the sadness .... mee wishh mee have kore kore koreeee time with youu.... 100 years buahaha ... ok you would diee... but even tht wouldnt be enoughh with my maaammuuu.... Shooooo me have been blabbering... ok one more thing.... me not veryy skilled in making video okke... and anything that would be done ig.... but this is what me good at... codinggg yea so this is why me made you this... okay.... and what else... yea oo hehe you've become one of my favourite things to doo haha ( oh me do you ) ... like i said me do this all day .... either code talk to you or watch series ;-; i dont even talk to gouri and sona much now... its not you .. i'm just like that... oraaale kond irikum :) ... yea ok me go bla bla bla blah ablh........Soooooooo againnn.....HAPPYYY BIRTHDAYYYYYYY BAAABBYYYYYY.....YOU'REEE 19 NOWWW.... BIIIGGG GIRLLL MAAMUU IS NOWW... BEE STRONGG OKAYY HEHE... WHATEVERR HAPPENSS CHIMNAYY THERE FOR YOU 0_0 YAYYYY OK BYE TATA" , 
              ];
let currentIndex = 0;
let isAnimating = false;
const box = document.querySelector('.box');

function showImage(index) {
  const image = images[index];
  const text = texts[index];
  imageContainer.innerHTML = `<img src="${image}" alt="Image ${index + 1}">`;
  content.innerHTML = `<p>${text}</p>`;
}

showImage(currentIndex);

section1.addEventListener('wheel', (event) => {
  event.stopPropagation();
  // Check if animation is in progress
  if (isAnimating) return;

  const deltaY = event.deltaY;
  const direction = deltaY > 0 ? 1 : -1;

  // Check if scrolling inside the box
  var isInsideBox = event.target.closest('.box') !== null;
  if (isInsideBox) {
    if (direction === 1 && currentIndex < images.length - 1) {
      currentIndex++;
      animateScroll();
    } else if (direction === -1 && currentIndex > 0) {
      currentIndex--;
      animateScroll();   
  }
  
  
  }
});

function animateScroll() {
  isAnimating = true;
  rightBox.classList.add('show');
  setTimeout(() => {
    showImage(currentIndex);
    rightBox.classList.remove('show');
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }, 500);
}


function redirectToPage() {
  window.location.href = "https://kewll.fun/maaamu/2"; // Replace with your desired URL
}