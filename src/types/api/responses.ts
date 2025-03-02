// Base response untuk semua API response
export interface BaseResponse {
  status: string;
  message: string;
}

// Response untuk single item data
export interface SingleResponse<T> extends BaseResponse {
  data: T;
}

// Response untuk multiple items/list data
export interface ListResponse<T> extends BaseResponse {
  data: T[];
}

// Response untuk operasi yang tidak mengembalikan data
export interface EmptyResponse extends BaseResponse {
  data: null;
}

// Optional: Response dengan pagination
export interface PaginatedResponse<T> extends BaseResponse {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}