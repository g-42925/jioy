import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import shuffle from 'lodash/shuffle';


@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result implements OnInit {
  state = window.history.state;

  answers:any[] = []

  onSelected(e:any,r:string,idx:number){
      if(e.target.value === r){
        this.state.skipped = this.state.skipped.filter((s:any,i:number) => {
					return i > 0
				})

				this.answers = this.answers.filter((f) => {
					return f.romaji != r
				})

				this.answers = shuffle(
					[
						...this.answers,
						this.state.skipped[0]
					]
				)
      }
    }

  ngOnInit(){
    const words = shuffle(this.state.all)
    this.answers = shuffle([
      words[words.length -  1],
      words[words.length -  2],
      words[words.length -  3],
      words[words.length -  4],
      words[words.length -  5],
      words[words.length -  6],
      words[words.length -  7],
      words[words.length -  8],
      words[words.length -  9],     
      this.state.skipped[0]
    ])
  }
}
