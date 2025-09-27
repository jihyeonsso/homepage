'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/data/skills';
import { Brain, Code, Lightbulb } from 'lucide-react';

export function SkillsOverview() {
  const categories = [
    { 
      id: 'AI & 데이터 분석', 
      name: 'AI & 데이터 분석', 
      icon: Brain, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      skills: skills.filter(s => s.category === 'AI & 데이터 분석')
    },
    { 
      id: '웹 서비스 개발', 
      name: '웹 서비스 개발', 
      icon: Code, 
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      skills: skills.filter(s => s.category === '웹 서비스 개발')
    },
    { 
      id: '제품 기획 및 문제 해결', 
      name: '제품 기획 및 문제 해결', 
      icon: Lightbulb, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      skills: skills.filter(s => s.category === '제품 기획 및 문제 해결')
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">
            Skills Overview
          </Badge>
          <h2 className="text-3xl font-bold">기술 역량</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3가지 핵심 영역에서의 기술 스택과 숙련도를 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => {
            const avgLevel = Math.round(
              category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
            );
            
            return (
              <Card key={category.id} className="text-center">
                <CardHeader>
                  <div className={`inline-flex p-3 rounded-full ${category.bgColor} mx-auto mb-4`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{category.skills.length}</div>
                    <div className="text-sm text-muted-foreground">기술 수</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{avgLevel}%</div>
                    <div className="text-sm text-muted-foreground">평균 숙련도</div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1">
                    {category.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill.name}
                      </Badge>
                    ))}
                    {category.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/skills">
              상세 기술 스택 보기
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

