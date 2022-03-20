import { type } from 'os';
import {Column, Entity ,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User{

    @PrimaryGeneratedColumn({name:'id'})
    private id:number;

    @Column({name:'nom', length:'50'})
    private nom:string;
    
    @Column({name:'prenom', length:'50'})
    private prenom:string;

    @Column({name:'email', length:'50'})
    private email:string;

    
    getId() {
      return this.id
    }
    
    setId(val: number) {
      this.id = val
    }
    
    getNom() {
      return this.nom
    }
    
    setNom(val: string) {
      this.nom = val
    }
    
    getPrenom() {
      return this.prenom
    }
    
    setPrenom(val: string) {
      this.prenom = val
    }
    
    getEmail() {
      return this.email
    }
    
    setEmail(val: string) {
      this.email = val
    }
 
 
 
    
}