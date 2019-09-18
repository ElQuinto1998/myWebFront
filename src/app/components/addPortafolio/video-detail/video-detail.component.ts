import {Component, Input, OnInit} from '@angular/core';
import { VideoServiceService } from '../../../services/video-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {el} from "@angular/platform-browser/testing/src/browser_util";

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
  URL_API = 'http://localhost:3000';

  constructor(private toastr: ToastrService,
              private service: VideoServiceService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required]
    });

  }

  ngOnInit() {

    $('#post-commet').hide();


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

    console.log(this.checkoutForm);
    if(this.checkoutForm.valid){
      console.log("Comment: "+ JSON.stringify(comment));
      console.log("id_video: "+id_video);
      this.toastr.success("Has agregado un comentario");
      console.log("Es valido: "+this.checkoutForm.valid);
    }else {
      this.toastr.error("Todos los campos son requeridos", "Ops..", {timeOut: 3000});
      console.log("Es valido: "+this.checkoutForm.valid);
    }
  }

  like(){
    return this.service.likeVideo(this.data.video._id).subscribe(data => {
      // @ts-ignore
      $(".likes-count").text(data.likes);
    }, (error => {
      this.toastr.error("Hubo un problema, intente mas tarde");
    }));
  }

  showCommentFor(){

      let estado = $("#post-commet").is(':visible');
      if (!estado) {
        $('#post-commet').slideToggle();
        $("#btn-comment-form").attr("class", "btn btn-danger mb-3");
      }else {
        $("#btn-comment-form").attr("class", "btn btn-success mb-3");
        $('#post-commet').hide("slow");
      }
  }

}
