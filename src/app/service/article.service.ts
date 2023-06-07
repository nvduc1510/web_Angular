import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const ARTICLE_API = "http://localhost:8080/articles";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  constructor(private http : HttpClient) { }

  getListArticles(): Observable<any[]> {
    // Giả định: API trả về một mảng các bài báo
    return this.http.get<any[]>(ARTICLE_API,httpOptions);
  }

  deleteArticle(id:any):Observable<any>{
    return this.http.delete(ARTICLE_API + "/" + id,httpOptions);
  }

}
