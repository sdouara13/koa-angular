import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { UploaderComponent } from './uploader.component';
import { Config } from '../config'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UploaderComponent, canActivate:[Config.AuthGuard] },
    ])
  ],
  exports: [RouterModule]
})

export class UploaderRoutingModule {
}
