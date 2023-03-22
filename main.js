const loader = document.getElementById('loading-window');
const bike = this.document.getElementById('bike');
const SunSet = this.document.getElementById('CircleBG');


function Run() {
    // Делаем загрузочный экран невидимым
    loader.classList.add('hide');

    // Добавляем анимацию байку
    bike.classList.add('active');

    // Убираем загрузочный экран
    loader.style.display = 'none';

    // Анимцаия солнца
    SunSet.classList.add('animate');
};

// Обработчик события, когда весь контент сайта загрузился
window.addEventListener('load', function() {
    setTimeout(Run, 500);
});