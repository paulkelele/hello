import { type } from 'os';
import {Column, Entity ,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User{

    @PrimaryGeneratedColumn({name:'id'})
    private _id:number;

    @Column({name:'nom', length:'50'})
    private _nom:string;
    
    @Column({name:'prenom', length:'50'})
    private _prenom:string;

    @Column({name:'email', length:'50'})
    private _email:string;

    
    get id() {
      return this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get nom() {
      return this._nom
    }
    
    set nom(val: string) {
      this._nom = val
    }
    
    get prenom() {
      return this._prenom
    }
    
    set prenom(val: string) {
      this._prenom = val
    }
    
    get email() {
      return this._email
    }
    
    set email(val: string) {
      this._email = val
    }
 
 
 
    
}