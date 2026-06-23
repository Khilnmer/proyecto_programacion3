import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline, home,
  personOutline, person,
  mailOutline, mail,
  sunnyOutline, sunny,
  moonOutline, moon,
} from 'ionicons/icons';
import { ThemeService } from './services/theme.service';

// Menú tipo push para dispositivos móviles. En desktop los enlaces
// se muestran directamente en la barra superior. El menú ion-menu
// solo es visible en pantallas pequeñas mediante la clase .mobile-menu.
// Se utilizan CSS media queries para mostrar/ocultar en lugar de
// lógica JavaScript, evitando suscripciones innecesarias a eventos resize.
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp, IonMenu, IonContent, IonList,
    IonItem, IonIcon, IonLabel, IonRouterOutlet,
    IonHeader, IonToolbar, IonTitle,
    IonButtons, IonMenuButton,
  ],
})
export class AppComponent {
  themeService = inject(ThemeService);

  appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Personal', url: '/personal', icon: 'person' },
    { title: 'Contacto', url: '/contact', icon: 'mail' },
  ];

  constructor() {
    addIcons({
      homeOutline, home,
      personOutline, person,
      mailOutline, mail,
      sunnyOutline, sunny,
      moonOutline, moon,
    });
  }
}