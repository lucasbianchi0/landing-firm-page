// Define la interfaz para el formato de la imagen
export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

// Define la interfaz para la imagen
export interface Image {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: {
      [key: string]: ImageFormat;
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

// Define la interfaz para los atributos de un artículo
export interface ArticleAttributes {
  title: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  description?: string;
  descriptionPreview?: string;
  Image: {
    data: Image[];
  };
}

// Define la interfaz para un artículo
export interface Article {
  id: number;
  attributes: ArticleAttributes;
}

// Define la interfaz para la paginación
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Define la interfaz para el meta de la respuesta
export interface Meta {
  pagination: Pagination;
}

// Define la interfaz para la respuesta completa
export interface ArticlesResponse {
  data: Article[];
  meta: Meta;
}
