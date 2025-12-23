import { Component, inject, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { SupabaseService } from '../../shared/service/supabase.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import shuffle from 'lodash/shuffle';

@Component({
  selector: 'app-exercise-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-1.html',
  styleUrls: ['./exercise-1.css'], // ← PERBAIKAN DI SINI
})
export class Exercise1 implements OnInit {
  supabase = inject(SupabaseService);
  words: any[] = [];
  skippedList:string[] = [];
  answers:any[] = [];
  index = 0;
  done = false;
  ngZone = inject(NgZone);
  cDR = inject(ChangeDetectorRef);
  router = inject(Router)

  skip(index:number){
    this.skippedList = [
      ...this.skippedList,
      this.words[index].original
    ]
  }

  finish(){
    
    var list = this.skippedList.map((r) => {
      var f =  this.words.filter((w) => {
        return w.original === r
      })

      return f[0]
    })

    var words = this.words.filter((w,index) => {
      return index > this.words.length - 99
    })

    var state = {
      state:{
        skipped:shuffle(list),
        all:words
      }
    }

    this.router.navigate(
      ['/result'],state
    );
  }
  
  async ngOnInit() {
    try { 
      const r = await this.supabase.getWords()
      this.words = shuffle(r);
      this.cDR.detectChanges()
    } 
    catch (e) {
      console.log(e);
    }
  }
}
