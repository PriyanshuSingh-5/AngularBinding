import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }
  title = 'binding';

public name = "BridgeLabz"

public topic = "Data Binding"
public image = "../../../assets/Logo.png"

onClick(){

  console.log("Thanks for subscribing")

}


  ngOnInit(): void {
  }

}
