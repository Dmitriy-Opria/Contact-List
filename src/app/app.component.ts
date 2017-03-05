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
  filterCategory(category){
    this._firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    })
  }
  addBusiness(
    company:string,
    category:string,
    years_in_business:string,
    description:string,
    phone:string,
    email:string,
    street_address:string,
    city:string,
    state:string,
    zipcode:string
  ){
    var created_at = new Date().toString();
    
    var newBusiness = {
      company: company,
      category: category,
      years_in_business: years_in_business,
      description: description,
      phone: phone,
      email: email,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      created_at: created_at
    }
    //console.log(newBusiness);
    this._firebaseService.addBusiness(newBusiness);
    
    this.changeState('default');
  }
}
