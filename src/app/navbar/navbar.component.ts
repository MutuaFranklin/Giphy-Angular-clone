import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GifRequestService } from '../gif-request/gif-request.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private httpClient:HttpClient, private gifSearchRequest: GifRequestService) {


  }


  ngOnInit(): void {

  }



  // showSearchResults(searchKeyTerm: string){
  //   if (searchKeyTerm !== ''){
  //     this.gifSearchRequest.searchGifs(searchKeyTerm)
  //     .subscribe((response: any)=>{
  //       console.log('Search Date', response)
  //     })
  //   }
  // }
}
