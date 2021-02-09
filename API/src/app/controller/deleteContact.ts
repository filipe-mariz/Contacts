import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Contact from '../model/contactModel';

export default {
    async delete(request: Request, response: Response) {
        const results = await getRepository(Contact).delete(request.params.id);
    }
};
