import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Git } from './git';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GitService {
    git: Git;

    constructor(private http: HttpClient) {
        this.git = new Git();
    }
    //fetching data from api(stackroute) 
    getGit(): Observable<Array<Git>> {
      console.log("here");
      const headers = {
        headers: new HttpHeaders({ 'Authorization': 'Bearer zWUqy5r6SpFzRDTHAbJg','Content-Type' : 'application/js;'})
      };
      return this.http.get<Array<Git>>('https://gitlab.stackroute.in/api/v4/projects', headers);
    }

    //adding favourite into db.json
    addFavourite(obj): Observable<any> {
      return this.http.post<any>('http://localhost:3000/api/v1/favourites', obj);
    }

    //reteiving favourite data from db.json file
    getFavourite(): Observable<Array<any>> {
      return this.http.get<Array<any>>('http://localhost:3000/api/v1/favourites');
    }

    //deleting from db.json
    delete(id):Observable<{}> {
      return this.http.delete('http://localhost:3000/api/v1/favourites'+'/'+id);
    }

    // searching a specific repo by name
    getByName(name: String): Observable<Array<any>> {
       console.log("here grtbyname called "+ name);
       const headers = {
        headers: new HttpHeaders({ 'Authorization': 'Bearer zWUqy5r6SpFzRDTHAbJg','Content-Type' : 'application/js;'})
      };
       return this.http.get<Array<any>>('https://gitlab.stackroute.in/api/v4/projects?search='+name, headers);
      
      // https://gitlab.example.com/api/v4/projects?search=test
     }
 
  
  


}


