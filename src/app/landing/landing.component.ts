import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ProblemSolutionComponent } from './problem-solution/problem-solution.component';
import { FeaturesComponent } from './features/features.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PlansComponent } from './plans/plans.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProblemSolutionComponent,
    FeaturesComponent,
    HowItWorksComponent,
    PlansComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-problem-solution></app-problem-solution>
    <app-features></app-features>
    <app-how-it-works></app-how-it-works>
    <app-plans></app-plans>
    <app-testimonials></app-testimonials>
    <app-faq></app-faq>
    <app-cta></app-cta>
    <app-footer></app-footer>
  `,
})
export class LandingComponent {}
