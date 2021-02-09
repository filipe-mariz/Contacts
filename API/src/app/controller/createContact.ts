import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Contact from '../model/contactModel';
import * as Yup from 'yup';

export default {

    async create(request: Request, response: Response) {

        const {
            firstName,
            secondName,
            ddd,
            number,
            email,
            adress
        } = request.body;

        const contactRepository = getRepository(Contact)
        const requestImages = request.files as Express.Multer.File[];
        const image = requestImages.map(image => {
            return { path: image.filename }
        });

        const data = {
            firstName,
            secondName,
            ddd,
            number,
            email,
            adress,
            image
        };
        
        const Schemma = Yup.object().shape({
            firstName: Yup.string().required(),
            secondName: Yup.string().required(),
            ddd: Yup.number().required(),
            number: Yup.string().required(),
            email: Yup.string().required(),
            adress: Yup.string().required(),
            image: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });

        await Schemma.validate(data, {
            abortEarly: false
        });

        const contact = contactRepository.create(data);
    
        await contactRepository.save(contact);
        response.status(201).json({ contact });
    }
};
