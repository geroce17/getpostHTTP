import { Injectable } from '@angular/core';
import { HttpEvent,HttpHandler,HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
    intercept (req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'token 1c5fc36bd001eeaef9fc1fae6ae23f5e5de76f33')
        });
        return next.handle(authReq);
    }
}