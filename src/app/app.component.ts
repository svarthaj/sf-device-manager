import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles : [`
        :host {
            display: block;
        }
    `],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Device Manager Webtool';
}
