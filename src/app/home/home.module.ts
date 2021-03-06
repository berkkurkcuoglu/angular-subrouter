import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { ContentComponent } from './components/content/content.component';
import { Content2Component } from './components/content2/content2.component';
import { Content3Component } from './components/content3/content3.component';
import { Content4Component } from './components/content4/content4.component';

@NgModule({
  declarations: [
    LandingComponent,
    SubHeaderComponent,
    ContentComponent,
    Content2Component,
    Content3Component,
    Content4Component
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
