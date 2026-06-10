import { Component } from '@angular/core';

@Component({
  selector: 'app-problem-solution',
  standalone: true,
  templateUrl: './problem-solution.component.html',
  styleUrl: './problem-solution.component.scss',
})
export class ProblemSolutionComponent {
  readonly problems = [
    { icon: '📝', title: 'Registro en papel', description: 'Asistencia manuscrita que luego hay que cargar, con errores y pérdida de datos.' },
    { icon: '💬', title: 'WhatsApp desorganizado', description: 'Comunicación con padres en grupos caóticos, mensajes perdidos, sin trazabilidad.' },
    { icon: '📊', title: 'Excel casero', description: 'Cuentas en planillas que nadie actualiza, cobros atrasados sin visibilidad.' },
    { icon: '🔍', title: 'Sin métricas', description: 'Imposible saber en tiempo real la asistencia, morosidad o desempeño operativo.' },
  ];
}
