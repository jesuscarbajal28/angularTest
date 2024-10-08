import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {
  constructor(private actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Curiosas',
      buttons: [
        {
          text: '¡JESUS GUAPO! 🎉',
          icon: 'happy-outline',
          handler: () => {
            console.log('¡Wow seleccionado!');
          },
        },
        {
          text: 'JORGE CALVO 👀',
          icon: 'eye-outline',
          handler: () => {
            console.log('Opción Misterio seleccionada');
          },
        },
        {
          text: 'DEROBIRO ❌',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
