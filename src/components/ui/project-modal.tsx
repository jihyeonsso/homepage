'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/types';
import { ExternalLink, Github, Calendar, User, Target, Trophy, Lightbulb } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
              </div>
            </div>
            <Badge 
              variant="secondary" 
              className={`
                ${project.category === 'AI/ML' ? 'bg-blue-100 text-blue-800' : ''}
                ${project.category === '웹 개발' ? 'bg-green-100 text-green-800' : ''}
                ${project.category === '자동화' ? 'bg-purple-100 text-purple-800' : ''}
                ${project.category === '데이터 분석' ? 'bg-orange-100 text-orange-800' : ''}
              `}
            >
              {project.category}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Project Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>프로젝트 개요</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">사용 기술</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-accent" />
              <span>주요 성과</span>
            </h3>
            <ul className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">도전 과제</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-secondary" />
              <span>해결 방법</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {project.githubUrl && (
              <Button variant="outline" asChild className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub 코드 보기
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild className="flex-1">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  데모 체험하기
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

