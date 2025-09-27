'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { useState } from 'react';
import { ProjectModal } from '@/components/ui/project-modal';

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = projects.slice(0, 3);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-20">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">
            Featured Projects
          </Badge>
          <h2 className="text-3xl font-bold">대표 프로젝트</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            다양한 기술을 활용하여 해결한 문제들과 그 과정에서 얻은 경험을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/projects">
              모든 프로젝트 보기
            </Link>
          </Button>
        </div>
      </Container>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

