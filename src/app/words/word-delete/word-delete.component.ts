import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Words} from '../words';
import {MatTableDataSource} from '@angular/material/table';
import {WordsService} from '../services/words.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-word-delete',
  templateUrl: './word-delete.component.html',
  styleUrls: ['./word-delete.component.css'],
  providers:[WordsService]
})
export class WordDeleteComponent implements OnInit {



  words :Words[];
  displayedColumns: string[] = [ 'name', 'description', 'category', 'position', 'isImportant', 'remove' ];
  dataSource: MatTableDataSource<any>;

  constructor(
    private wordsService: WordsService,
    private activatedRoot: ActivatedRoute,
    private changeDetectorRefs: ChangeDetectorRef
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


  delete(id) {
    this.wordsService.deleteWords(id).subscribe(data => {
      const position = this.words.findIndex(word => word.id == id);
      this.words.splice(position,1);
      this.dataSource = new MatTableDataSource(this.words);
    }, error => {
      alert("silme işleminde hata gerçekleşti.");
    });
  }


}
