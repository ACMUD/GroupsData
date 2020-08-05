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
  predata: string;

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

  // tslint:disable-next-line: typedef
  importar() {
    const datos = JSON.parse(this.predata)
    this.infobase = {
      // tslint:disable-next-line: no-string-literal
      Nombre: datos['Nombre'],
      // tslint:disable-next-line: no-string-literal
      Abreviacion: datos['Abreviacion'],
      // tslint:disable-next-line: no-string-literal
      logo: datos['logo'],
      // tslint:disable-next-line: no-string-literal
      link: datos['link'],
      // tslint:disable-next-line: no-string-literal
      Descripcion: datos['Descripcion'],
    };
      // tslint:disable-next-line: no-string-literal
    this.responsables = datos['Responsables'].map(data => {
      return {texto: data};
    });
      // tslint:disable-next-line: no-string-literal
    this.TemasTrabajados = datos['TemasTrabajados'];
      // tslint:disable-next-line: no-string-literal
    this.horarios = datos['horarios'];
      // tslint:disable-next-line: no-string-literal
    this.prerequisitos = datos['Prerrequisitos'].map(data => {
      return {texto: data};
    });
  }

  // tslint:disable-next-line: typedef
  ActionResponsable(action: string, index?: number) {
    if (action === 'add') {
      this.responsables.push({
        texto: ''
      });
    } else {
      this.responsables.splice(index, 1);
    }
  }

  // tslint:disable-next-line: typedef
  ActionPrerequisitos(action: string, index?: number) {
    if (action === 'add') {
      this.prerequisitos.push({
        texto: ''
      });
    } else {
      this.prerequisitos.splice(index, 1);
    }
  }

  // tslint:disable-next-line: typedef
  ActionTemas(action: string, index?: number) {
    if (action === 'add') {
      this.TemasTrabajados.push({
        nombre: '',
        descripcion: ''
      });
    } else {
      this.TemasTrabajados.splice(index, 1);
    }
  }

  // tslint:disable-next-line: typedef
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
