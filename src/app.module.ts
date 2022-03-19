import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';

@Module({
  imports: [TodosModule,TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'cerise',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
