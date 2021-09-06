import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  constructor() { }
  title = 'binding';

  public name = "BridgeLabz"

  public topic = "Data Binding"

  ngOnInit(): void {
  }

}
