import { Routes } from '@angular/router';

// Definición de rutas con lazy loading.
// Cada página se carga mediante loadComponent, lo que permite
// que la aplicación descargue únicamente el código necesario
// en el momento de la navegación. Los componentes son standalone,
// por lo que no requieren declaración en módulos NgModule.
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'personal',
    loadComponent: () =>
      import('./personal/personal.page').then((m) => m.PersonalPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contacto/contacto.page').then((m) => m.ContactoPage),
  },
];