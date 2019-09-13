import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  mensaje = 'Video para aumentar like';
  likes: any = 0;

  constructor() { }

  ngOnInit() {
  }

  sumarLike(video): void {
    document.getElementById('like').style.color = '#ff0000';
    this.likes += 1;
  }

  comentar(): void {

    // tslint:disable-next-line:prefer-const
    let comentario = document.getElementById('txtComent') as HTMLInputElement;

    if (comentario.value === '') {
      alert('Debes escribir un comentario');
    } else {
      alert('Comentario guardado');
    }
  }

}
