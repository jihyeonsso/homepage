'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/container';
import { ProjectCard } from '@/components/ui/project-card';
import { ProjectModal } from '@/components/ui/project-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { Brain, Code, Zap, BarChart3 } from 'lucide-react';

const categories = [
  { id: 'all', name: '전체', icon: null, count: projects.length },
  { id: 'AI/ML', name: 'AI/ML', icon: Brain, count: projects.filter(p => p.category === 'AI/ML').length },
  { id: '웹 개발', name: '웹 개발', icon: Code, count: projects.filter(p => p.category === '웹 개발').length },
  { id: '자동화', name: '자동화', icon: Zap, count: projects.filter(p => p.category === '자동화').length },
  { id: '데이터 분석', name: '데이터 분석', icon: BarChart3, count: projects.filter(p => p.category === '데이터 분석').length },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <Container>
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="text-sm">
              Projects & Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              프로젝트 <span className="text-primary">포트폴리오</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              다양한 기술을 활용하여 해결한 문제들과 
              그 과정에서 얻은 경험을 소개합니다.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                {category.icon && <category.icon className="h-4 w-4" />}
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <Container>
          <div className="space-y-8">
            {/* Category Stats */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">
                {selectedCategory === 'all' ? '전체 프로젝트' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                총 {filteredProjects.length}개의 프로젝트
              </p>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">해당 카테고리의 프로젝트가 없습니다.</p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="text-sm">
              프로젝트 통계
            </Badge>
            <h2 className="text-3xl font-bold">프로젝트 성과 요약</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              지금까지 진행한 프로젝트들의 주요 성과를 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">{projects.length}</div>
              <div className="text-sm text-muted-foreground">완료된 프로젝트</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">
                {[...new Set(projects.flatMap(p => p.technologies))].length}
              </div>
              <div className="text-sm text-muted-foreground">사용한 기술</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">
                {projects.reduce((sum, p) => sum + p.achievements.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">달성한 성과</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">년간 경험</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

