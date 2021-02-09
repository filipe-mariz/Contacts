import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Contact from '../model/contactModel';
import contactView from '../view/contactView';

export default {
    async show(request: Request, response: Response) {
        const { id } = request.params
        
        const contactRepository = getRepository(Contact);

        const contact = await contactRepository.findOneOrFail(id, {
            relations: ['image']
        });

        return response.json(contactView.Render(contact));
    },

    async index(response: Response) {
        const contactRepository = getRepository(Contact);

        const contact = await contactRepository.find({
            relations: ['image']
        });

        return response.json(contactView.renderMany(contact));
    }
}

