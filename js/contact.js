window.addEventListener('DOMContentLoaded', () => {

      // FORMS

      const forms = document.querySelector('form'),
            contButton = document.querySelector('.contact__btn');

      const message = {
        loading: 'LOADING...',
        success: 'DONE',
        failure: 'ERROR'
      };



    
      function postData(form) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            contButton.textContent = message.loading;

            const req = new XMLHttpRequest();
            req.open('POST', 'js/server.php');

            // req.setRequestHeader('Conrent-type', 'multipart/form-data');
            const formData = new FormData(form);

            req.send(formData);

            req.addEventListener('load', () => {
                if(req.status == 200){
                    console.log(req.response);
                    contButton.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                      contButton.textContent = 'SEND';
                    }, 2000);
                } else {
                    contButton.textContent = message.failure;
                    form.reset();
                    setTimeout(() => {
                      contButton.textContent = 'SEND';
                    }, 2000);
                }
            })
          });
      }

      postData(forms);


});