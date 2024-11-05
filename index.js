const express = require("express"); // Importamos el paquete express
const app = express(); // Incializar servidor con express

// Logger
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public')); // Middleware para servir archivos estáticos de JS, styles, assets, ...

// -- CONFIGURACIÓN DE VISTAS - MOTOR DE PLANTILLAS
app.set('view engine', 'pug');
app.set('views', './views');

// // Rutas importadas / WEB
// const landingWebRoutes = require("./routes/landing.web.routes.js")

// // Rutas habilitadas / WEB (CON PUG)
// app.use('./', landingWebRoutes);

// -- PUG TEMPLATE /  // localhost:3000/home etc.
app.get('/home', function (req, res) {
    res.render('home', {
        name: '--> Nombre creado desde index.js <--',
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        name: '--> Nombre creado desde index.js <--',
    });
});

// localhost:3000/home
app.get('/location', function (req, res) {
    res.render('location', {
        name: '--> Nombre creado desde index.js <--',
    });
});

// localhost:3000/home
app.get('/mission', function (req, res) {
    res.render('mission', {
        name: '--> Nombre creado desde index.js <--',
    });
});

app.listen(3000, () => {
    console.log(`Example app listening on http://localhost:3000`);
});
