$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    document.getElementsByClassName('modal-menu')[0].classList.toggle('-open-modal-menu');
    $('.sub-list2').removeClass('-open-modal-menu-punkt');
    $('.sub-list1').removeClass('-open-modal-menu-punkt');
    $('.modal-menu').removeClass('-overflow-scroll');
});






$('.first-sub-list-opener').on('click', function() {
    $('.sub-list2').removeClass('-open-modal-menu-punkt');
    $('.sub-list1').toggleClass('-open-modal-menu-punkt');
    $('.modal-menu').removeClass('-overflow-scroll');
});
$('.second-sub-list-opener').on('click', function() {
    $('.sub-list1').removeClass('-open-modal-menu-punkt');
    $('.sub-list2').toggleClass('-open-modal-menu-punkt');
    $('.modal-menu').toggleClass('-overflow-scroll');
});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
function onVideoClick(theLink) {
    document.getElementById("video_pop").innerHTML = "<video autoplay muted loop id=\"the_Video\"><source src=\""+theLink+"\" type=\"video/mp4\"></video>";
    document.getElementById("video_pop").style.display="block";
}

function onPopClick() {
    document.getElementById("video_pop").style.display="none";
    document.getElementById("video_pop").innerHTML = "";
}



!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

    /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');


    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item){

        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function(e) {

            /* Предотвращаем стандартное действие элемента. Так как кнопку разные
               люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
               Нужно подстраховаться. */
            e.preventDefault();

            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
               и будем искать модальное окно с таким же атрибутом. */
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


            /* После того как нашли нужное модальное окно, добавим классы
               подложке и окну чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); // end click

    }); // end foreach


    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready

document.getElementsByClassName('particle')[0].classList.add('-current-particle');

let firstSlide =  document.getElementsByClassName('mobile-background')[0];
let secondSlide =  document.getElementsByClassName('mobile-background')[1];
let thirdSlide =  document.getElementsByClassName('mobile-background')[2];
let fourthSlide =  document.getElementsByClassName('mobile-background')[3];
let fifthSlide =  document.getElementsByClassName('mobile-background')[4];
let sixthSlide =  document.getElementsByClassName('mobile-background')[5];
let seventhSlide =  document.getElementsByClassName('mobile-background')[6];

firstSlide.classList.add('-display-block');
let num = 0;
function next() {
    document.getElementsByClassName('particle')[num].classList.remove('-current-particle');
    num++;
    if (num>6) {
        num = 0;
    }
    switch (num) {
        case 0: seventhSlide.classList.remove('-display-block');
            firstSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 1: firstSlide.classList.remove('-display-block');
            secondSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 2: secondSlide.classList.remove('-display-block');
            thirdSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 3: thirdSlide.classList.remove('-display-block');
            fourthSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 4: fourthSlide.classList.remove('-display-block');
            fifthSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 5: fifthSlide.classList.remove('-display-block');
            sixthSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 6:sixthSlide.classList.remove('-display-block');
            seventhSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
    }
}
function prev() {
    document.getElementsByClassName('particle')[num].classList.remove('-current-particle');
    num--;
    if (num<0) {
        num = 6;
    }
    switch (num) {
        case 0: secondSlide.classList.remove('-display-block');
            firstSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 1: thirdSlide.classList.remove('-display-block');
            secondSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 2: fourthSlide.classList.remove('-display-block');
            thirdSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 3:fifthSlide.classList.remove('-display-block');
            fourthSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 4: sixthSlide.classList.remove('-display-block');
            fifthSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 5: seventhSlide.classList.remove('-display-block');
            sixthSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
        case 6: firstSlide.classList.remove('-display-block');
            seventhSlide.classList.add('-display-block');
            document.getElementsByClassName('particle')[num].classList.add('-current-particle');
            break;
    }
}
function particleClick() {
    document.getElementsByClassName('-display-block')[0].classList.remove('-display-block');
    document.getElementsByClassName('-current-particle')[0].classList.remove('-current-particle');
    slides[num].classList.add('-display-block');
    document.getElementsByClassName('particle')[num].classList.add('-current-particle');
}
let slides = [firstSlide, secondSlide, thirdSlide, fourthSlide, fifthSlide, sixthSlide, seventhSlide];
setInterval(next, 7000);
function empty() {
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-about')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ОПИСАНИЕ</p>';
    }
    if (document.documentElement.scrollTop < document.getElementsByClassName('section-about')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p></p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-industry')[0].offsetTop - 120) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ИНДУСТРИИ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-intagration')[0].offsetTop - 85) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ИНТЕГРАЦИЯ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-possibilities')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ВОЗМОЖНОСТИ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-portfolio')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ПОРТФОЛИО</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-contacts')[0].offsetTop - 110) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>КОНТАКТЫ</p>';
    }

}


