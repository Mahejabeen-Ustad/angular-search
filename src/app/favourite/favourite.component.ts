import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favList: Array<any>;

  constructor(private gitService: GitService) {
    this.favList = [];

   }

  ngOnInit(): void {
    this.gitService.getFavourite().subscribe(response =>{
      this.favList = response;
    }),error =>{
      console.log(error);
    }

  }
  delete(id) {
    this.gitService.delete(id).subscribe();
  }

}
