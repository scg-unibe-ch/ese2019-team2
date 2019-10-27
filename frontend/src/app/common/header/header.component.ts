import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }

  isThisLoginOrRegisterPage(){
    return this.router.url === '/register' || this.router.url == '/login';
  }
}
