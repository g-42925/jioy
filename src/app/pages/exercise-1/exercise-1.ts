import { Component, inject, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { SupabaseService } from '../../shared/service/supabase.service';
import { CommonModule } from '@angular/common';
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
  index = 0;
  done = false;
  ngZone = inject(NgZone);
  cDR = inject(ChangeDetectorRef);
  
  async ngOnInit() {
    try { 
      const r = await this.supabase.getWords()
      this.words = shuffle(r)
      this.cDR.detectChanges()
    } 
    catch (e) {
      console.log(e);
    }
  }
}
