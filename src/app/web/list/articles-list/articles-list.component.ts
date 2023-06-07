import { Component } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent {
  article : any;

  constructor(private articleService : ArticleService ){}

  ngOnInit():void{
    this.getListArticle();
  }
  getListArticle() {
    this.articleService.getListArticles().subscribe({
      next: res =>{
        this.article = res;
      }
    })
  }
  deleteArticle(id :any) {
    this.articleService.deleteArticle(id).subscribe(data=>{
      this.getListArticle();
    })
  }
  
}
 