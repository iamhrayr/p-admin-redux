export type Pagination = {
  limit?: number;
  page?: number;
  pages?: number;
  total?: number;
};

export type ApiListResponse = {
  docs: Array<any>;
};
