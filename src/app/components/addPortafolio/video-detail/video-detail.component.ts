import {Component, Input, OnInit} from '@angular/core';
import { VideoServiceService } from '../../../services/video-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  data: any = {};
  comts: any = false;
  video_id: any = "gty";
  private sub: any;
  checkoutForm: any;

  constructor(private toastr: ToastrService,
              private service: VideoServiceService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });

  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.getVideoById(params['id']);
    });


  }

  getVideoById(id: string){
    this.service.getVideoById(id).subscribe(data => {
      this.data = data;
      this.video_id = this.data.video._id;
      if(this.data.comments.length > 0){
        this.comts = true;
      }
    }, (error => {
      this.toastr.error("Hubo un problema, intente mas tarde");
    }));
  }

  comentar(comment: any, id_video) {
    console.log("Comment: "+ JSON.stringify(comment));
    console.log("id_video: "+id_video);
  }
}
