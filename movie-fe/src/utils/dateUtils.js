// Utility functions for date formatting
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

/**
 * Format date to Vietnamese locale (DD/MM/YYYY)
 * @param {string|Date} dateString - Date string or Date object
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'Chưa cập nhật';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Chưa cập nhật';
    
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  } catch (error) {
    return 'Chưa cập nhật';
  }
};

/**
 * Format date and time to Vietnamese locale (DD/MM/YYYY HH:mm)
 * @param {string|Date} dateString - Date string or Date object
 * @returns {string} Formatted date and time string
 */
export const formatDateTime = (dateString) => {
  if (!dateString) return 'Chưa cập nhật';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Chưa cập nhật';
    
    return date.toLocaleString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    return 'Chưa cập nhật';
  }
};

/**
 * Format relative time (e.g., "2 giờ trước", "3 ngày trước")
 * @param {string|Date} dateString - Date string or Date object
 * @returns {string} Relative time string
 */
export const formatRelativeTime = (dateString) => {
  if (!dateString) return 'Chưa cập nhật';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Chưa cập nhật';
    
    return formatDistanceToNow(date, { 
      addSuffix: true, 
      locale: vi 
    });
  } catch (error) {
    return 'Chưa cập nhật';
  }
};

/**
 * Format date for input field (YYYY-MM-DD)
 * @param {string|Date} dateString - Date string or Date object
 * @returns {string} Date string in YYYY-MM-DD format
 */
export const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    return date.toISOString().split('T')[0];
  } catch (error) {
    return '';
  }
};

/**
 * Check if date is valid
 * @param {string|Date} dateString - Date string or Date object
 * @returns {boolean} True if date is valid
 */
export const isValidDate = (dateString) => {
  if (!dateString) return false;
  
  try {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  } catch (error) {
    return false;
  }
}; 