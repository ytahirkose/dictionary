import { Component, OnInit } from '@angular/core';
import {Words} from './words';
import {WordsService} from './services/words.service';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
  providers: [WordsService]
})
export class WordsComponent implements OnInit {

  words :Words[];
  displayedColumns: string[] = [ 'name', 'description', 'category', 'position', 'isImportant' ];
  dataSource: MatTableDataSource<any>;

  constructor(
    private wordsService: WordsService,
    private activatedRoot: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.wordsService.getWords().subscribe(data =>{
      this.words = data;
      this.dataSource = new MatTableDataSource(this.words);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  categoryFilter(): void{
    this.activatedRoot.params.subscribe(params=>{
      this.wordsService.getWordsCategory('category').subscribe(data =>{
        this.words = data;
      });
    })}


}
