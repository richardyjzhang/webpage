function getByEnv(): string {
  let url = '';

  const env = process.env.API_ENV;

  switch (env) {
    case 'dev': {
      url = 'http://127.0.0.1/api/v1/';
      break;
    }
    case 'prod': {
      url = 'https://www.zhangrichard.com/api/v1/';
      break;
    }
    default: {
      url = 'http://127.0.0.1:8000/api/v1/';
      break;
    }
  }

  return url;
};

const baseURL = getByEnv();
export default baseURL;
