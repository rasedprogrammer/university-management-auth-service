import { SortOrder } from 'mongoose';

type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: SortOrder;
};

const calculatePagination = (pagination: IOptions): IOptionsResult => {
  const page = Number(pagination.page || 1);
  const limit = Number(pagination.limit || 10);
  const skip = (page - 1) * limit;

  const sortBy = pagination.sortBy || 'createdAt';
  const sortOrder = pagination.sortOrder || 'desc';

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export const paginationHelpers = {
  calculatePagination,
};
