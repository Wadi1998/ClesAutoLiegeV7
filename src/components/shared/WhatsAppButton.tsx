import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface WhatsAppButtonProps {
  variant?: 'whatsapp' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  message?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  variant = 'whatsapp',
  size = 'md',
  fullWidth = false,
  message,
  className = '',
}) => {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '32493447205';
  const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Bonjour, j'ai besoin d'une intervention pour...";
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodedMessage}`;

  return (
    <Button
      href={whatsappUrl}
      variant={variant}
      size={size}
      icon={MessageCircle}
      iconPosition="left"
      fullWidth={fullWidth}
      className={className}
    >
      WhatsApp
    </Button>
  );
};
