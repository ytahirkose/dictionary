import { Injectable } from '@angular/core';
import {Words} from '../words';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import application from '@angular-devkit/build-angular/src/babel/presets/application';

@Injectable()
export class WordsService {

  constructor(
    private http: HttpClient
  ) { }

  path = 'http://localhost:3000/words'

  getWords():Observable<Words[]>{
    return this.http
      .get<Words[]>(this.path).pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );

  }

  getWordsCategory(category: string):Observable<Words[]>{
    let newPath = this.path;
    if (category){
      newPath += "?category="+category
    }
    return this.http
      .get<Words[]>(this.path).pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );

  }


  handleError(err: HttpErrorResponse) {

    let errorMessage= ''
    if(err.error instanceof ErrorEvent){
      errorMessage = 'Bir Hata Oluştu'+err.error.message
    }else {
      errorMessage ='Sistemsel Hata'
    }
    return throwError(errorMessage);

  }

  addWord(word: Words):Observable<Words> {
    return this.http.post<Words>(
      this.path,
      word,
      {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      });
  }


  deleteWords(id){
    return this.http.delete(this.path + '/' + id);
  }

editWords(word:Words){
}


}
