import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { ConnectionModule } from './connection/connection.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: "sqlite",
        database: "crud_nest",
        dropSchema: true,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        autoLoadEntities: true,
        synchronize: true,
        logging: false
      }
    ),
    TodosModule,
    ConnectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
