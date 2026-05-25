import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {

  contactOpen = false;
  loading = false;
  success = false;

  constructor(public translate: TranslateService) {}

  openContactModal() {
    this.contactOpen = true;
  }

  closeContactModal() {
    this.contactOpen = false;
  }

  closeSuccess() {
    this.success = false;
  }

  sendMessage(form: any) {
    if (form.invalid) return;

    this.loading = true;

    fetch('https://formspree.io/f/xdajengp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    .then(() => {
      this.loading = false;
      this.contactOpen = false;
      this.success = true;
      form.reset();
    })
    .catch(() => {
      this.loading = false;
      alert('Error sending message');
    });
  }
}