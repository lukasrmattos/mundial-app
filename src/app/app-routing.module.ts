import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PerfisModule } from './perfis/perfis.module';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const perfisModule = () => import('./perfis/perfis.module').then(x => x.PerfisModule);

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'users', loadChildren: usersModule },
    { path: 'perfis', loadChildren: perfisModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }