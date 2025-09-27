import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export function SkillCard({ skill, className }: SkillCardProps) {
  return (
    <Card className={cn('group hover:shadow-lg transition-all duration-300', className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{skill.name}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {skill.experience}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">숙련도</span>
            <span className="font-medium">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {skill.experience} 경험
          </p>
          <div className="flex flex-wrap gap-1">
            {skill.projects.slice(0, 2).map((project, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {project}
              </Badge>
            ))}
            {skill.projects.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{skill.projects.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

