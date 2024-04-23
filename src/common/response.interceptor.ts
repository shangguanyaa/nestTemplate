/*
 * @Author: SGuanyaa 1051158791@qq.com
 * @Date: 2024-04-23 15:52:20
 * @LastEditors: SGuanyaa 1051158791@qq.com
 * @LastEditTime: 2024-04-23 16:06:34
 * @FilePath: \my_nest\src\common\response.interceptor.ts
 * @Description: 响应拦截器
 */

import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface data<T> {
  data: T;
  status: number;
  message: string;
}

@Injectable()
export class Response<T = any> implements NestInterceptor {
  intercept(context: any, next: CallHandler): Observable<data<T>> {
    return next.handle().pipe(
      map(({ data, status = 200, message = '请求成功' }) => {
        return {
          data,
          status,
          success: true,
          message,
        };
      }),
    );
  }
}
