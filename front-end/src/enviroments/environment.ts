// src/environments/environment.ts

// Define a type for the window object with the expected structure
interface CustomWindow extends Window {
  env: {
    BACKEND_API_URI?: string;
    // Add other properties as needed
  };
}

// Use unknown type assertion first, then cast to CustomWindow
const customWindow = window as unknown as CustomWindow;

// Set environment variables if available
customWindow.env = customWindow.env || {};
  customWindow.env.BACKEND_API_URI = customWindow.env.BACKEND_API_URI ;

export const environment = {
  production: false,
  apiUrl: customWindow.env.BACKEND_API_URI
};
