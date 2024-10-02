document.addEventListener("turbo:load", () => {
    const deleteLinks = document.querySelectorAll('a[data-method="delete"]');
  
    deleteLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        console.log("Delete link clicked"); // Linha de depuração
        event.preventDefault();
        if (confirm(link.dataset.confirm)) {
          console.log("User confirmed deletion."); // Linha de depuração
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = link.href;
  
          const token = document.querySelector('meta[name="csrf-token"]').content;
          const csrfInput = document.createElement('input');
          csrfInput.type = 'hidden';
          csrfInput.name = 'authenticity_token';
          csrfInput.value = token;
  
          form.appendChild(csrfInput);
  
          const methodInput = document.createElement('input');
          methodInput.type = 'hidden';
          methodInput.name = '_method';
          methodInput.value = 'delete';
  
          form.appendChild(methodInput);
  
          document.body.appendChild(form);
          form.submit();
        } else {
          console.log("User canceled deletion."); // Linha de depuração
        }
      });
    });
  });
  