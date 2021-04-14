import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  consoleLoader() {
    console.log('Que la force soit avec moi!');
  }

  constructor() {

  }
}
