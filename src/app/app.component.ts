import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  list: any[] = [];
  listLength: number = this.list.length;
  removeItem: number = 0;
  addTask(item: string) {
    this.list.push({ id: this.list.length + 1, name: item });
    console.log(this.list);
  }

  removeTask(id: number) {
    console.log(id);
    this.list = this.list.filter(item => item.id !== id)
    /*
    this.removeItem = id;
    this.list = this.list.slice(this.removeItem,1);
    console.log(this.list);
    */
  }
}
