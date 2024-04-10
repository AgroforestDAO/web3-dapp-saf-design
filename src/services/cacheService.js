// cacheService.js

// Função para armazenar dados no cache
export function setCache(key, data) {
  try {
     const serializedData = JSON.stringify(data);
     localStorage.setItem(key, serializedData);
  } catch (error) {
     console.error('Erro ao armazenar dados no cache:', error);
  }
 }
 
 // Função para recuperar dados do cache
 export function getCache(key) {
  try {
     const serializedData = localStorage.getItem(key);
     if (serializedData) {
       return JSON.parse(serializedData);
     }
  } catch (error) {
     console.error('Erro ao recuperar dados do cache:', error);
  }
  return null;
 }
 
 // Função para remover dados do cache
 export function removeCache(key) {
  try {
     localStorage.removeItem(key);
  } catch (error) {
     console.error('Erro ao remover dados do cache:', error);
  }
 }
 
 // Função para limpar todo o cache
 export function clearCache() {
  try {
     localStorage.clear();
  } catch (error) {
     console.error('Erro ao limpar o cache:', error);
  }
 }
 