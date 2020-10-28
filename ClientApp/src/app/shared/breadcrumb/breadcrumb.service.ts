import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  subBreadcrumb = new Subject<any>();

  constructor() { }

  set title(text: String) {
    this.subBreadcrumb.next(text);
  }

}
