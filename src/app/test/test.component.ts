import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any;
  
  constructor(private http: HttpClient) {
    
  }
  
  ngOnInit() {
  }
  
  GetData(){
    this.http.get('api/Values/getCompression')
    .subscribe(result=>{
      this.data=result
    });
  }
  
}
