// src/app/supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseUrl = 'https://uctwqsdlmupcavcxrvlk.supabase.co';
  private supabaseKey = 'sb_publishable_qgRVJSISurO3mqRQuaHCuQ_WHI5QWFZ';
  public supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  // Contoh fungsi untuk fetch data
  async getWords() {
    const { data, error } = await this.supabase
      .from('words') // nama tabel di Supabase
      .select('*');
    if (error) {
      console.error(error);
      return [];
    }
    console.log(error)
    return data;
  }

  // Contoh fungsi insert data
  async addUser(name: string, email: string) {
    const { data, error } = await this.supabase
      .from('users')
      .insert([{ name, email }]);
    if (error) {
      console.error(error);
      return null;
    }
    return data;
  }
}
