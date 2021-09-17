import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  UsuarioId:string;
  Nome:string;
  Usuario:string;
  DataNascimento:string;
  Email:string;
  PhotoFilePath:string;

  UsuariosList:any=[];

  ngOnInit(): void {
    this.loadUsuarioList();
  }

  loadUsuarioList(){
    this.service.getAllNomes().subscribe((data:any)=>{
      this.UsuariosList=data;

      this.UsuarioId=this.usu.UsuarioId();
      this.Nome=this.emp.Nome;
      this.Usuario=this.emp.Usuario;
      this.DataNascimento=this.emp.DataNascimento;
      this.Email=this.emp.Email;
      this.PhotoFilePath=this.service.PhotoUrl+this.Email;
    });
  }

  addUsuario(){
    var val = {UsuarioId:this.UsuarioId,
                Nome:this.Nome,
                Usuario:this.Usuario,
              DataNascimento:this.DataNascimento,
            Email:this.Email};

    this.service.addUsuario(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUsuario(){
    var val = {UsuarioId:this.UsuarioId,
      Nome:this.Nome,
      Usuario:this.Usuario,
    DataNascimento:this.DataNascimento,
  Email:this.Email};

    this.service.updateUsuario(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.Email=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.Email;
    })
  }

}

