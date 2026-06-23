import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol],
})
export class PersonalPage {
  personalInfo = [
    { label: 'Nombre Completo', value: 'Kilmer H.' },
    { label: 'Correo Electrónico', value: 'khilnmer@gmail.com' },
    { label: 'Teléfono', value: '+58 424-231-9705' },
    { label: 'Ubicación', value: 'Caracas, Venezuela' },
    { label: 'Ocupación', value: 'Desarrollador Backend .NET' },
    { label: 'Idiomas', value: 'Español, Inglés' },
  ];
}