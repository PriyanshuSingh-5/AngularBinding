import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  constructor() { }
  title = 'binding';

  public name = "BridgeLabz"

  public topic = "Data Binding"
  public image = "../../../assets/Logo.png"

  ngOnInit(): void {
  }

}
