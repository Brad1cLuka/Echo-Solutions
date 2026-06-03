import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AfterViewInit } from '@angular/core';
import AOS from 'aos';

bootstrapApplication(App, appConfig)
  .then(() => {
    // AOS init tek kad Angular završi render
    setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        disable: 'mobile'
      });
    }, 0);
  })
  .catch((err) => console.error(err));