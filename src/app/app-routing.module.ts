import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './github/repos/repos.component';
import { CreateRepoComponent } from './github/repos/create/create.component';

const routes: Routes = [
  {path: '', component: ReposComponent},
  {path: 'repos',
    component: CreateRepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
