$(document).ready(function(){
    $('.slider-galery').bxSlider({
        mode:'horizontal',
        speed: 100,
        pager: true,
        controls: true,
        minSlides: 1,
        maxSlides: 3,
        slideWidth:400,
        auto: false,
        

    });
});


$(function(){
    $('.bxslider').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 400,
      speed: 100,
        pager: true,
        controls: true,
        minSlides: 3,
        maxSlides: 3,
        slideWidth:400,
        auto: false,
        
    });
  });


$(function() {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});




$(document).ready(function(){
  $('.foto-more').hide();
  $('.foto-open').click(function(){
      $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
      if($(this).hasClass('opened')) {
          $(this).html('Свернуть');
      }
      else {
          $(this).html('Развернуть');
      }
  });
  });
  

  function handleSubmit() {
    const policyCheckbox = document.body.querySelector('#policy_agreement');
    const policyCheckboxWrapper = document.body.querySelector('#policy_agreement_wrapper');
    if (policyCheckbox.checked) {
      policyCheckboxWrapper.style.border = 'none';
     // submit();
      return;
    }
      policyCheckboxWrapper.style.border = '1px solid red';
  }


 // let small = document.querySelector('.foto-left-small');
 // let large = document.querySelector('.foto-left-large');
  
 // function handleSmallClick() {
     // small.style.display = 'none';
    //  large.style.display = 'block';
    
  //    large.classList.add('foto-left-large-active');


  //}
 //function handleLargeClick() {
 // large.classList.remove('foto-left-large-active');
     //small.style.display = 'block';
     //large.style.display = 'none';
  
 //}
 const photoContainer = document.querySelector('#photo-container');

 function handleContainerClick(e) {
   const target = e.target;

   if (target.tagName !== 'IMG') {
     return;
   }

   // if small picture execute this if
   if (target.closest('.foto-small')) {
    const smallContainer = target.closest('.foto-small');
    const largeContainer = smallContainer.nextElementSibling;
    largeContainer.classList.add('foto-large-active');
    return;
   }

   const largeContainer = target.closest('.foto-large');
   largeContainer.classList.remove('foto-large-active');
  
 }
 
  photoContainer.addEventListener('click', handleContainerClick);

  // let centerSmallPhoto = document.querySelector('.foto-center-small');
  // let centerLargePhoto = document.querySelector('.foto-center-large');

  // function click1() {
  //     centerSmallPhoto.style.display = 'none';
  //     centerLargePhoto.style.display = 'block';
  // }
  // function click2() {
  //   centerSmallPhoto.style.display = 'block';
  //   centerLargePhoto.style.display = 'none';
  // }

  // centerSmallPhoto.addEventListener('click', click1);
  // centerLargePhoto.addEventListener('click', click2);




