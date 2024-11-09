window.onload = function () {
    const preguntaSi = document.getElementById('pregunta_si');
    const preguntaNo = document.getElementById('pregunta_no');
    const opciones = document.getElementById('opciones');
    const condiciones = document.getElementById('condiciones');
    const privacidad = document.getElementById('privacidad');
    const submitButton = document.getElementById('submit');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const description = document.getElementById('description');
    let submitting = false;

    // Habilita o deshabilita el combo de opciones según el primer check
    preguntaSi.addEventListener('change', function () {
        opciones.disabled = !preguntaSi.checked;
    });
    preguntaNo.addEventListener('change', function () {
        opciones.disabled = true;
    });

    // Activa o desactiva el botón de enviar según los dos checks
    function toggleSubmitButton() {
        submitButton.disabled = !(condiciones.checked && privacidad.checked);
    }
    condiciones.addEventListener('change', toggleSubmitButton);
    privacidad.addEventListener('change', toggleSubmitButton);

    // Validación del formulario al enviar
    document.getElementById('main_form').onsubmit = function (event) {
        event.preventDefault();

        // Verificación de doble submit
        if (submitting) return;
        submitting = true;

        // Validación de campos obligatorios
        if (!nameInput.value.trim() || !surnameInput.value.trim()) {
            alert('Por favor, rellena el nombre y apellidos.');
            submitting = false;
            return;
        }

        // Envío exitoso
        alert('Formulario enviado correctamente.');
        submitting = false;
    };
}
