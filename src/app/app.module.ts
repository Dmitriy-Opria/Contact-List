import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCJ_oJk9i10SbBHbsczhz1_3G-ouoLgABw',
  authDomain: 'contactlist-790be.firebaseapp.com',
  databaseURL: 'https://contactlist-790be.firebaseio.com',
  storageBucket: 'contactlist-790be.appspot.com',
  messagingSenderId: '540468807621'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
