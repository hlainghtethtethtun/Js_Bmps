'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const addHidden = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const removeHidden = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for(let i=0; i<btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click',removeHidden);
};

btnCloseModal.addEventListener('click',addHidden);

overlay.addEventListener('click',addHidden);

document.addEventListener('keydown', function(e){
    // console.log(e.key); && !modal.classList.contains('hidden')
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        addHidden()
        // document.querySelectorAll('.show-modal').style.outline = 'none';
    };
});
