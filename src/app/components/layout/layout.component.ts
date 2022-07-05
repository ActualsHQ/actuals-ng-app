import { Component, OnInit, Output } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  typesList : string[] = [];
  tagsList : string[] = [];
  filterList : string[] = [];
  constructor(private supabase: SupabaseService) { }

  ngOnInit(): void {

    this.typesList = ['Non Fungible Token (NFT)', 'Service Provider', 'Collectors', 'Grants', 'Impact', 'Investment', 'Media', 'Product', 'Protocol', 'Service', 'Social/Community'];
    this.tagsList = ['Analytics', 'Art', 'City', 'Culture', 'DAO Tool', 'DeFi', 'Developers', 'Education', 'Events/Experiences','Future of Work'];
    //this.getFilterOptions();
  }

  async getFilterOptions() {
    try {
      var { data: category, error, status } = await this.supabase.filterOptions;
      if (error && status !== 406) {
        throw error;
      }

      if (category) {

        /* this.typesList = category
                 .map(item => item.Category)
                 .filter((value, index, self) => self.indexOf(value) === index)



       category.forEach((value)=>{
          this.typesList.push(value.Category);
      });*/
      }

    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  applyFiler(i: any, e:any) {
    if(e.target.checked) {
      this.filterList.push(i);
      this.filterList = this.filterList.slice();
    }
    if(!e.target.checked) {   
      this.filterList.forEach((value,index)=>{
        if(value==i)
          this.filterList.splice(index,1);
          this.filterList = this.filterList.slice();
    });
    }
 }

}
