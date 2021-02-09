import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Contact from '../model/contactModel';

export default {
    async update(request: Request, response: Response) {
        const contact = await getRepository(Contact).findOne(request.params.id);

        if(contact) {
            getRepository(Contact).merge(contact, request.body);
            const results = await getRepository(Contact).save(contact);
            return response.json(results);
        };

        return response.status(404).json({ err: "user not found" });
   
    }
};
