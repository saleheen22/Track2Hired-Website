import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';
import AuthProvider from './provider/AuthProvider';
import JobsProvider from './provider/JobsProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <JobsProvider>
          <RouterProvider router={router} />
        </JobsProvider>
    </AuthProvider>
    </QueryClientProvider>
  
  </StrictMode>
);
