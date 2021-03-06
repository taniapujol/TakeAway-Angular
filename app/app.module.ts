import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './routing';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FiltroPipe } from './pipe/filtro.pipe';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { EditPlatoComponent } from './backoffice/edit-plato/edit-plato.component';
import { EditCategoriaComponent } from './backoffice/edit-categoria/edit-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InfoComponent,
    ContactoComponent,
    FiltroPipe,
    BackofficeComponent,
    EditPlatoComponent,
    EditCategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
