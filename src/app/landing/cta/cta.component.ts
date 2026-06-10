import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  readonly submitted = signal(false);

  // Form model
  nombre = '';
  email = '';
  telefono = '';
  institucion = '';
  alumnos = '';

  onSubmit(event: Event): void {
    event.preventDefault();

    // Basic validation
    if (!this.nombre || !this.email || !this.institucion || !this.alumnos) {
      return;
    }

    // Simulate form submission
    this.submitted.set(true);
  }
}
