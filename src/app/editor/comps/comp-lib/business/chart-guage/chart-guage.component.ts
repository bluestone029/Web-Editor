import { Component, OnInit } from '@angular/core';
import { CustomBasicComponent } from '../../../comp-basic/custom-basic/custom-basic.component';
import { EmitSubService } from 'src/app/providers/emit-sub.service';

@Component({
  selector: 'app-chart-guage',
  templateUrl: './chart-guage.component.html',
  styleUrls: ['./chart-guage.component.scss']
})
export class ChartGuageComponent extends CustomBasicComponent implements OnInit {
  chartOption:any;
  constructor(private emitService: EmitSubService) {
    super(emitService)
   }

  ngOnInit(): void {
    this.initBasicData();
    this.initData();
  }

  initData() {
    this.chartOption = {
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          feature: {
              restore: {},
              saveAsImage: {}
          }
      },
      series: [
          {
              name: '业务指标',
              type: 'gauge',
              detail: {formatter:'{value}%'},
              data: [{value: 50, name: '完成率'}]
          }
      ]
    }
  
  }

}
