import { Controller,Get, Post , Body, Param, Delete, Render} from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService} from './users.service';
import { User } from './user.entity';
 

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Post()
    create(@Body() createUserDto:CreateUsersDto): Promise<User>{
        return this.userService.create(createUserDto);
    }

    @Get()
    @Render('users')
    async finsAll():Promise<object>{
       let r =  await this.userService.findAll();
       return {arr:r as User[]};
    }

    @Get(':id')
    getById(@Param('id') id:string): Promise<User>{
        return this.userService.findOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id:string):Promise<void>{
        return this.userService.remove(id);
    }
}
