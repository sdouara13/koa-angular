import {Component, OnInit, HostBinding} from '@angular/core';
import { fadeInUp } from '../common/animations';

@Component({
  selector: 'free-main',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  animations: [fadeInUp]
})
export class UploaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

