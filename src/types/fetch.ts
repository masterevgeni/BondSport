export interface FetchStateProps<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}