ymaps.ready(async () => {
  const maps = document.querySelectorAll('.ya-map');

  maps.forEach(async (mapElement) => {
    const from = await mapElement.getAttribute('data-from');
    const to = await mapElement.getAttribute('data-to');
    const city = await mapElement.getAttribute('data-city');

    console.log(from, to, city, '>>>>> Данные из БАЗЫ');
    const myMap = new ymaps.Map(mapElement, {
      center: [59.91795236804815, 30.304908500000003],
      zoom: 7,
      controls: ['routePanelControl'],
    });

    const control = myMap.controls.get('routePanelControl');

    control.routePanel.state.set({
      type: 'bicycle',
      fromEnabled: false,
      from: `${city}, ${from}`,
      toEnabled: false,
      to: `${city}, ${to}`,
    });

    control.routePanel.options.set({
      types: {
        masstransit: false,
        pedestrian: false,
        bicycle: false,
      },
    });

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
    myMap.behaviors.disable(['scrollZoom']);
  });
});
