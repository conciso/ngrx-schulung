import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadApp } from './+state/app.actions';

@Component({
  selector: 'schulung-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'burger-shop';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadApp())
  }
}
