import {Component, OnInit, HostBinding} from '@angular/core';
import { fadeInUp } from '../common/animations';
import { MainService } from './main.service';

@Component({
  selector: 'free-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeInUp],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  @HostBinding('@fadeInUpState') fadeInUpState;
  @HostBinding('style.display') display = 'block';
  cells: any[] = [];
  selectedOption: any;
  projects: any[] = [];
  constructor(private service: MainService) {
  }

  ngOnInit() {
    this.service.getDirectives('test')
    .then((res) => {
      console.log(res)
    });
    this.projects = [{
      label: '手游',
      value: '0',
    },
      {
        label: '口袋版',
        value: '1',
      }];
    this.cells['0'] = [{
      keys: '升级主殿',
      gm: 'up!',
      etc: ''
    },
      {
        keys: '增加资金',
        gm: 'up!',
        etc: ''
      },
      {
        keys: '开启试炼',
        gm: 'up!',
        etc: ''
      },
      {
        keys: '累积充值人民币数V1到V15',
        gm: 'up!',
        etc: '"6,' +
        '30,' +
        '60,' +
        '150,' +
        '300,' +
        '600,' +
        '900,' +
        '1500,' +
        '3000,' +
        '6000,' +
        '9000,' +
        '15000,' +
        '30000,' +
        '50000,' +
        '80000,' +
        'nNewTotal = 600就是充值了6RMB，就会升到V1"'
      },
      {
        keys: '快速完成每日目标获取活跃度',
        gm: 'up!',
        etc: ''
      }];
    this.cells['1'] = [
      {
        keys: '关卡测试',
        gm: 'up!',
        etc: ''
      },
      {
        keys: '领取周奖励',
        gm: 'up!',
        etc: ''
      },
      {
        keys: '设置变量',
        gm: 'up!',
        etc: ''
      },
      {
        keys: '开启家族',
        gm: 'up!',
        etc: ''
      }
    ]

  }

  onTabChange(event: any) {
  }
}

