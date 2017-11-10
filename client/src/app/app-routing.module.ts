import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: 'main', loadChildren: './GM-directives/index/index.module#IndexModule'},
  {path: '', redirectTo: '/main/directives', pathMatch: 'full'},
  {path: '**', redirectTo: '/main/directives', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
