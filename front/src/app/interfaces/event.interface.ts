export interface EventDto {
  id: string;
  titulo: string;
  descripcion?: string;
  fecha: string;
  origen?: string;
  impacto?: string;
  prediccionIA?: string;
  fuentes?: string;
  imageUrl?: string;
  sourceName?: string;
  categories: string[];
  similarEvents: SimilarEventDto[];
  createdAt: string;
}

export interface SimilarEventDto {
  id: number;
  evento: string;
  detalle?: string;
}

export interface CreateEventDto {
  titulo: string;
  descripcion?: string;
  fecha: string;
  categories: string[];
}

// Interfaz para la respuesta de la API
export interface ApiResponse<T> {
  data?: T;
  message?: string;
  success: boolean;
}