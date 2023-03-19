import { Component, OnInit } from '@angular/core';
import { Git } from '../git';
import { GitService } from '../git.service';

@Component({
  selector: 'app-searchrepo',
  templateUrl: './searchrepo.component.html',
  styleUrls: ['./searchrepo.component.css']
})
export class SearchrepoComponent implements OnInit {

  git: Git;
  gitList : Array<Git>;

  constructor(private gitService: GitService) {
    this.git = new Git();
    this.gitList = [];
   }

  ngOnInit(): void {
  }
  getRepoByName(){
    this.gitService.getByName( this.git.name).subscribe(res =>{
        console.log("search by reponame ",res);
        this.gitList = res;
    }), error =>{
          console.log(error);
    }
  }

}
