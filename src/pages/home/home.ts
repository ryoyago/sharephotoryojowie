import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';
import { PickerPage } from '../../pages/pick/pick';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
 
  readonly APP_USERNAME: string = 'yago';
  readonly APP_PASSWORD: string = '1234';
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
 
  }
  login (){
    let alert = this.alertCtrl.create({
      title: 'Login erroneo',
      subTitle: 'El nombre de usuario o la contraseña son incorrectos.',
      buttons: ['OK']
    });

    if (this.username == this.APP_USERNAME && this.password == this.APP_PASSWORD) {
      this.navCtrl.push(PickerPage);
    } else {
      alert.present();
    }
    this.username = '';
    this.password = '';
  }
  

}
