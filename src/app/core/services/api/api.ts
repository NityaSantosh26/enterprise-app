import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  readonly baseUrl = '';
  private readonly httpClient = inject(HttpClient);

  public get<TResponse>(url: string) {
    return this.httpClient.get<TResponse>(this.baseUrl + '/' + url);
  }

  post<TRequest, TResponse>(url: string, data: TRequest) {
    return this.httpClient.post<TResponse>(this.baseUrl + '/' + url, data);
  }
}
