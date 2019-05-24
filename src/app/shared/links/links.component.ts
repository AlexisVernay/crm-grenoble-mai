import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  @Input() links: string;
  constructor() { }

  ngOnInit() {
  }

  /*action(param: string) {
    this.links.emit({
      route: this.item,
      libelle: param
    });
  }*/
}
