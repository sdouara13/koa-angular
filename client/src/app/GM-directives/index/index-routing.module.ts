import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {IndexComponent} from './index.component';

const childRoutes: Routes = [
  {path: 'login', loadChildren: '../login/login.module#LoginModule'},
  {path: 'directives', loadChildren: '../main/main.module#MainModule'},
  {path: 'uploader', loadChildren: '../uploader/uploader.module#UploaderModule'},
  {path: '', redirectTo: '/main/directives', pathMatch: 'full'},
  // {path: '**', redirectTo: '/error'}
];

const routes: Routes = [{
  path: '', component: IndexComponent, children: childRoutes
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
