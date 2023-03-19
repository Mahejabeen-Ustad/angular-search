import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { RouterService } from '../router.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: RouterService) {
  }
   ngOnInit(){
  }

  

  listView() {
    this.router.routeToDisplayRepo();
  }

}
