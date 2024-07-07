export interface IOptions {
  value: string | number;
  label: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface ServiceType {
  id: number;
  name: string;
  categoryId: number;
}
