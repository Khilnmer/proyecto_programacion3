import { ChangeDetectionStrategy, Component, inject, ChangeDetectorRef } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonTextarea,
  IonButton,
  IonSpinner,
  IonIcon,
  ToastController,
  AlertController,
} from '@ionic/angular/standalone';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    IonContent, IonInput, IonTextarea,
    IonButton, IonSpinner, IonIcon,
  ],
})
export class ContactoPage {
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private toastCtrl = inject(ToastController);
  private alertCtrl = inject(AlertController);

  sending = false;
  sent = false;
  error = '';

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  async confirmSend() {
    if (this.contactForm.invalid) return;

    const alert = await this.alertCtrl.create({
      header: 'Confirmar envío',
      message: '¿Estás seguro de enviar este mensaje?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Enviar', handler: () => this.sendMessage() },
      ],
    });
    await alert.present();
  }

  async sendMessage(): Promise<void> {
    if (this.contactForm.invalid) return;

    this.sending = true;
    this.error = '';
    this.cdr.markForCheck();

    try {
      await emailjs.send(
        'service_b25hybx',
        'template_aioyb9f',
        {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        },
        '766PFBVqJL43Xn1qL'
      );
      this.sent = true;
      this.contactForm.reset();
      const toast = await this.toastCtrl.create({
        message: 'Mensaje enviado correctamente',
        duration: 3000,
        position: 'bottom',
        color: 'success',
      });
      await toast.present();
    } catch {
      this.error = 'Error al enviar el mensaje. Intenta de nuevo.';
      const toast = await this.toastCtrl.create({
        message: 'Error al enviar el mensaje',
        duration: 3000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    } finally {
      this.sending = false;
      this.cdr.markForCheck();
    }
  }
}
