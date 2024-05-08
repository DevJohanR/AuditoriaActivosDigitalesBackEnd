const { loginUser } = require('../controllers/authenticationController');

const authHandler = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await loginUser(username, password);
        res.status(200).json({ message: 'Login exitoso', user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = {
    authHandler
};
