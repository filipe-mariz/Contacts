import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Contact from './contactModel';

@Entity('image')
export default class Image {
    @PrimaryGeneratedColumn('increment') id: number;
    @Column() path: string;

    @OneToOne(() => Contact, contact => contact.image)
    @JoinColumn({name: "contact_id"}) 
    contact: Contact;
}