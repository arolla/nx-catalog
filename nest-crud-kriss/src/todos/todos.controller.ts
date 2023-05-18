import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TodosService} from "./todos.service";
import {TodosInterface} from "../interface/Todos.interface";
import {TodoDTO} from "../dto/todoDTO";

@Controller('todos')
export class TodosController {
    constructor(private readonly todos: TodosService) {
    }

    @Get()
    async findAll(): Promise<TodosInterface[] | string> {
        return await this.todos.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<{ description: string; id: number; message: string; title: string } | string> {
        return await this.todos.findOneBy(id).then(value => value.id === 5 ?
            {
                message: '5 c\'est bien',
                id: value.id,
                description: value.description,
                title: value.title
            }
            : {
                message: 'pas 5 c\'est pas bien',
                id: value.id,
                description: value.description,
                title: value.title
            }).catch(() =>{ return 'desole pas bien'});
    }

    @Delete(':id')
    async remove(@Param('id') id): Promise<string> {
        await this.todos.delete(id);
        return 'ok'
    }

    @Post()
    async create(@Body() todo: TodoDTO) {
        await this.todos.create(todo)
    }
}
