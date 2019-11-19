import { Component, OnInit, OnDestroy} from '@angular/core';
import { RecipeDataService } from '../shared/recipeData.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showList: boolean;
  private userSubscription: Subscription;
  loggedIn: boolean;
  // @Output() listChanged = new EventEmitter <{listState: boolean}>();
  constructor(private dataService: RecipeDataService, private authService: AuthService) { }

  ngOnInit() {
    this.showList = false;
    this.loggedIn = false
    this.userSubscription = this.authService.user.subscribe(
      user => {
        this.loggedIn = !user ? false : true; 
      }
    );
  }

  onSave(){
    console.log('Attempting PUT request header.ts');
    this.dataService.saveRecipeData();
  }

  onGet(){
    console.log('Attempting GET request header.ts');
    this.dataService.getRecipeData().subscribe();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  onLogOut(){
    this.authService.logout();
  }

  // No longer needed, routing handled by router instead of click events
  // changeListVisibility(arg: boolean){
  //   this.showList = arg;
  //   this.listChanged.emit({
  //     listState: this.showList
  //   });
  // }
}
