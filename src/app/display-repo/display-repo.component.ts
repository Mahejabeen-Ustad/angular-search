import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { Git } from '../git';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-display-repo',
  templateUrl: './display-repo.component.html',
  styleUrls: ['./display-repo.component.css']
})
export class DisplayRepoComponent implements OnInit {
  title = 'angularapi';
  git: Git;
  gitList: Array<Git>;


  constructor(private gitService: GitService,private router: RouterService) {
    this.git =new Git();
    this.gitList = [];

   }

   ngOnInit(){
     // accessing get service to get the repo
    this.gitService.getGit().subscribe(resp =>{
      this.gitList = resp;
      console.log(resp);
      console.log(this.gitList);
    }),
    error =>{
      console.log(error);
    }
  }

  //adding data as favourite
  add(name_with_namespace: string, description: string, star_count: number, forks_count: number,open_issues_count: number) {
    console.log("add button clicked");
    //creating obj of data to 
    var obj ={
      name_with_namespace: name_with_namespace,
      description: description,
      star_count: star_count,
      forks_count: forks_count,
      open_issues_count: open_issues_count
    }

    this.gitService.addFavourite(obj).subscribe();
  }
  gridView(){
    console.log("inside gridview");
    this.router.routeToGridView();
  }
  

}
