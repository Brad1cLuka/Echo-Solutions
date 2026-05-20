import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {

  contactOpen = false;
  loading = false;
  success = false;

  openContactModal() {
    this.contactOpen = true;
  }

  closeContactModal() {
    this.contactOpen = false;
  }

  sendMessage(form: any) {

    if (form.invalid) return;

    this.loading = true;

    // Formspree submit trigger (manual POST)
    fetch('https://formspree.io/f/xdajengp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    }).then(() => {

      this.loading = false;
      this.contactOpen = false;
      this.success = true;
      form.reset();

    }).catch(() => {

      this.loading = false;
      alert('Error sending message');

    });
  }

  closeSuccess() {
    this.success = false;
  }
}