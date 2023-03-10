import { Component, Input } from '@angular/core';
import { NavBarLinkInterface } from '../../types/navbar-link.interfacte';

@Component({
  selector: 'sp-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.scss']
})
export class NavbarLinkComponent {
  @Input('navBarLink') navBarLinkProps!: NavBarLinkInterface;
}
