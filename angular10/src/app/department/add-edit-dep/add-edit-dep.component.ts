import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-usu.component.html',
  styleUrls: ['./add-edit-usu.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  UsuarioId:string;
  Nome:string;

  ngOnInit(): void {
    this.UsuarioId=this.usu.UsuarioId;
    this.Nome=this.usu.Nome;
  }

  addUsuario(){
    var val = {UsuarioId:this.UsuarioId,
                Nome:this.Nome};
    this.service.addUsuario(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUsuario(){
    var val = {UsuarioId:this.UsuarioId,
      Nome:this.Nome};
    this.service.updateUsuario(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
