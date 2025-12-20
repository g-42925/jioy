import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  state = window.history.state.list;

  tmpList:any[] = []

  searchResult:any[] = []

  filter(e:any){
    if(this.filter.length > 0){
      var [filtered] = this.state.filter((x:any) => {
        return x.romaji === e.target.value
      })
      

      if(filtered){
        this.searchResult = [
          filtered
        ]
      }
      else{
        this.searchResult = []
      }

    }
    else{
    }

  }

}
