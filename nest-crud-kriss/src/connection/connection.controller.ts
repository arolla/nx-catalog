import { Body, Controller, Post } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { UserDTO } from '../dto/UserDTO';
import { LoginDTO } from '../dto/LoginDTO';

@Controller('connection')
export class ConnectionController {
  constructor(private readonly connectionService: ConnectionService) {}

  @Post('signup')
  async signup(@Body() user: UserDTO) {
    await this.connectionService
      .signup(user)
      .catch((reason) => console.log(reason));
    return 'ok';
  }
  @Post('/login')
  async login(@Body() user: UserDTO): Promise<UserDTO> {
    return await this.connectionService.login(user).catch((reason) => reason);
  }
}
