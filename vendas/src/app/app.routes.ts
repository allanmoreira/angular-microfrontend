import { Routes } from '@angular/router';
import {Home} from "./home/home";
import {loadRemoteModule} from "@angular-architects/module-federation";

export const routes: Routes = [
    {
        path: 'produtos',
        loadComponent: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './Component'
        }).then(mod => mod.App).catch(err => {
            console.error('Erro ao carregar módulo remoto produtos:', err);
            throw err;
        }),
    },
    {
        path: 'grafico',
        loadComponent: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './Component'
        }).then(mod => mod.App).catch(err => {
            console.error('Erro ao carregar módulo remoto grafico:', err);
            throw err;
        }),
    },
    { path: 'home', component: Home },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];
