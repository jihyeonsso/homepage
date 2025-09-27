import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  className?: string;
  onViewDetails?: (project: Project) => void;
}

export function ProjectCard({ project, className, onViewDetails }: ProjectCardProps) {
  return (
    <Card className={cn('group hover:shadow-lg transition-all duration-300 cursor-pointer', className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {project.role} • {project.period}
            </p>
          </div>
          <Badge 
            variant="secondary" 
            className={cn('text-xs', {
              'bg-blue-100 text-blue-800': project.category === 'AI/ML',
              'bg-green-100 text-green-800': project.category === '웹 개발',
              'bg-purple-100 text-purple-800': project.category === '자동화',
              'bg-orange-100 text-orange-800': project.category === '데이터 분석',
            })}
          >
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails?.(project)}
            className="flex-1 mr-2"
          >
            자세히 보기
          </Button>
          
          <div className="flex space-x-1">
            {project.githubUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

