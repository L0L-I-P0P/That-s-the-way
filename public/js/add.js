const form = document.querySelector('.js-add-form');

if (form) {
  form.addEventListener('submit', async (event) => {
    // предотвращаю дефолтное поведение
    event.preventDefault();

    // 1 шаг забрать данные из инпутов
    const { title, description, route_from, route_to, place } = event.target;
    // event.target = то, что вызвало событие - то есть наша форма

    try {
      // 2 шаг отправить запрос на сервер
      const response = await fetch('/api/routes/', {
        method: 'POST',
        body: JSON.stringify({
          title: title.value,
          description: description.value,
          route_from: route_from.value,
          route_to: route_to.value,
          place: place.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // fetch оптравляет большой объект по типу response

      // парсим этот  объект в формате json, чтобы забрать тело ответа сервера
      const data = await response.json();

      // если успешный статус - 200-299
      if (response.ok) {
        // понять, куда вставлять карточку
        const container = document.querySelector('.js-routes-container');
        // что вставлять
        container.insertAdjacentHTML('afterbegin', data.cardHtml);
        // обнулить инпуты в форме
        form.reset();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  });
}
