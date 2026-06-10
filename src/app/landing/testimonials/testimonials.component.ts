import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  readonly testimonials = [
    {
      stars: '★★★★★',
      text: '"DayCare Manager nos cambió la administración. Pasamos de usar 4 planillas de Excel y 3 grupos de WhatsApp a tener todo centralizado. La asistencia digital nos ahorra 2 horas por día."',
      initials: 'MC',
      avatarBg: 'bg-primary/10',
      avatarColor: 'text-primary',
      name: 'María Cristina',
      role: 'Directora · Jardín Rayito de Sol',
    },
    {
      stars: '★★★★★',
      text: '"Lo mejor es la comunicación con los padres. Ahora enviamos fotos, circulares y notas individuales desde la plataforma. Los papás están más conectados y conformes."',
      initials: 'LP',
      avatarBg: 'bg-green-100',
      avatarColor: 'text-green-600',
      name: 'Laura Pérez',
      role: 'Directora · Kinder Mis Pequeños',
    },
    {
      stars: '★★★★★',
      text: '"Tener dos sedes era un caos administrativo. Con DayCare Manager veo las dos en un mismo dashboard, controlo cuotas y asistencia de ambas sin moverme de mi escritorio."',
      initials: 'RG',
      avatarBg: 'bg-yellow-100',
      avatarColor: 'text-yellow-600',
      name: 'Ricardo Gómez',
      role: 'Dueño · Jardines Mundo Infantil (2 sedes)',
    },
  ];
}
