import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface PhoneButtonProps {
  variant?: 'primary' | 'secondary' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  animate?: boolean;
  className?: string;
}

export const PhoneButton: React.FC<PhoneButtonProps> = ({
  variant = 'phone',
  size = 'md',
  fullWidth = false,
  animate = false,
  className = '',
}) => {
  const phone = process.env.NEXT_PUBLIC_PHONE || '0493447205';
  const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || '04 93 44 72 05';

  return (
    <Button
      href={`tel:${phone}`}
      variant={variant}
      size={size}
      icon={Phone}
      iconPosition="left"
      fullWidth={fullWidth}
      animate={animate}
      className={className}
    >
      {phoneDisplay}
    </Button>
  );
};
