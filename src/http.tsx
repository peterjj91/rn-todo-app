export class Http {
  static HEADERS = { 'Content-Type': 'application/json' };

  static async get(url: string) {
    try {
      return await request(url, 'GET');
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async post(url: string, data = {}) {
    try {
      return await request(url, 'POST', data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async delete(url: string) {
    try {
      return await request(url, 'DELETE');
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async patch(url: string, data = {}) {
    try {
      return await request(url, 'PATCH', data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

async function request(url: string, method: string, data = {}) {
  const config = {
    method,
    headers: Http.HEADERS,
  };

  if (method === 'POST' || method === 'PATCH') {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  return await response.json();
}
