import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import solidGauge from 'highcharts/modules/solid-gauge.src';
import * as HighchartsMore from "highcharts/highcharts-more.src.js";
import { Subject } from 'rxjs';
import { UpdateserviceService } from '../updateservice.service';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { forEachTrailingCommentRange } from 'typescript';

@Component({
  selector: 'app-devicestatus',
  templateUrl: './devicestatus.component.html',
  styleUrls: ['./devicestatus.component.css']
})
export class DevicestatusComponent implements OnInit {
 
  disp:any=[];
  sensorup:any=0;

  constructor(private service: UpdateserviceService) { }

  ngOnInit(): void {
    this.refreshSensor();
  }


  refreshSensor(){

    this.service.updateChart().subscribe(amsiedad=>{

      //panel graph
      this.disp = amsiedad;
      this.disp = this.disp['area'][0]
    })

  }
  
}
