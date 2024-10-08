import {Injectable, NestInterceptor, ExecutionContext, CallHandler} from '@nestjs/common';
import {map, Observable} from 'rxjs';

@Injectable()
export class TimingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();
        return next
            .handle()
            .pipe(map(() => {
                    return {
                        responseTime: Date.now() - now
                    }
                })
            );
    }
}