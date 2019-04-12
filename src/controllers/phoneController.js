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
        const { model,
          price,
          brand,
          PushSubscriptionOptions,
          startDate,
          endDate,
          color,
          code
        } = req.body;

        const noSpaceModel = model.replace(/ /g, '');
        if(noSpaceModel.length < 2 || noSpaceModel.length > 255){
            return res.status(400).json({
                message: 'Modelo inválido.',
                description: 'O modelo deve ter no mínimo 2 e no máximo 255 caracteres, desprezando espaço em branco.'
            });
        }
        if(price < 0){
            return res.status(400).json({
                message: 'Preço inválido.',
                description: 'O preço deve ser um número positivo.'
            });
        }
        else{
            const phone = await Phone.create(req.body);

            return res.json(phone);
        }
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