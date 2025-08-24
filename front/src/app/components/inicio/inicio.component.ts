// src/app/components/inicio/inicio.component.ts

import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { EventsService } from '../../services/events.service';
import { EventDto } from '../../interfaces/event.interface';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  events: EventDto[] = [];
  loading = false;
  error: string | null = null;
  selectedEvent: EventDto | null = null;
  showSimilarEvents = false;

  // Para manejar las suscripciones
  private destroy$ = new Subject<void>();

  constructor(
    private eventsService: EventsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Solo cargar eventos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.loadTodayEvents();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * TrackBy function para mejorar performance del ngFor
   */
  trackByEventId(index: number, event: EventDto): string {
    return event.id;
  }

  /**
   * Manejo de error en imagen
   */
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/no-image.jpg';
  }

  /**
   * Carga los eventos del día (el backend maneja automáticamente si procesar noticias nuevas)
   */
  loadTodayEvents(): void {
    this.loading = true;
    this.error = null;

    // El backend se encarga automáticamente de procesar noticias si no hay eventos del día
    this.eventsService.getRecentEvents(5)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (events) => {
          this.events = events;
          if (events.length > 0) {
            console.log(`✅ Cargados ${events.length} eventos del día`);

            // Ordenar por fecha de creación (más recientes primero)
            this.events.sort((a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          } else {
            console.log('📝 No hay eventos disponibles');
            this.error = 'No hay eventos disponibles en este momento.';
          }
        },
        error: (error) => {
          const currentHour = new Date().getHours();
          const currentMinute = new Date().getMinutes();
          const currentTime = currentHour * 60 + currentMinute;
          const scheduledTime = 17 * 60 + 0; // 17:00

          if (Math.abs(currentTime - scheduledTime) <= 15) {
            // Cerca de la hora del scheduler
            this.error = 'Las noticias del día se están procesando automáticamente. Actualiza en unos minutos para ver las noticias frescas.';
          } else {
            this.error = 'No se pueden cargar las noticias. El sistema puede estar procesando noticias nuevas, intenta recargar en unos minutos.';
          }
          console.error('Error cargando eventos:', error);
        }
      });
  }

  /**
   * Fuerza la recarga de noticias (útil si quieres refrescar manualmente)
   * NOTA: Mantenemos este método por si se necesita en el futuro
   */
  refreshEvents(): void {
    this.loadTodayEvents();
  }

  /**
   * Selecciona un evento para mostrar detalles
   */
  selectEvent(event: EventDto): void {
    this.selectedEvent = event;
    this.showSimilarEvents = false;
    this.currentSimilarIndex = 0;
  }

  /**
   * Cierra el modal de detalles
   */
  closeEventDetails(): void {
    this.selectedEvent = null;
    this.showSimilarEvents = false;
  }

  /**
   * Muestra/oculta eventos similares
   */
  toggleSimilarEvents(): void {
    this.showSimilarEvents = !this.showSimilarEvents;
  }

  /**
   * Obtiene el tiempo transcurrido desde la creación
   */
  getTimeAgo(createdAt: string): string {
    return this.eventsService.getTimeAgo(createdAt);
  }

  /**
   * Abre la fuente original en una nueva pestaña
   */
  openSource(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  /**
   * Obtiene las primeras palabras de un texto para preview
   */
  getPreview(text: string | undefined, maxLength: number = 150): string {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  /**
   * Obtiene el color de la categoría para mostrar
   */
  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'politics': '#e74c3c',
      'economy': '#3498db',
      'technology': '#9b59b6'
    };

    return colors[category.toLowerCase()] || colors['general'];
  }

  /**
   * Verifica si hay eventos para mostrar
   */
  get hasEvents(): boolean {
    return this.events && this.events.length > 0;
  }

  /**
   * Obtiene el total de eventos similares
   */
  getTotalSimilarEvents(): number {
    return this.selectedEvent?.similarEvents?.length || 0;
  }

  // Manejo del carrusel de eventos similares
  currentSimilarIndex: number = 0;

  previousSimilar() {
    if (this.currentSimilarIndex > 0) {
      this.currentSimilarIndex--;
    }
  }

  nextSimilar() {
    if (this.selectedEvent && this.currentSimilarIndex < this.selectedEvent.similarEvents.length - 1) {
      this.currentSimilarIndex++;
    }
  }

  goToSimilar(index: number) {
    this.currentSimilarIndex = index;
  }

  // Manejo del carrusel del workflow
  currentWorkflowStep: number = 0;

  previousWorkflowStep() {
    if (this.currentWorkflowStep > 0) {
      this.currentWorkflowStep--;
    }
  }

  nextWorkflowStep() {
    if (this.currentWorkflowStep < 3) { // máximo 3 porque tenemos pasos 0,1,2,3
      this.currentWorkflowStep++;
    }
  }

  goToWorkflowStep(step: number) {
    if (step >= 0 && step <= 3) {
      this.currentWorkflowStep = step;
    }
  }

  /**
   * Obtiene la fecha actual formateada para mostrar en la interfaz
   */
  getCurrentDate(): string {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Europe/Madrid'
    };
    
    return today.toLocaleDateString('es-ES', options).toUpperCase();
  }

  /**
   * Obtiene la fecha en formato corto para móviles
   */
  getCurrentDateShort(): string {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'Europe/Madrid'
    };
    
    return today.toLocaleDateString('es-ES', options).toUpperCase();
  }
}