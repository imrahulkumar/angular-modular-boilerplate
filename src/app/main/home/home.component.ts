import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit() {
    this.alert.success("hello",true);
    this.alert.error("hello",true);
  }

}
