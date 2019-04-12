import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { LandingComponent } from './components/landing/landing.component';
import { Content2Component } from './components/content2/content2.component';
import { Content3Component } from './components/content3/content3.component';
import { Content4Component } from './components/content4/content4.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'content1',
        component: ContentComponent
      },
      {
        path: 'content2',
        component: Content2Component
      }
    ]
  },
  {
    path: 'sa',
    component: LandingComponent,
    children: [
      { path: 'content3', component: Content3Component, outlet: 'outlet2' },
      { path: 'content4', component: Content4Component, outlet: 'outlet2' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
