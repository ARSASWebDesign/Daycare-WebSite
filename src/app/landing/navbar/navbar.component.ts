import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  readonly navLinks = [
    { href: '#features', label: 'Funcionalidades' },
    { href: '#plans', label: 'Planes' },
    { href: '#how-it-works', label: 'Cómo funciona' },
    { href: '#faq', label: 'FAQ' },
  ];
}
