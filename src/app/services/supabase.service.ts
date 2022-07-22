import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

export interface Profile {
  username: string;
  website: string;
  avatar_url: string;
}

export interface Projects {
  name: string;
  category: string;
  tags: string;
}

export interface Feeds {
  date: string;
  title: string;
  source: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  get user() {
    return this.supabase.auth.user();
  }

  get session() {
    return this.supabase.auth.session();
  }

  get profile() {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', this.user?.id)
      .single();
  }

  get allProjects() {
    return this.supabase
      .from('ProjectsMain')
      .select(`*`);
  }

  get allFeeds() {
    return this.supabase
      .from('feed')
      .select(`*`);
  }

  filterProjects(key: string[]) {
    return this.supabase
      .from('ProjectsMain')
      .select(`*`).in('Category', key);
  }

  searchProjectsByTitle(key: string) {
    return this.supabase
      .from('ProjectsMain')
      .select(`*`).like('Name', '%'+key+'%');
  }

  get filterOptions() {
    return this.supabase
    .from('ProjectsMain')
    .select('Category');
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signIn(email: string) {
    return this.supabase.auth.signIn({ email });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      id: this.user?.id,
      updated_at: new Date(),
    };

    return this.supabase.from('profiles').upsert(update, {
      returning: 'minimal', // Don't return the value after inserting
    });
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file);
  }

  saveSubscribeEmail(email:string){
    return this.supabase
    .from('SubscribeEmails')
    .insert([
      { email: email }
    ])  
  }
  }