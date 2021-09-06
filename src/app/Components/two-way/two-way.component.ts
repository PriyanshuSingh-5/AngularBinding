import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent implements OnInit {

  constructor() { }
  title = 'binding';

  public random = ""
public name = "BridgeLabz"

public topic = "Data Binding"
public image = "../../../assets/Logo.png"

onClick(){

  console.log("Thanks for subscribing")

}


  ngOnInit(): void {
  }

}
