/*
 * @Author: SGuanyaa 1051158791@qq.com
 * @Date: 2024-04-22 17:07:24
 * @LastEditors: SGuanyaa 1051158791@qq.com
 * @LastEditTime: 2024-04-23 09:48:42
 * @FilePath: \my_nest\src\user\dto\create-user.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IsInt, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsInt()
  age: number;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('CN', { message: '请输入有效的中国手机号码' })
  phone: string;
}
