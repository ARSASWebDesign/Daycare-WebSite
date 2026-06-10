import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {
  readonly steps = [
    { number: '1', title: 'Registrate', description: 'Completá el formulario con los datos de tu institución. Solo tomá 5 minutos.' },
    { number: '2', title: 'Configurá', description: 'Cargá tus salas, alumnos y familias. Te ayudamos con la migración de datos.' },
    { number: '3', title: 'Capacitá', description: 'Capacitamos a tu equipo en una sesión online de 1 hora. Incluída en todos los planes.' },
    { number: '4', title: 'Gestioná', description: 'Empezá a usar el sistema el día 1. Asistencia, facturación y comunicación desde el vamos.' },
  ];
}
