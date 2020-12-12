export default {
  LOGIN: '/login',
  PRODUCT: (limit, offset, search) => {
    return `/product?limit=${limit}&offset=${offset}&search=${search}`;
  },
};
