
const firebaseConfig = {
    apiKey: "AIzaSyDMrQaP0QBF4F7HgbYP7AycAdAVu11-M94",
    authDomain: "datos-de-formulario-46a44.firebaseapp.com",
    projectId: "datos-de-formulario-46a44",
    storageBucket: "datos-de-formulario-46a44.appspot.com",
    messagingSenderId: "619982182792",
    appId: "1:619982182792:web:1f95804df843a2357f823d",
    measurementId: "G-R4GF7Q06LD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')
    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor ingresa tu nombre';
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message')
    }


    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailEntrada.value.trim() === '') {
        emailError.textContent = 'Por favor ingresa tu correo electrónico';
        emailError.classList.add('error-message')
    } else if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor ingresa un correo electrónico válido';
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = '';
        emailError.classList.remove('error-message')
    }

    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')


    if (contrasenaEntrada.value.trim() === '') {
        contrasenaError.textContent = 'Por favor ingresa tu contraseña';
        contrasenaError.classList.add('error-message')
    } else if (contrasenaEntrada.value.length < 8) {
        contrasenaError.textContent = 'Por favor ingresa una contraseña de al menos 8 caracteres'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message')
    }

    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                alert(error);
            });
        alert('Formulario enviado con éxito')
        document.getElementById('formulario').reset()
    }
})