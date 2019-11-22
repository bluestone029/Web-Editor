import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "../../../comp-basic/style-basic/style-basic.component";

@Component({
  selector: 'app-z-index',
  templateUrl: './z-index.component.html',
  styleUrls: ['./z-index.component.scss']
})
export class ZIndexComponent extends StyleBasicComponent implements OnInit {
  zIndexS:any[];
  constructor() { 
    super()
  }

  ngOnInit() {
    this.initParentData();
    this.zIndexS = [
      1,2,3,4,5,6,7,8,9,10
    ];
    this.showMoreBool = false;
  }

  setStyle(param, val) {
    this.style[param] = val;
  }

}