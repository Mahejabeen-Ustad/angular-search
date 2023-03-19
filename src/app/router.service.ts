import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RouterService {

  constructor(private router: Router) {

   }
   routeToLogin() {
    this.router.navigate(['login']);
  }
  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
  routeToSearch() {
    this.router.navigate(['search']);
  }
  routeToDisplayRepo() {
    this.router.navigate(['displayRepo']);
  }
  routeToGridView() {
    console.log('inside routeToGridView fun');
    this.router.navigate(['view/gridView']);
  }

}
