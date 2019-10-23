import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth-service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data = [];

  constructor(private auth: AuthService) { }

  ionViewDidEnter(){
    this.makeRequest();
  }

  ionViewDidLeave(){
    this.data = [];
  }

  ngOnInit() {
    
  }  

  makeRequest(){
    this.auth.getUserInformation().subscribe(res => {
      if (res.status !== 200) return;
      const userInfo = res.body.userInformation;
      const keys = Object.keys(userInfo);
      keys.forEach((key)=> {
        const temp = {title: key, content: userInfo[key]};
        this.data.push(temp);
      })
    });
  }

}
