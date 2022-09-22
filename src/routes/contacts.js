const { Router } = require('express');
const router = Router();

const contacts = require('../fakedatabase');


function validator(id) {
    const found = list.find(element => element.id == id);
    if (found == null) {
        return false;
    }else{
        return true;
    }
}

function listed() {
    const listed =[];
    Object.keys(contacts).forEach(key => {
        const work = contacts[key];
        listed.push(work);
    })

    return listed;
}

let list = listed();

router.get('/', (req, res) => {

    let resp =  req.query.phrase;
    let listzA;

    if((typeof resp === 'undefined')){
        listzA = list.sort((a,b)=>a.name.localeCompare(b.name));
        res.json(listzA);
    }else if (resp != '') {
        listzA = list.filter((e) => e.name.toLowerCase().includes(resp.toLowerCase()));
        res.json(listzA);
    }else{
        res.status(404).send('Bad Request');
    }


});


router.get('/:id', (req, res) => {

    const id = req.params.id;

    if (validator(id)){
        const user = list.filter((e) => e.id == id);
        res.status(200).json(user);
    }else{
        res.status(404).send('Not Found');
    }


});

router.delete('/:id', (req, res) => {

    const id = req.params.id;

    if (validator(id)) {
        list = list.filter((e) => e.id != id);
        res.status(204).send('No Content');
    }else{
        res.status(404).send('Not Found');
    }


});

module.exports = router;