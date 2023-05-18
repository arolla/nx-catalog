import {Injectable} from '@nestjs/common';
import {TodoDTO} from "../dto/todoDTO";
import {InjectRepository} from "@nestjs/typeorm";
import {Todo} from "../entity/todo.entity";
import {Repository} from "typeorm";

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
    ) {
    }

    todos = [{
        id: 1,
        title: 'todo app',
        description: 'test'
    }, {
        id: 1,
        title: 'todo app',
        description: 'test'
    }, {
        id: 2,
        title: 'todo app',
        description: 'test'
    }, {
        id: 3,
        title: 'todo app',
        description: 'test'
    }]

    findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    async findOneBy(id: number): Promise<Todo | null> {
        return await this.todoRepository.findOneBy({id});
    }

    async delete(id: number) {
        await this.todoRepository.delete(id);
        console.log('1')
    }

    async create(todo: TodoDTO) {
        await this.todoRepository.save(todo)
    }


}
