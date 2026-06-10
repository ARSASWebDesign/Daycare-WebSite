import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: true,
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  readonly plans = [
    {
      name: 'Inicial',
      subtitle: 'Para jardines pequeños',
      price: '$50.000',
      recommended: false,
      features: [
        { text: 'Hasta 30 alumnos', included: true },
        { text: '1 sede', included: true },
        { text: 'Gestión de alumnos y familias', included: true },
        { text: 'Asistencia digital', included: true },
        { text: 'Dashboard básico', included: true },
        { text: 'Multi-sede', included: false },
        { text: 'App padres', included: false },
      ],
      cta: 'Elegir Plan',
      border: true,
    },
    {
      name: 'Profesional',
      subtitle: 'Para jardines en crecimiento',
      price: '$100.000',
      recommended: true,
      features: [
        { text: 'Hasta 100 alumnos', included: true },
        { text: 'Multi-sede (hasta 3)', included: true },
        { text: 'Todo lo del plan Inicial', included: true },
        { text: 'Facturación y cuotas', included: true },
        { text: 'Comunicación con familias', included: true },
        { text: 'App para padres', included: true },
        { text: 'Reportes avanzados', included: true },
      ],
      cta: 'Elegir Plan',
      border: false,
    },
    {
      name: 'Empresarial',
      subtitle: 'Para cadenas y grandes instituciones',
      price: '$200.000+',
      recommended: false,
      features: [
        { text: 'Alumnos ilimitados', included: true },
        { text: 'Multi-sede ilimitado', included: true },
        { text: 'Todo lo del plan Profesional', included: true },
        { text: 'App marca blanca', included: true },
        { text: 'API de integración', included: true },
        { text: 'Soporte dedicado', included: true },
        { text: 'Capacitación presencial', included: true },
      ],
      cta: 'Contactar',
      border: true,
    },
  ];
}
