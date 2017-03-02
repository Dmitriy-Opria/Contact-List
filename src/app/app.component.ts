import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import {Business} from "./business";
import {Category} from "./category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit{
  businesses:Business[];
  categories:Category[];
  appState: string;
  activeKey: string;
  constructor(private _firebaseService: FirebaseService) {
    
  }
  ngOnInit(){
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    })
    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
  changeState(state, key){
    console.log('Changing state to:' + state);
    if(key){
      this.activeKey = key;
      console.log('Changing Key to:' + key);
  
    }
    this.appState = state;
  }
}
