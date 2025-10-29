const getAPIConfig = () => {
  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  
  return {
    baseURL: isLocalhost ? 'http://localhost:5001' : `http://${hostname}:5001`,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true // Enable sending cookies in cross-origin requests
  };
}

const API_CONFIG = getAPIConfig();

export default API_CONFIG;