/*
 * @Author: SGuanyaa 1051158791@qq.com
 * @Date: 2024-04-23 16:17:00
 * @LastEditors: SGuanyaa 1051158791@qq.com
 * @LastEditTime: 2024-04-23 16:21:25
 * @FilePath: \my_nest\src\common\exception.filter.ts
 * @Description: 异常过滤器
 */

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();

    response.status(status).json({
      data: exception.message,
      time: new Date().getTime(),
      success: false,
      path: request.url,
      status,
    });
  }
}
