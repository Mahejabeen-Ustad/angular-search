import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';
import { SearchrepoComponent } from './searchrepo/searchrepo.component';
import { DisplayRepoComponent } from './display-repo/display-repo.component';
import { GridviewComponent } from './gridview/gridview.component';



const routes: Routes = [
  { path:'login',component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard],
    children: [
      { path: 'view/displayRepo', component: DisplayRepoComponent},
      { path: 'view/gridView', component: GridviewComponent },
      { path: '', redirectTo: 'view/displayRepo',pathMatch: 'full'}
    ]
  },
  { path: 'favourite', component: FavouriteComponent},
  { path: '', redirectTo:'/login',pathMatch:'full'},
  { path: 'search', component: SearchrepoComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
