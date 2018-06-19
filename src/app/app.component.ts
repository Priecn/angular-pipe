import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: Server[] = [
    new Server('Production Server', 'medium', 'stable', new Date(15, 1, 2017)),
    new Server('User Server', 'large', 'stable', new Date(15, 1, 2017)),
    new Server('Development Server', 'small', 'offline', new Date(15, 1, 2017)),
    new Server('Testing Environment Server', 'small', 'stable', new Date(15, 1, 2017))
  ];

  getStatusClasses(server: Server){
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
