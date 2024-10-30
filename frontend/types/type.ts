export interface PayloadResponse<T> {
  data: T;
  error: null | {
    message: string;
    type: string;
    contexts: string[];
  };
  statusCode: number;
}
