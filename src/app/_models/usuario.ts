import { Perfil } from './perfil';
import { Role } from './role';

export class Usuario {
    id!: number;
    idPerfil!: number;
    nome!: string;
    email!: string;
    senha!: string;
    criacao!: Date;

    isDeleting?: boolean;

    perfil!: Perfil;
}