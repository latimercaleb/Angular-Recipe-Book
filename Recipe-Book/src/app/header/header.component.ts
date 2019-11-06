import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showList: boolean;
  // @Output() listChanged = new EventEmitter <{listState: boolean}>();
  constructor() { }

  ngOnInit() {
    this.showList = false;
  }

  // No longer needed, routing handled by router instead of click events
  // changeListVisibility(arg: boolean){
  //   this.showList = arg;
  //   this.listChanged.emit({
  //     listState: this.showList
  //   });
  // }
}