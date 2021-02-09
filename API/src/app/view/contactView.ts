import Contact from '../model/contactModel';
import imageView from './imageView'

export default {
    Render(contact: Contact){
        return {
            firstName: contact.firstName,
            secondName: contact.secondName,
            ddd: contact.ddd, 
            number: contact.number,
            email: contact.email,
            adress: contact.adress,
            images: imageView.renderMany(contact.image)
        }   
    },

    renderMany(contact: Contact[]) {
        return contact.map(contact => this.Render(contact))
    }
}