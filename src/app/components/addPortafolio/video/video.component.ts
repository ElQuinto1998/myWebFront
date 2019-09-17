import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VideoServiceService } from '../../../services/video-service.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  data: any = [];

  constructor(private toastr: ToastrService, private service: VideoServiceService) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(){
    return this.service.getVideos().subscribe(data => {
      this.data = data;
    }, (error => {
      this.toastr.error("Hubo un problema, intente mas tarde");
    }));
  }


}
