import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feeds, SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  loading = false;
  feeds: Feeds | any;
  booleanValue: any = false;
  @Input() showAllButton : boolean = false;

  constructor(private supabase: SupabaseService, private router: Router) { }

  ngOnInit(): void {
    this.getFeeds();
  }

  async getFeeds() {
    try {
      this.loading = true;
      let { data: feeds, error, status } = await this.supabase.allFeeds;

      if (error && status !== 406) {
        throw error;
      }

      if (feeds) {
       this.feeds = feeds;

       this.feeds.sort((a: any, b: any) => {
        return <any>new Date(b.created_at) - <any>new Date(a.created_at);
      });

       if(this.showAllButton) {
        this.feeds = this.feeds.slice(0, 10);
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
        this.feeds.sort((a:any, b:any) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
    else {
        this.feeds.sort((a:any, b:any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
}

navTo(path:string) {
  this.router.navigateByUrl(path);
}
}
