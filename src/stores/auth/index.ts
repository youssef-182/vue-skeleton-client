import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const token = useLocalStorage('token', '');

  const setToken = (newToken: string) => (token.value = newToken);

  const deleteToken = () => (token.value = '');
  
  return { token, setToken, deleteToken };
});
