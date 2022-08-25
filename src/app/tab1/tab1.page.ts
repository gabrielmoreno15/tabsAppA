import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  previsao = {};

  constructor(private api: ApiService) {
    this.api.buscarPrevisao().subscribe(dados =>{
      // eslint-disable-next-line @typescript-eslint/dot-notation
      console.log(dados);
      this.previsao = dados;
    });
  }



}
