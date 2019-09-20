import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../shared/models/video';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MultimediaServiceService {

  URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getVideos(type_media: string): Observable<Video> {
    return this.http.get<Video>(this.URL_API + '/multimedia/' + type_media, this.httpOptions);
  }

  getVideoById(type_media: string, id_media: string): Observable<Video> {
    return this.http.get<Video>(this.URL_API + '/multimedia/' + type_media + '/' + id_media);
  }

  likeVideo(id_media: string): Observable<String> {
    // @ts-ignore
    return this.http.post<String>(this.URL_API+ '/multimedia/' + id_media +'/like');
  }

  comment(id_media: string, comment: any){
    console.log("Comentario: "+comment);
    return this.http.post<String>(this.URL_API+ '/multimedia/' + id_media +'/comment', comment);
  }

}
