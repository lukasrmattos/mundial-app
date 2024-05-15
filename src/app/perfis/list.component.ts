import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '../_services';
import { Usuario } from '../_models';
import { Perfil } from '../_models/perfil';
import { PerfilService } from '../_services/perfil.service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    perfis!: Perfil[];

    constructor(private perfilService: PerfilService) {}

    ngOnInit() {
        this.perfilService.getAll()
            .pipe(first())
            .subscribe(perfiis => this.perfis = perfiis);
    }

    deletePerfil(id: number) {
        const perfil = this.perfis.find(x => x.idPerfil === id);
        if (!perfil) return;
        perfil.isDeleting = true;
        this.perfilService.delete(id)
            .pipe(first())
            .subscribe(() => this.perfis = this.perfis.filter(x => x.idPerfil !== id));
    }
}