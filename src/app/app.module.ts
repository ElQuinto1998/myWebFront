import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { VideoComponent } from './components/addPortafolio/video/video.component';
import { ImagesComponent } from './components/addPortafolio/images/images.component';
import { ArticuloComponent } from './components/addPortafolio/articulo/articulo.component';
import { ProyectoComponent } from './components/addPortafolio/proyecto/proyecto.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortafolioComponent,
    VideoComponent,
    ImagesComponent,
    ArticuloComponent,
    ProyectoComponent,
    ContactoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
