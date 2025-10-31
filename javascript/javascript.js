
// FUNCION: Inicializar carrusel si existe
document.addEventListener("DOMContentLoaded", function () {
  const logoCarousel = document.querySelector('#carouselLogos');
  if (logoCarousel) {
    new bootstrap.Carousel(logoCarousel, {
      interval: 3000, // 10ms está bien, 0.01 no es válido
      ride: 'carousel'
    });
  }


  // Mostrar/ocultar botón scroll-to-top
  const scrollBtn = document.querySelector(".scroll-to-top");
  if (scrollBtn) {
    window.addEventListener("scroll", function () {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    // Scroll suave al hacer clic
    scrollBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

//POP UP DESCUENTO

const mostrarPopup = false;

document.addEventListener('DOMContentLoaded', function () {
  if (mostrarPopup) {
    setTimeout(function () {
      var popup = new bootstrap.Modal(document.getElementById('popupInicio'));
      popup.show();
    }, 3000);
  }
});




document.getElementById("formTelefono").addEventListener("submit", function (e) {
  e.preventDefault();

  const telefono = document.getElementById("telefonoInput").value.trim();
  if (!telefono) {
    alert("Por favor, introduce tu número de teléfono.");
    return;
  }

  const formData = new FormData(this);

  fetch("https://formsubmit.co/ajax/marketing@biofy.es", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert("✅ ¡Gracias! Te contactaremos pronto.");
      const modalElement = document.getElementById('popupInicio');
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
      this.reset();
    } else {
      alert("❌ Hubo un problema al enviar el formulario.");
    }
  })
  .catch(() => {
    alert("❌ Error de red. Intenta más tarde.");
  });
});




//FORMULARIO

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/marketing@biofy.es", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success === "true") {
        form.reset();

        // Mostrar el modal
        const modal = new bootstrap.Modal(document.getElementById('modalEnviado'));
        modal.show();
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Hubo un problema al enviar el formulario.");
    });
});

//FORMULARIO
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita redirección

  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.reset(); // Limpia formulario

      // Muestra el modal
      const modal = new bootstrap.Modal(document.getElementById('modalEnviado'));
      modal.show();
    } else {
      alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
    }
  }).catch(error => {
    alert("Error de red. Intenta más tarde.");
  });
});







