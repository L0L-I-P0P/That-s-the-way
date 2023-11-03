const updateForm = document.querySelector('.js-update-form');

if (updateForm) {
  updateForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // 1 шаг забрать данные из инпутов
    const { title, description, route_from, route_to, place } = event.target;
    // event.target = то, что вызвало событие - то есть наша форма

    const { id } = updateForm.dataset;

    // 2 шаг отправить запрос на сервер
    const response = await fetch(`/api/routes/${id}`, {
      method: 'PUT',
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
    if (response.ok) {
      window.location.assign('/');
    } else {
      // если плохой статус, тогда парсим сообщение от сервера
      const data = await response.json();
      // и выводим ошибку
      alert(data.error);
    }
  });
}
