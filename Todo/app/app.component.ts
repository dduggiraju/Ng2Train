import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from './model';
@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
    model = new Model(); 
    constructor() { }

    ngOnInit() { }
    getName(){
        return this.model.user;
    }
    getToDoItems(){
        return this.model.toDoItems.filter(item=>!item.done);
    }
    addToDoItem(toDoText){
         if(toDoText){
             this.model.toDoItems.push(new TodoItem(toDoText, false));
         }
        //this.model.toDoItems.
    }
}