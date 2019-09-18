import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../shared/models/video';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getVideos(): Observable<Video> {
    return this.http.get<Video>(this.URL_API + '/videos', this.httpOptions);
  }

  getVideoById(id: string): Observable<Video> {
    return this.http.get<Video>(this.URL_API + '/videos/' + id);
  }

  likeVideo(id: string): Observable<String> {
    // @ts-ignore
    return this.http.post<String>(this.URL_API+ '/videos/'+ id +'/like');
  }

}
