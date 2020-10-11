const inputURL = document.querySelector('#imgURL');
const inputTop = document.querySelector('#firstLine');
const inputBottom = document.querySelector('#secondLine');
const submitBtn = document.querySelector('#submitBtn');
const clearBtn = document.querySelector('#clearBtn');
const memeDiv = document.querySelector('#memeDiv');
let newLi;
let memeCounter = 1;

submitBtn.addEventListener("click", function(event){
  event.preventDefault();
  createMeme();
})

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    inputURL.value = '';
    inputTop.value = '';
    inputBottom.value = '';
  })

function createMeme(){
    let meme = document.createElement('div');
    meme.setAttribute('class', 'newMeme');
    meme.style.backgroundImage = "url(" + inputURL.value + ")";
    let topLine = document.createElement('div');
    topLine.innerText = inputTop.value;
    topLine.setAttribute('class', 'topLine');
    let bottomLine = document.createElement('div');
    bottomLine.innerText = inputBottom.value;
    bottomLine.setAttribute('class', 'bottomLine');
    let closeOverlay = document.createElement('div');
    closeOverlay.setAttribute('class', 'hidden');
    closeOverlay.innerText = 'x';
    meme.append(topLine, bottomLine, closeOverlay);
    memeDiv.appendChild(meme);
    meme.addEventListener('click', function(){
        meme.remove()
    });
    meme.addEventListener('mouseover', function(){
        closeOverlay.classList.add('close');
    })
    meme.addEventListener('mouseout', function(){
        closeOverlay.classList.remove('close');
    })
    return;
};

