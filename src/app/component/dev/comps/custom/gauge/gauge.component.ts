import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomBasicComponent } from 'src/app/component/basic/custom-basic/custom-basic.component';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { CompEmitService } from '../../../../../providers/comp-emit.service';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent extends CustomBasicComponent implements OnInit {
  chartOption:any;
  constructor(private emitService: CompEmitService) {
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