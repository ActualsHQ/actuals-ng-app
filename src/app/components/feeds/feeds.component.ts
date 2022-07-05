import { Component, Input, OnInit } from '@angular/core';
import { Projects, SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  loading = false;
  projects: Projects | any;
  booleanValue: any = false;
  @Input() showAllButton : boolean = false;

  constructor(private supabase: SupabaseService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  async getProjects() {
    try {
      this.loading = true;
      let { data: projects, error, status } = await this.supabase.allProjects;

      if (error && status !== 406) {
        throw error;
      }

      if (projects) {
       this.projects = projects;
       if(this.showAllButton) {
        this.projects = this.projects.slice(0, 10);
       }
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  sort(colName: string, boolean: boolean) {
    if (boolean == true){
        this.projects.sort((a:any, b:any) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
    else {
        this.projects.sort((a:any, b:any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
}
}
