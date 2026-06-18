// src/hooks/useContactForm.js
// Custom hook for contact form logic
// Handles React Hook Form + EmailJS integration + form states

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Replace these placeholders with your real EmailJS credentials
// Dashboard: https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;   // e.g. 'abcDEFghiJKL'

// ─── Hook ────────────────────────────────────────────────────────────────────
export function useContactForm() {
  // Form state
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  // ─── Submit Handler ─────────────────────────────────────────────────────────
  const onSubmit = async (data) => {
    setStatus('loading');
    setErrorMessage('');

    // EmailJS template parameters
    // These keys must match your EmailJS template variables
    const templateParams = {
      from_name:    data.name,
      from_email:   data.email,
      from_phone:   data.phone || 'Nicht angegeben',
      service_type: data.service || 'Nicht angegeben',
      message:      data.message,
      to_name:      'D&S Professionals',
      reply_to:     data.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      reset(); // Clear form fields after successful send

    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage(
        'Die Nachricht konnte nicht gesendet werden. ' +
        'Bitte versuche es erneut oder ruf uns direkt an.'
      );
    }
  };

  // ─── Reset Status ────────────────────────────────────────────────────────────
  // Allows ContactPage to reset back to idle (e.g. "send another message" button)
  const resetStatus = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return {
    // React Hook Form
    register,
    handleSubmit,
    errors,
    isSubmitting,
    // Submit
    onSubmit,
    // State
    status,
    errorMessage,
    resetStatus,
  };
}