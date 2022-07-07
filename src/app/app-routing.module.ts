import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrackerComponent } from './components/tracker/tracker.component';

const routes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'feeds',      component: FeedsComponent },
  { path: 'projects',      component: LayoutComponent },
  { path: 'tracker',      component: TrackerComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'signup',      component: SignupComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
