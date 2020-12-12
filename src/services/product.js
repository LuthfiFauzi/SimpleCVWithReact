import BaseService from './baseService';
import API from '../config/rest';

const productService = (limit, offset, search) => {
  return BaseService.get(API.PRODUCT(limit, offset, search));
};

export default { productService };
