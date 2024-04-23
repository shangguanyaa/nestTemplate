/*
 * @Author: SGuanyaa 1051158791@qq.com
 * @Date: 2024-04-22 17:07:24
 * @LastEditors: SGuanyaa 1051158791@qq.com
 * @LastEditTime: 2024-04-22 17:11:06
 * @FilePath: \my_nest\src\user\user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return { updateUserDto, id };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
