import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/auth-service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  canCreateNewService() {
    return this.auth.canOpen('admin');
  }

}
