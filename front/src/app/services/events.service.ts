// src/app/services/events.service.ts

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EventDto, CreateEventDto } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl = 'https://apicausality360.azurewebsites.net/api/events';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  /**
   * Obtiene eventos recientes del día (el backend maneja automáticamente el procesamiento)
   */
  getRecentEvents(count: number = 5): Observable<EventDto[]> {
    // Si estamos en SSR, retorna datos vacíos para evitar errores
    if (!isPlatformBrowser(this.platformId)) {
      return of([]);
    }

    return this.http.get<EventDto[]>(`${this.baseUrl}/recent?count=${count}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Obtiene un evento por ID (solo si se necesita)
   */
  getEventById(id: string): Observable<EventDto> {
    if (!isPlatformBrowser(this.platformId)) {
      return throwError(() => new Error('No disponible en servidor'));
    }

    return this.http.get<EventDto>(`${this.baseUrl}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Manejo de errores mejorado
   */
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Ha ocurrido un error desconocido';
    
    // Solo manejar ErrorEvent en el navegador
    if (isPlatformBrowser(this.platformId) && error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Errores del servidor
      switch (error.status) {
        case 0:
          errorMessage = 'No se puede conectar con el servidor. Verifica que la API esté ejecutándose.';
          break;
        case 429:
          errorMessage = 'Demasiadas solicitudes. Por favor, espera un momento.';
          break;
        case 404:
          errorMessage = 'Endpoint no encontrado.';
          break;
        case 500:
          errorMessage = 'Error interno del servidor.';
          break;
        default:
          errorMessage = `Error ${error.status}: ${error.message || 'Error desconocido'}`;
      }
    }
    
    console.error('Error en EventsService:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  /**
   * Formatea la fecha para mostrar tiempo transcurrido
   */
  getTimeAgo(createdAt: string): string {
    const now = new Date();
    const created = new Date(createdAt);
    const diffMs = now.getTime() - created.getTime();
    
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMinutes < 60) {
      return `hace ${diffMinutes} minutos`;
    } else if (diffHours < 24) {
      return `hace ${diffHours} horas`;
    } else {
      return `hace ${diffDays} días`;
    }
  }
}