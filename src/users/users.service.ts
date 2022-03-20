import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUsersDto } from './dto/create-users.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,) {

    }

    async create(createUsersDto: CreateUsersDto): Promise<User> {
        const user = new User();
        user.setNom(createUsersDto.nom) ;
        user.setPrenom(createUsersDto.prenom);
        user.setEmail(createUsersDto.email);
        const saltOrRounds = 10;
        const password = createUsersDto.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        user.setPassword(hash);
        return this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id:string):Promise<User>{
        return this.userRepository.findOneOrFail(id);
    }

    async remove(id:string): Promise<void>{
        await this.userRepository.delete(id);
    }
}
