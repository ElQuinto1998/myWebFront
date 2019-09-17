import {Component, Input, OnInit} from '@angular/core';
import { VideoServiceService } from '../../../services/video-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  data: any = {};
  comts: any = false;
  private sub: any;

  constructor(private toastr: ToastrService, private service: VideoServiceService,  private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.getVideoById(params['id']);
    });

  }

  getVideoById(id: string){
    this.service.getVideoById(id).subscribe(data => {
      this.data = data;
      if(this.data.comments.length > 0){
        this.comts = true;
      }
    }, (error => {
      this.toastr.error("Hubo un problema, intente mas tarde");
    }));
  }

}
