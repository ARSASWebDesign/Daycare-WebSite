import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  readonly features = [
    {
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Gestión de Alumnos y Familias',
      description: 'Registrá alumnos con datos personales, salud, alergias y documentación. Vinculá familias enteras con múltiples contactos y autorizaciones de retiro.',
    },
    {
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Asistencia Digital',
      description: 'Check-in y check-out con un clic. Reportes diarios, semanales y mensuales automáticos. Control de capacidad por sala en tiempo real.',
    },
    {
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Facturación y Cuotas',
      description: 'Creá planes de cuotas (matrícula, mensualidad), generación automática de cuotas, tracking de pagos, vencimientos y recordatorios inteligentes.',
    },
    {
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Comunicación con Familias',
      description: 'Notas individuales, circulares por sala o generales, adjuntos de fotos y documentos. App para padres con notificaciones push en tiempo real.',
    },
    {
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'Reportes y Dashboards',
      description: 'Paneles de control en tiempo real para directores. Reportes exportables a Excel, CSV y PDF. Métricas de asistencia, morosidad y ocupación.',
    },
    {
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      title: 'Multi-sede',
      description: 'Gestioná múltiples sedes desde una misma cuenta. Configuración independiente por sede con datos centralizados para la dirección.',
    },
  ];
}
