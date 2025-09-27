'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/container';
import { SkillCard } from '@/components/ui/skill-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { skills } from '@/data/skills';
import { Brain, Code, Lightbulb } from 'lucide-react';

const categories = [
  { id: 'all', name: '전체', icon: null },
  { id: 'AI & 데이터 분석', name: 'AI & 데이터 분석', icon: Brain },
  { id: '웹 서비스 개발', name: '웹 서비스 개발', icon: Code },
  { id: '제품 기획 및 문제 해결', name: '제품 기획 및 문제 해결', icon: Lightbulb },
];

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getCategoryStats = (category: string) => {
    const categorySkills = category === 'all' ? skills : skills.filter(skill => skill.category === category);
    const avgLevel = Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length);
    return {
      count: categorySkills.length,
      avgLevel
    };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <Container>
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="text-sm">
              Skills & Expertise
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              기술 <span className="text-primary">역량</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              다양한 기술 스택과 실무 경험을 바탕으로 
              복잡한 문제를 해결하는 능력을 보유하고 있습니다.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const stats = getCategoryStats(category.id);
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  {category.icon && <category.icon className="h-4 w-4" />}
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="ml-2">
                    {stats.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <Container>
          <div className="space-y-8">
            {/* Category Stats */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">
                {selectedCategory === 'all' ? '전체 기술' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {getCategoryStats(selectedCategory).count}
                  </div>
                  <div className="text-sm text-muted-foreground">기술 수</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {getCategoryStats(selectedCategory).avgLevel}%
                  </div>
                  <div className="text-sm text-muted-foreground">평균 숙련도</div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Experience Summary */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="text-sm">
              경험 요약
            </Badge>
            <h2 className="text-3xl font-bold">활용 경험과 프로젝트</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              각 기술을 실제 프로젝트에서 어떻게 활용했는지 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(1).map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category.id);
              const allProjects = [...new Set(categorySkills.flatMap(skill => skill.projects))];
              
              return (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center space-x-2">
                    {category.icon && <category.icon className="h-5 w-5 text-primary" />}
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {categorySkills.length}개 기술 • 평균 {Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length)}% 숙련도
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {allProjects.slice(0, 3).map((project, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {project}
                        </Badge>
                      ))}
                      {allProjects.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{allProjects.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}

