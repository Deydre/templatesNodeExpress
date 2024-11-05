// READ con GET
const getHome = (req, res) => {
        try {
            res.status(200).render('home.pug', {
                name: '--> Nombre creado desde controllers <--',
            });
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

const getContact = (req, res) => {
    try {
        res.status(200).render('contact.pug', {
            name: '--> Nombre creado desde controllers <--',
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const getLocation = (req, res) => {
    try {
        res.status(200).render('location.pug', {
            name: '--> Nombre creado desde controllers <--',
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const getMission = (req, res) => {
    try {
        res.status(200).render('mission.pug', {
            name: '--> Nombre creado desde controllers <--',
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}


module.exports = {
    getHome,
    getContact,
    getLocation,
    getMission
}