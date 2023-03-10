import { Component } from '@angular/core';
import { NavBarLinkInterface } from '../../types/navbar-link.interfacte';

@Component({
  selector: 'sp-navbar-links',
  templateUrl: './navbar-links.component.html',
  styleUrls: ['./navbar-links.component.scss']
})
export class NavbarLinksComponent {

  navbarBasicLinks: NavBarLinkInterface[] = [
    {name: "Home", path:""},
    {name: "Products", path:"Products"},
    {name: "Contacts", path: "Contacts"},
  ]


  navbarAccountLinks: NavBarLinkInterface[] = []


}
