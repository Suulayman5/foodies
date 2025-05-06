import {create} from 'zustand'
import axiosInstance from './axios'

axiosInstance.defaults.withCredentials = true
interface AuthStore {
    user: any;
    isAuthenticated: boolean;
    error: any;
    isLoading: boolean;
    isCheckingAuth: boolean;
  
    signup: (email: string, password: string, name: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    verifyEmail: (code: string) => Promise<any>;
    checkAuth: () => Promise<void>;
  }
  
  export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
  
    signup: async (email, password, name) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axiosInstance.post('/auth/signup', { email, name, password });
        set({ user: response.data.user, isAuthenticated: true, isLoading: false, error: null });
      } catch (error: any) {
        console.log('FULL ERROR =====>>>>>', error);
      
        set({
          error: error?.response?.data?.message || 'error signing up',
          isLoading: false,
        });
      
        throw error;
      }
      
    },
  
    login: async (email, password) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axiosInstance.post('/auth/login', { email, password });
        set({ user: response.data.user, isAuthenticated: true, isLoading: false, error: null });
      } catch (error: any) {
        set({ error: error?.response?.data?.message || 'error signing in', isLoading: false });
        throw error;
      }
    },
  
    verifyEmail: async (code) => {
      set({ isLoading: true, error: null });
      try {
        const response = await axiosInstance.post('/auth/verify-email', { code });
        set({ user: response.data.user, isAuthenticated: true, isLoading: false, error: null });
        return response.data;
      } catch (error: any) {
        set({ error: error?.response?.data?.message || 'error verifying email', isLoading: false });
        throw error;
      }
    },
  
    checkAuth: async () => {
      set({ isCheckingAuth: true, error: null });
      try {
        const response = await axiosInstance.get('/auth/check-auth');
        set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
      } catch (error) {
        set({ error: null, isCheckingAuth: false });
        throw error;
      }
    }
  }));
  