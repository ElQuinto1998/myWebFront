import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './components/addPortafolio/images/images.component';
import { VideoComponent } from './components/addPortafolio/video/video.component';
import { ProyectoComponent } from './components/addPortafolio/proyecto/proyecto.component';
import { ArticuloComponent } from './components/addPortafolio/articulo/articulo.component';
import { VideoDetailComponent } from './components/addPortafolio/video-detail/video-detail.component';

const routes: Routes = [
  {
    path: 'portafolio/videos',
    component: VideoComponent
  },
  {
    path: 'portafolio/videos/detail/:id',
    component: VideoDetailComponent
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
