import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SupabaseService } from '../app/shared/service/supabase.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('jioy');
  private supabase = inject(SupabaseService);

  async ngOnInit(){
    var r = await this.supabase.getWords();
    console.log(r)
  }
}
