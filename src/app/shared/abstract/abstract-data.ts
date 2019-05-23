import { ActivatedRoute } from '@angular/router';

export abstract class AbstractData {
  title: string;
  label: string;

  constructor(protected route: ActivatedRoute) {
    route.data.subscribe((data) => {
      if (data.title) {
        this.title = data.title;
      }
      if (data.label) {
        this.label = data.label;
      }
   });
  }
}
