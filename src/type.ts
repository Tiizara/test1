export interface RepositoryResponse {
  name: string;
  language: string;
  forks: number;
  stargazers_count: number;
  updated_at: string;
  id: number;
  description: string;
  license: {
    key: string;
    name: string;
    node_id: string;
    spdx_id: string;
    url: string;
  } | null;
}

export interface SearchResponse {
  items: RepositoryResponse[];
}
