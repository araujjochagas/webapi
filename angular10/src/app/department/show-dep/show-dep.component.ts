import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-usu.component.html',
  styleUrls: ['./show-usu.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  UsuarioList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  UsuarioIdFilter:string="";
  NomeFilter:string="";
  UsuarioListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      UsuarioId:0,
      Nome:""
    }
    this.ModalTitle="Add Usuario";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item){
    this.dep=item;
    this.ModalTitle="Edit Usuario";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteUsuario(item.UsuarioId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.UsuarioList=data;
      this.UsuarioListWithoutFilter=data;
    });
  }

  FilterFn(){
    var UsuarioIdFilter = this.UsuarioIdFilter;
    var NomeFilter = this.NomeFilter;

    this.UsuarioList = this.UsuarioListWithoutFilter.filter(function (el){
        return el.UsuarioId.toString().toLowerCase().includes(
          UsuarioIdFilter.toString().trim().toLowerCase()
        )&&
        el.Nome.toString().toLowerCase().includes(
          NomeFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.UsuarioList = this.UsuarioListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
