import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Derek y Jorge se bañan juntos?',
      subHeader: '¿Crees tú que Derek y Jorge se bañen juntos?',
      message:
        'Aveces llegan con el cabello mojado o con olor a coito, dicen que vienen de rondalla pero sospecho que es mentira.',
      buttons: [
        {
          text: 'Confirmar ✔️',
        },
        {
          text: 'NO ❌',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
}
