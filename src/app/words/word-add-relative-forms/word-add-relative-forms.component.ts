import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Words} from '../words';
import {WordsService} from '../services/words.service';
import {MatAccordion} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-word-add-relative-forms',
  templateUrl: './word-add-relative-forms.component.html',
  styleUrls: ['./word-add-relative-forms.component.css'],
  providers: [WordsService,MatDatepickerModule]
})
export class WordAddRelativeFormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private wordsService: WordsService) {
  }



  wordAddForm: FormGroup;
  word: Words = new Words;
  words: Words[];
  categories = ["English","Spanish","French"]

  createWordAddForm() {
    this.wordAddForm = this.formBuilder.group({
      id:['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      learned: [false, Validators.required]

    });
  }

  ngOnInit(): void {
    this.createWordAddForm();
    this.wordsService.getWords().subscribe(data => {
      this.words = data;
    });
  }


  add() {
    if (this.wordAddForm.valid) {
      this.word = Object.assign({}, this.wordAddForm.value)
    }
    this.wordsService.addWord(this.word).subscribe(data=>{
      alert(data.name+" Added")
      console.log(data)
    });
  }

}
