const form = document.querySelector('#register-form');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, name, password } = event.target;
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          email: email.value,
          name: name.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      if (data.success) {
        window.location.assign('/auth/login');
      } else {
        const error = document.querySelector('.js-error');
        if (error) {
          error.remove();
        }
        form.insertAdjacentHTML('afterbegin', data.errorHtml);
      }
    } catch (error) {
      console.log(error);
    }
  });
}
