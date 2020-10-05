import { Component, OnInit } from '@angular/core';
import { PredictionsService } from 'src/app/services/predictions.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor(private predictionService: PredictionsService) { }

  entryId = null;
  treatment : any = {};
  records : any = {};
  treatmentPred : any = '';

  showSpinner = false;

  ngOnInit(): void {
  }

  onGetTreatment(){ 
    this.showSpinner = true
    this.predictionService.addRecord(this.treatment).subscribe(res=>{
      var test  = res;
      this.treatmentPred = test;
      
      console.log(this.treatmentPred);
      this.showSpinner = false;
    })

  }

}
