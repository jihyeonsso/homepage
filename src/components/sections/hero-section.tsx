'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';
import { ArrowDown, Github, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <Container className="relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              👋 안녕하세요, 지현입니다
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">AI & 데이터</span>
              <br />
              <span className="text-primary">전문가</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI와 데이터를 통해 문제를 해결하는
            <br />
            <span className="text-primary font-semibold">풀스택 사고력</span>을 가진 개발자
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm px-4 py-2">
              AI Engineer
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              Data Specialist
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              Full-stack Developer
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/projects">
                프로젝트 보기
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                연락하기
              </Link>
            </Button>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              ✅ Open to Work
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
              📅 Available for Interview
            </Badge>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <div className="flex flex-col items-center space-y-2 text-muted-foreground">
              <span className="text-sm">더 알아보기</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

