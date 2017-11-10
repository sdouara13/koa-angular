import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AccordionModule} from '../../component/accordion/accordion.component';
import {PanelModule} from '../../component/panel/panel.component';
import {GridModule} from '../../component/grid/grid.directive';
import {ButtonModule} from '../../component/button/button.directive';
import {TabGroupModule} from '../../component/tab/tab.component';
import {SelectModule} from '../../component/select/select.component';

import {TableModule} from '../../component/table/table.component';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {LanguageModule} from '../common/language';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    MainRoutingModule,
    AccordionModule,
    PanelModule,
    GridModule,
    SelectModule,
    TabGroupModule,
    TableModule,
    ButtonModule,
    LanguageModule
  ],
  declarations: [MainComponent]
})
export class MainModule {}
