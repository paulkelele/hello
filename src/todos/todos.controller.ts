import { Controller, Get } from '@nestjs/common';
import { Todos } from './todos.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService:TodosService){

    };

    @Get()
    private getTodos (){
        return this.todosService.findAll()
    }

}
