/*
 * @Author: SGuanyaa 1051158791@qq.com
 * @Date: 2024-04-22 13:49:50
 * @LastEditors: SGuanyaa 1051158791@qq.com
 * @LastEditTime: 2024-04-22 14:14:43
 * @FilePath: \my_nest\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.development' }); // 加载开发环境 env 文件
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' }); // 加载生产环境 env 文件
} else {
  dotenv.config(); // 加载默认的.env文件
}

console.log(`ENV: ${process.env.NODE_ENV}`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
