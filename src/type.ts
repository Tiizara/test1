export interface RepositoryResponse {
  name: string;
  language: string;
  forks: number;
  stargazers_count: number;
  updated_at: string;
  id: number;
  description: string;
  license: object;
}

export interface SearchResponse {
  items: RepositoryResponse[];
}
