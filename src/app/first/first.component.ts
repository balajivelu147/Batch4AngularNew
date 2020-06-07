import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  userName: string = 'balaji';
  oneWayBinding: string = 'samplePage';
  customerType: string;
  customerTypeList: string[] = ['normal user', 'previliged user'];
  isRecordUpdated: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  readInput(): void {
    this.isRecordUpdated = true;
  }

}
