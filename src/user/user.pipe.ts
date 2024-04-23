/*
 * @Author: SGuanyaa 1051158791@qq.com
 * @Date: 2024-04-22 17:26:56
 * @LastEditors: SGuanyaa 1051158791@qq.com
 * @LastEditTime: 2024-04-23 09:41:19
 * @FilePath: \my_nest\src\user\user.pipe.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class UserCreatePipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log('this is pipe value: ', value);
    console.log('this is pipe metadata: ', metadata);

    const { metatype } = metadata;

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    // 使用 plainToInstance 实例化 DTO
    const DTO = plainToInstance(metatype, value);
    console.log('this is pipe DTO: ', DTO);
    const errors = await validate(DTO);

    if (errors.length > 0) {
      // console.log(errors[0]);
      // console.log(errors[0].constraints);

      throw new BadRequestException(`${JSON.stringify(errors[0].constraints)}`);
    }

    return value;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
