import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  sideMenuObj : any;

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: "column",
        data: [1, 2, 13, 22, 11,21, 22, 23, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1]
      },
      {
        type: "spline",
        data: [1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 1, 2, 13, 22, 11,21, 22, 23, 2, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1,1, 2, 3, 2, 1]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
      this.sideMenuObj = {"Markets" : ['Futures', 'CME COTs', 'Options', 'Prices', 'Companies', 'Structural Products', 'Exchange Tokens'],
                          "OnChainMetrics" : ['Bitcoin', 'Etherium', 'Solana', 'Comparison', 'Flows', 'Users']
                          }
  }

}
