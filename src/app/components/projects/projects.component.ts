import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects, SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnChanges {

  loading = false;
  projects: Projects | any;
  @Input() viewAllButton : boolean = false;
  @Input() showAllprojects : boolean = false;
  @Input() applyFilter: string = '';
  @Input() filterList: string[] = [];
  @Input() numberOfRecords : number = 5;
  @Input() searchKey: string = '';

  constructor(private supabase: SupabaseService, private router: Router){

  }

  ngOnInit(): void {
    this.getProjects();
  }

  ngOnChanges(): void {
    this.getProjects();
    this.searchByTitle();
  }

  async searchByTitle() {
    var { data: projects, error, status } = await this.supabase.searchProjectsByTitle(this.searchKey);

    if (error && status !== 406) {
      throw error;
    }

    if (projects) {
     this.projects = projects;
    }
  }

  async getProjects() {
    try {
      this.loading = true;
      if(this.filterList.length == 0) 
        var { data: projects, error, status } = await this.supabase.allProjects;
      else
        var { data: projects, error, status } = await this.supabase.filterProjects(this.filterList);

      if (error && status !== 406) {
        throw error;
      }

      if (projects) {
       this.projects = projects;
       if(!this.showAllprojects) {
        this.projects = this.projects.slice(0, this.numberOfRecords);
       }
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  navTo(path:string) {
    this.router.navigateByUrl(path);
  }

}
