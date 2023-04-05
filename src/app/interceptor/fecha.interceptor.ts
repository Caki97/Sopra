import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { producto } from '../interfaces/producto.interface';

@Injectable()
export class FechaInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newreq = request.clone({
      body: this.convertdate(request.body),
    });
    return next.handle(newreq);
  }

  convertdate(request: producto[]): producto[] | undefined{
    if(!request) return;
    request.forEach((x) =>
      x.reviews?.forEach((x) => {
        x.date = new Date(x.date);
      })
    );
    return request;
  }
}
