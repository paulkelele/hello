import { Injectable } from '@nestjs/common';
import { Todos } from './todos.interface';
 
@Injectable()
export class TodosService {
    private todos :Todos[]=[
        {id:0,prenom:'Jean',nom:'Dupond'},
        {id:1,prenom:'Marc',nom:'Martin'},
        {id:2,prenom:'François',nom:'Dubois'},
        {id:3,prenom:'Sophie',nom:'Adernter'},
    ];

    public findAll (): Todos[]{
        return this.todos;
    }
}
