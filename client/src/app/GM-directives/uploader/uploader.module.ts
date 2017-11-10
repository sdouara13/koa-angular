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
import { UploaderComponent } from './uploader.component';
import {UploaderRoutingModule} from './uploader-routing.module';
import {LanguageModule} from '../common/language';
import { Config } from '../config'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    UploaderRoutingModule,
    AccordionModule,
    PanelModule,
    GridModule,
    SelectModule,
    TabGroupModule,
    TableModule,
    ButtonModule,
    LanguageModule
  ],
  providers: [
    Config.AuthGuard,
  ],
  declarations: [UploaderComponent]
})
export class UploaderModule {}
