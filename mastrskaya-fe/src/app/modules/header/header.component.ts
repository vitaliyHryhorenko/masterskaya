import {Component} from '@angular/core';

@Component({
  selector: 'mst-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  _categories = [
    {
      label: "О нас",
      id: "about-us"
    },
    {
      label: "Мастер-классы",
      id: "master-classes"
    },
    {
      label: "Корпоративные МК",
      id: "corporate-courses"
    },
    {
      label: "Акции",
      id: "sales"
    }
  ];
}
