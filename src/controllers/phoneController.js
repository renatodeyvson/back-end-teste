const mongoose = require('mongoose');
const Phone = mongoose.model('Phone');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const phones = await Phone.paginate({}, { page, limit: 10 });

        return res.json(phones);
    },

    async find(req, res){
        const phones = await Phone.find(req.body);

        return res.json(phones);
    },

    async add(req, res){
        const phone = await Phone.create(req.body);

        return res.json(phone);
    },

    async upd(req, res){
        const phone = await Phone.findByIdAndUpdate(req.params.id, req.body);

        return res.json(phone);
    },

    async del(req, res){
        const phone = await Phone.findByIdAndRemove(req.params.id);

        return res.json(phone);
    }
}