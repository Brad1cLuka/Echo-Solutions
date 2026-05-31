import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

  activeModal: number | null = null;

  openModal(id: number) {
    this.activeModal = id;
  }

  closeModal() {
    this.activeModal = null;
  }

  goToContact() {
    this.closeModal();

    setTimeout(() => {
      document.getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}