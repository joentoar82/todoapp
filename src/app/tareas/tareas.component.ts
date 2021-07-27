import { Component} from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent{

  title:string = "My Todo App";
  
  todoArray:any=[];

  guardarTarea(value:any):void{
    if(value !== ""){
      this.todoArray.push(value)
    }else{
      alert('El campo tarea es requerido.');
    }
  }
  
  borrarTarea(item:any){
    for(let i=0; i<=this.todoArray.length; i++){
      if(item == this.todoArray[i]){
        this.todoArray.splice(i,1);
      }
    }
  }

}
