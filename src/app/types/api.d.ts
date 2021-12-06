export type Result<T = null> = {
  status: number;
  data: T;
};

export type ItemResult<T = null> = Result<T>;

export type ItemsResult<T = null> = Result<T[]>;
