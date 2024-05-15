import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { APIService } from './apiservice';
import { Perfil } from '../_models/perfil';

const baseUrl = `${environment.apiUrl}/perfis`;

@Injectable({ providedIn: 'root' })
export class PerfilService {
    constructor(private http: HttpClient) { }

    getAll() {        
        return this.http.get<Perfil[]>(baseUrl, { headers: APIService.getHeader() });
    }

    getById(id: string) {
        return this.http.get<Perfil>(`${baseUrl}/${id}`, { headers: APIService.getHeader() });
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