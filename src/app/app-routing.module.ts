import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from '../app/components/addPortafolio/images/images.component';
import { VideoComponent } from '../app/components/addPortafolio/video/video.component';
import { ProyectoComponent } from '../app/components/addPortafolio/proyecto/proyecto.component';
import { ArticuloComponent } from '../app/components/addPortafolio/articulo/articulo.component';

const routes: Routes = [
  {
    path: 'portafolio/videos',
    component: VideoComponent
  },
  {
    path: 'portafolio/imagenes',
    component: ImagesComponent
  },
  {
    path: 'portafolio/articulos',
    component: ArticuloComponent
  },
  {
    path: 'portafolio/proyectos',
    component: ProyectoComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
