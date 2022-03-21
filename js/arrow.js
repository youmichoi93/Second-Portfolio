// arrow
function transformNext(event) {
    const slideNext = event.target;
    const slidePrev = slideNext.previousElementSibling;
    const classList = slideNext.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');

    if (Number(activeLi) < 0) {
        activeLi = Number(activeLi) + 173;
        slidePrev.style.color = '#2f3059';
        slidePrev.classList.add('slide-prev-hover');
        slidePrev.addEventListener('click', transformPrev);

        if (Number(activeLi) === 0) {
            slideNext.style.color = '#cfd8dc';
            slideNext.classList.remove('slide-next-hover');
            slideNext.removeEventListener('click', transformNext);
        }
    }

    classList.style.transition = 'transform 1s';
    classList.style.transform = 'translateX(' + String(activeLi) + 'px)';
    classList.setAttribute('data-position', activeLi);    
}

function transformPrev(event) {
    const slidePrev = event.target;
    const slideNext = slidePrev.nextElementSibling;
    const classList = slidePrev.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');
  
   if (classList.clientWidth < (liList.length * 173 + Number(activeLi))) {
       activeLi = Number(activeLi) - 173;

      if (classList.clientWidth > (liList.length * 173 + Number(activeLi))) {
        slidePrev.style.color = '#cfd8dc';
        slidePrev.classList.remove('slide-prev-hover');
        slidePrev.removeEventListener('click', transformPrev);
      } 

       slideNext.style.color = '#2f3059';
       slideNext.classList.add('slide-next-hover');
       slideNext.addEventListener('click', transformNext);
   }

   classList.style.transition = 'transform 1s';
   classList.style.transform = 'translateX(' + String(activeLi) + 'px)';
   classList.setAttribute('data-position', activeLi);
}

const slidePrevList = document.getElementsByClassName('slide-prev');

for (let i = 0; i < slidePrevList.length; i++) {
    let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
    let liList = classList.getElementsByTagName('li');

    if (classList.clientWidth < (liList.length * 173)) {
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click', transformPrev);
    } else {
       const arrowContainer = slidePrevList[i].parentElement;
       arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
       arrowContainer.removeChild(slidePrevList[i]);
    }
}