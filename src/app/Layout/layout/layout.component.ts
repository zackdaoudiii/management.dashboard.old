import { Component, NgModule, OnInit } from '@angular/core';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(this.sideBar);
  }

    sideBar =[
    {
      "name":"dashboard",
      "path":"dashboard",
      "icon":"settings_input_svideo"
    },
    {
      "name":"App",
      "path":"invoice",
      "icon":"apps",
      "icon-arrow-right":"keyboard_arrow_right",
      "subTitle":[
        {
          "nameSub":"subApp",
          "pathSub":"invoicehahha"
        },
        {
          "nameSub":"subApp",
          "pathSub":"invoicehahha"
        },
        {
          "nameSub":"subApp",
          "pathSub":"invoicehahha"
        },
        {
          "nameSub":"subApp",
          "pathSub":"invoicehahha"
        }
      ]
    }
  ]
}
