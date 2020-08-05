import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  infobase: any = {};
  responsables = [];
  prerequisitos = [];
  TemasTrabajados = [];
  horarios = [];
  infoGrupo: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  generar() {
    this.infoGrupo = this.infobase;
    this.infoGrupo.Responsables = this.responsables.map(data => data.texto);
    this.infoGrupo.Prerrequisitos = this.prerequisitos.map(data => data.texto);
    this.infoGrupo.TemasTrabajados = this.TemasTrabajados;
    this.infoGrupo.horarios = this.horarios;
  }

  ActionResponsable(action: string, index?: number) {
    if (action === 'add') {
      this.responsables.push({
        texto: ''
      });
    } else {
      this.responsables.splice(index, 1);
    }
  }

  ActionPrerequisitos(action: string, index?: number) {
    if (action === 'add') {
      this.prerequisitos.push({
        texto: ''
      });
    } else {
      this.prerequisitos.splice(index, 1);
    }
  }

  ActionTemas(action: string, index?: number) {
    if (action === 'add') {
      this.TemasTrabajados.push({
        Nombre: '',
        Descripcion: ''
      });
    } else {
      this.TemasTrabajados.splice(index, 1);
    }
  }

  ActionHorarios(action: string, index?: number) {
    if (action === 'add') {
      this.horarios.push({
        dia: '',
        hora: '',
        lugar: ''
      });
    } else {
      this.horarios.splice(index, 1);
    }
  }

}
