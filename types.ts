export type Language = 'zh' | 'en';

export enum ProjectCategory {
  ALL = 'ALL',
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  MINIMALIST = 'MINIMALIST',
  RENOVATION = 'RENOVATION'
}

export interface Project {
  id: number;
  titleZh: string;
  titleEn: string;
  category: ProjectCategory[];
  image: string;
  descriptionZh: string;
  descriptionEn: string;
  behanceUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

