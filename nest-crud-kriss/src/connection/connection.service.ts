import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserDTO } from '../dto/UserDTO';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/User.entity';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from '../dto/LoginDTO';

@Injectable()
export class ConnectionService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signup(user: UserDTO) {
    const userCreate = user;

    await this.userRepository
      .save(userCreate)
      .catch((reason) => console.log(reason));
  }

  async login(
    user: LoginDTO,
  ): Promise<{ id: number; email: string; prenom: string; nom: string }> {
    const { password, email } = user;
    const userFind = await this.userRepository.findOneBy({ email: email });
    if (!userFind) {
      throw new NotFoundException('User Not found');
    } else {
      if (userFind.password!==user.password) {
        throw new UnauthorizedException('illegal');
      } else {
        return {
          id: userFind.id,
          email: userFind.email,
          nom: userFind.nom,
          prenom: userFind.prenom,
        };
      }
    }
  }
}
