import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isDone: boolean = false;
  constructor(private sb: SupabaseService) { }

  ngOnInit(): void {
  }

  async saveEmail() {
      let email = (<HTMLInputElement>document.getElementById("email")).value;
      if(email!='') {
        await this.sb.saveSubscribeEmail(email);
        this.isDone = true;
        
        setTimeout(()=>{    
          (<HTMLInputElement>document.getElementById("email")).value = '';
          this.isDone = false;
      }, 2000);
      }
  }

}
