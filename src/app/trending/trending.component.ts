import { Component, OnInit } from '@angular/core';
import { GifRequestService } from '../gif-request/gif-request.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trending:any[] = []

  showSearchResults(searchKeyTerm: string){
    if (searchKeyTerm !== ''){
      console.log(searchKeyTerm)
      this.gifRequest.searchGifs(searchKeyTerm)
      .subscribe((response: any)=>{
        this.trending = response.data
      })
    }
  }

  constructor(private http:HttpClient, private gifRequest: GifRequestService) {}

  ngOnInit(){
    // this.gifRequest.getTrendingGifs().subscribe((feedback:any)=>{
    //   this.trending = feedback.data
    // })
    let promise = new Promise <void> ((resolve,reject)=>{
      this.gifRequest.getTrendingGifs().toPromise().then(
        (response:any) => {
        this.trending = response.data;
        resolve()
      },
      (error:string) => {

      })
    })
  return promise
  }

}
