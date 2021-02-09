import { Router } from 'express';
import createContact from './app/controller/createContact';
import viewContact from './app/controller/viewContact';
import alterContacts from './app/controller/alterContact';
import deleteContacts from './app/controller/deleteContact';
import multer from 'multer';
import uploadConfig from './config/uploads';

const routes = Router();
const upload = multer(uploadConfig)

routes.post('/createcontact', upload.array('images'),  createContact.create);
routes.get('/viewcontact', viewContact.index);
routes.get('/viewcontact/:id', viewContact.show);
routes.put('update/:id', alterContacts.update);
routes.delete('/delete/:id', deleteContacts.delete);

export default routes;
