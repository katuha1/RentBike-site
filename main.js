const loader = document.getElementById('loading-window');
const bike = document.getElementById('bike');
const SunSet = document.getElementById('CircleBG');
const menubar = document.getElementById('menu-icon');
const navmenu = document.getElementById('nav-menu-absolute');


function generateRandomCoordinates(latitude, longitude, radiusInMeters) {
    let radiusInDegrees = radiusInMeters / 111300;
    let randomLng = longitude + (Math.random() * 2 - 1) * radiusInDegrees / Math.cos(latitude * Math.PI / 180);
    let randomLat = latitude + (Math.random() * 2 - 1) * radiusInDegrees;
    return [randomLat, randomLng];
}
  
ymaps.ready(function() { 
    let lat = 59.220501;
    let lon = 39.891523;
    let numPoints = 10;
    let radiusInMeters = 200;

    let myMap = new ymaps.Map("YMapsID", {
        center: [lat, lon],
        zoom: 16,
    });
    for (let i = 0; i < numPoints; i++) {
        let myPlacemark = new ymaps.Placemark(generateRandomCoordinates(lat, lon, radiusInMeters), {
            content: 'Самокат',
            balloonContent: 'Зарядка 80%',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'images/marker.png',
            iconImageSize: [16, 41],
        });
        myMap.geoObjects.add(myPlacemark);
    }
});


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

menubar.addEventListener('click', function() {
    navmenu.classList.toggle('flex');
});