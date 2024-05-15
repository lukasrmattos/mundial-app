import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '../_services';
import { Usuario } from '../_models';
import { Perfil } from '../_models/perfil';
import { PerfilService } from '../_services/perfil.service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users!: Usuario[];
    perfiis!: Perfil[];

    constructor(private userService: UserService, private perfilService: PerfilService) {}

    ngOnInit() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);

        this.perfilService.getAll()
            .pipe(first())
            .subscribe(perfiis => this.perfiis = perfiis);
    }

    deleteUser(id: number) {
        const user = this.users.find(x => x.id === id);
        if (!user) return;
        user.isDeleting = true;
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
}