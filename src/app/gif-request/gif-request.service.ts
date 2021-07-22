import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GifRequestService {

  getTrendingGifs(){
    // return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=qPQoYO9XqME5sb96VZ3tAsWEjwEfJI5U&limit=12&rating=g`);
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=12`);

  }

  searchGifs(gifName: string){
    console.log(gifName)
    // return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=qPQoYO9XqME5sb96VZ3tAsWEjwEfJI5U&q=&limit=12&offset=0&rating=g&lang=en`);
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.apiKey}&limit=12&offset=0&rating=g&lang=en`);
  }

  constructor(private http: HttpClient) {

   }
}



// getGifs(): Observable<any> {
//   return this.http.get(
//     `https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=8`
//   );
// }
