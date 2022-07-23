import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isHomeActive : boolean = false;
  isTrackerActive : boolean = false;
  isFeedsActive : boolean = false;
  isProjectsActive : boolean = false;
  isReportsActive : boolean = false;
  isAboutActive : boolean = false; 
 showToggle :boolean = false; 
  constructor(private router:Router) { 
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => { 
      if(this.router.url.includes('home')) {
        this.isHomeActive = true;
      }
      if(this.router.url.includes('tracker')) {
        this.isTrackerActive = true;
      }
      if(this.router.url.includes('feeds')) {
        this.isFeedsActive = true;
      }
      if(this.router.url.includes('projects')) {
        this.isProjectsActive = true;
      }
      if(this.router.url.includes('reports')) {
        this.isReportsActive = true;
      }
      if(this.router.url.includes('about')) {
        this.isAboutActive = true;
      }
    });
}

mobMenuClick(){
  this.showToggle = !this.showToggle; 
}

}
