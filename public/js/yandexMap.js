ymaps.ready(() => {
  const myMap = new ymaps.Map('map', {
    center: [59.91795236804815, 30.304908500000003],
    zoom: 15,
    controls: ['routePanelControl'],
  });

  const control = myMap.controls.get('routePanelControl');
  const city = 'Санкт-Петербург';
  const routeFrom = 'Лиговский проспект 140';
  const routeTo = 'Невский проспект 20';

  control.routePanel.state.set({
    type: 'bicycle',
    fromEnabled: false,
    from: `${city}, ${routeFrom}`,
    toEnabled: false,
    to: `${city}, ${routeTo}`,
  });

  control.routePanel.options.set({
    types: {
      masstransit: false,
      pedestrian: false,
      bicycle: true,
    },
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
});
