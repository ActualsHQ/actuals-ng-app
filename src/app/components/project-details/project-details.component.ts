import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  summary: boolean = true;
  profile: boolean = false;
  metrics: boolean = false;
  news: boolean = false;
  updates: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  activate(val:string) {
    if(val == 'summary') {
      this.summary=true;
      this.profile=false, this.metrics=false, this.news=false, this.updates=false;
    }
    if(val == 'profile') {
      this.summary=false, this.metrics=false, this.news=false, this.updates=false;
      this.profile=true;
    }
    if(val == 'updates') {
      this.summary=false, this.metrics=false, this.news=false, this.profile=false;
      this.updates=true;
    }
    if(val == 'metrics') {
      this.summary=false, this.updates=false, this.news=false, this.profile=false;
      this.metrics=true;
    }
    if(val == 'news') {
      this.summary=false, this.updates=false, this.metrics=false, this.profile=false;
      this.news=true;
    }
  }

}
