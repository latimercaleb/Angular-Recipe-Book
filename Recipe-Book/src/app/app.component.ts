import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listIsVisible: boolean;
  listVisibilityChanged(arg: {listState: boolean}){
    this.listIsVisible = arg.listState;
  }
}
