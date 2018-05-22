import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any;
  
  constructor(private http: Http) {
    
  }
  
  ngOnInit() {
  }
  
  GetData(){
    this.http.get('api/Values/get')
    .subscribe(result=>{
      this.data=result
    });
  }
  
}
