export interface WikipediaResponse {
  query: {
    search: WikipediaSearchResult[];
  };
}

export interface WikipediaSearchResult {
  title: string;
  snippet: string;
  pageid: number;
}
