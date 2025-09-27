'use client';

import React from 'react';
import { Container } from '@/components/layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Database, Code, Lightbulb } from 'lucide-react';

const expertise = [
  {
    icon: Brain,
    title: 'AI & 머신러닝',
    description: '자연어 처리, 컴퓨터 비전, 추천 시스템 등 다양한 AI 기술을 활용한 솔루션 개발',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Database,
    title: '데이터 분석',
    description: '대용량 데이터 처리, 시각화, 인사이트 도출을 통한 데이터 기반 의사결정 지원',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Code,
    title: '웹 개발',
    description: 'Next.js, React, TypeScript를 활용한 모던하고 반응형 웹 애플리케이션 개발',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Lightbulb,
    title: '문제 해결',
    description: '복잡한 비즈니스 문제를 기술적 솔루션으로 해결하는 창의적 사고력',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
];

export function IntroSection() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              핵심 역량
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              기술을 통해 세상의 문제를 해결하는 사람
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              다양한 기술 스택과 실무 경험을 바탕으로 
              복잡한 문제를 창의적이고 효율적인 솔루션으로 해결합니다.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`inline-flex p-3 rounded-full ${item.bgColor}`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-center">
                왜 저를 선택해야 할까요?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">년간의 실무 경험</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">완료된 프로젝트</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">고객 만족도</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

