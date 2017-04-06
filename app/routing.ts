import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { EditPlatoComponent } from './backoffice/edit-plato/edit-plato.component';
import { EditCategoriaComponent } from './backoffice/edit-categoria/edit-categoria.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'info', component: InfoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'backoffice', component: BackofficeComponent },
    { path: 'edit-plato/:id', component: EditPlatoComponent },
    {  path: 'edit-categoria/:id', component: EditCategoriaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRouting {}