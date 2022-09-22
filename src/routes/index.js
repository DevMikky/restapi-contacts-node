const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "name" : "Miguel David Palma Lara",
        "linkedin" : "https://www.linkedin.com/in/devmikky/"
    };
    res.json(data);
});

module.exports = router;