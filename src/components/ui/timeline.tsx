import React from 'react';
import { cn } from '@/lib/utils';
import { TimelineItem } from '@/types';

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative flex items-start space-x-4">
            {/* Timeline dot */}
            <div className={cn(
              'relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background',
              {
                'border-primary': item.type === 'experience',
                'border-secondary': item.type === 'education',
                'border-accent': item.type === 'achievement',
              }
            )}>
              <div className={cn(
                'h-3 w-3 rounded-full',
                {
                  'bg-primary': item.type === 'experience',
                  'bg-secondary': item.type === 'education',
                  'bg-accent': item.type === 'achievement',
                }
              )} />
            </div>
            
            {/* Content */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

