import {utils} from './utils';
export const DEBUG = __DEV__;
export const appName = 'SmartDuka';
export const config = {
  API_URL: 'https://retailer-api.switchafrica.io',
  // API_URL: __DEV__ ? 'http://192.168.1.136:8000' : 'http://192.168.1.136:8000',
};

export const url = {
  BASE_URL: config.API_URL,
  SOCKET: config.API_URL,
  // core
  Device: '/v1/api/Device/',
  User: '/v1/api/User/',
  Notification: '/v1/api/Notification/',
  // auth
  login: '/v1/api/auth/login/',
  logout: '/v1/api/auth/logout/',
  register: '/v1/api/auth/registration/',
  user: '/v1/api/auth/user/',
  // pasword
  tnc: 'https://switchafrica.io/',
  faq: 'https://switchafrica.io/',
  about: 'https://switchafrica.io/',
  privacy: 'https://switchafrica.io/',
  password: {
    reset: '/v1/api/auth/password/reset/' /*POST: email*/,
    resetConfirm: '/v1/api/auth/password/reset/confirm/',
    change: '/v1/api/auth/password/change/',
  },
  otp: {
    request: '/v1/api/User/request_otp/',
    verify: '/v1/api/User/verify_otp/',
    check: '/v1/api/User/check/',
  },
  accounts: {
    authUser: '/v1/api/auth/user/',
    User: '/v1/api/User/',
    AttachmentCategory: '/v1/accounts/api/AttachmentCategory/',
    Attachment: '/v1/accounts/api/Attachment/',
    Profile: '/v1/accounts/api/Profile/',
  },
  retailer: {
    Category: '/v1/retailer/api/Category/',
    Transaction: '/v1/retailer/api/Transaction/',
    Book: '/v1/retailer/api/Book/',
  },
  getURL: (path, {item, type = 'detail'} = {}) => {
    const base = utils.getObject(url, path);
    let link = base;
    if (['detail', 'delete', 'edit'].includes(type)) {
      link = `${base}{{id}}/`;
    }
    return utils.replaceVariablesFromString(link, item);
  },
  getItemURL: (path, item) => url.getURL(path, {item, type: 'detail'}),
};
