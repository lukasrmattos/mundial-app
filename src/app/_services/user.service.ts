import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Usuario } from '../_models';
import { APIService } from './apiservice';

const baseUrl = `${environment.apiUrl}/usuario`;

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    auth(email: string, senha: string) {
        const params = { Email: email, Senha: senha };
        return this.http.post(`${environment.apiUrl}/auth`, params);
    }
    
    getAll() {        
        return this.http.get<Usuario[]>(baseUrl, { headers: APIService.getHeader() });
    }

    getById(id: string) {
        return this.http.get<Usuario>(`${baseUrl}/${id}`, { headers: APIService.getHeader() });
    }

    create(params: any) {
        return this.http.post(baseUrl, params, { headers: APIService.getHeader() });
    }

    update(id: string, params: any) {
        return this.http.put(`${baseUrl}/${id}`, params, { headers: APIService.getHeader() });
    }

    delete(id: number) {
        return this.http.delete(`${baseUrl}/${id}`, { headers: APIService.getHeader() });
    }
}