import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    { 
     name: 'chromium', 
     use: {
        ...devices['Desktop Chrome'] 
     },
    },
     {
      name: 'iPhone13',
      use: {
        ...devices['iPhone 13'], 
      },
    },
    {
      name: 'Pixel5',
      use: {
        ...devices['Pixel 5'], 
      },
    },
  ]
});