const getBaseURL = () => {
  const hostname = window.location.hostname;
  const ports = ['5001', '5000', '3001']; 
  
  // List of potential base URLs
  const urls = [
    `http://${hostname}:5001`,
    'http://localhost:5001',
    'http://127.0.0.1:5001',
    ...ports.map(port => `http://${hostname}:${port}`)
  ];

  return urls;
};

const API_CONFIG = {
  baseURLs: getBaseURL(),
  currentURLIndex: 0,
  timeout: 5000, // Reduced timeout for faster fallback
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
};

export default API_CONFIG;