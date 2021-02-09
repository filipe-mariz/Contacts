import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Image from './imageModel';
@Entity('contact') 
export default class Contact  {
    @PrimaryGeneratedColumn('increment') id: number;
    @Column() firstName: string;
    @Column() secondName: string;
    @Column() ddd: number;
    @Column() number: string;
    @Column() email: string;
    @Column() adress: string;

    @OneToOne(() => Image, image => image.contact, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: "contact_id"})
    image: Image[]
}
