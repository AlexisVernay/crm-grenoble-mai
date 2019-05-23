import { Component, OnInit } from '@angular/core';
import { faArchway } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  faArchway = faArchway;
  constructor() { }

  ngOnInit() {
  }

}
