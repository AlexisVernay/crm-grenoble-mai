import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractData } from 'src/app/shared/abstract/abstract-data';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent extends AbstractData implements OnInit {

  constructor(protected route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {
  }

}
