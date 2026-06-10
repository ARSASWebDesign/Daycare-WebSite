import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  readonly faqs = [
    {
      question: '¿Necesito conocimientos técnicos para usar DayCare Manager?',
      answer: 'No, para nada. DayCare Manager está diseñado para que cualquier persona lo use sin experiencia técnica. La interfaz es intuitiva y además ofrecemos capacitación online gratuita incluída en todos los planes.',
    },
    {
      question: '¿Puedo migrar mis datos desde Excel?',
      answer: 'Sí, te ayudamos a migrar tus datos desde Excel u otros sistemas. Soportamos importación de alumnos, familias y planes de cuotas. El proceso es rápido y lo guiamos paso a paso.',
    },
    {
      question: '¿Los padres necesitan instalar algo?',
      answer: 'Los padres acceden desde su navegador web o desde la app progresiva (PWA) sin necesidad de instalar nada. También pueden recibir notificaciones push y ver información de sus hijos desde el celular.',
    },
    {
      question: '¿Cómo manejan la seguridad de los datos?',
      answer: 'La seguridad es nuestra prioridad. Usamos aislamiento completo de datos entre instituciones (RLS), encriptación en tránsito y en reposo, autenticación segura con JWT, y auditoría de todos los accesos. Nuestra infraestructura corre en Microsoft Azure con certificaciones internacionales.',
    },
    {
      question: '¿Hay período de prueba gratuito?',
      answer: 'Sí, ofrecemos 14 días de prueba gratuita sin compromiso ni necesidad de tarjeta de crédito. Durante el período de prueba tenés acceso completo a todas las funcionalidades del plan Profesional.',
    },
    {
      question: '¿Dan factura AFIP?',
      answer: 'Sí, emitimos factura AFIP tipo A, B o C según tu condición fiscal. Además, el sistema soporta integración con AFIP para que puedas emitir tus propias facturas electrónicas desde la plataforma.',
    },
  ];
}
