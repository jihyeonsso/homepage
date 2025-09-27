import { Container } from '@/components/layout/container';
import { Timeline } from '@/components/ui/timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { timelineData } from '@/data/timeline';
import { GraduationCap, Briefcase, Award, Target, Users, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <Container>
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="text-sm">
              About Me
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              안녕하세요, <span className="text-primary">지현</span>입니다
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              기술을 통해 세상의 문제를 해결하는 사람
            </p>
          </div>
        </Container>
      </section>

      {/* Personal Info Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">개인 소개</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  컴퓨터공학을 전공하고 AI와 데이터 분석 분야에서 3년간의 경험을 쌓아온 개발자입니다. 
                  단순히 기술을 사용하는 것을 넘어서, 기술을 통해 비즈니스 문제를 해결하고 
                  사용자에게 가치를 제공하는 것에 집중합니다.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">전공</h3>
                  <p className="text-muted-foreground">컴퓨터공학</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">경력</h3>
                  <p className="text-muted-foreground">3년</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">전환 계기</h3>
                  <p className="text-muted-foreground">AI 기술의 무한한 가능성</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">현재 위치</h3>
                  <p className="text-muted-foreground">AI 엔지니어</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span>핵심 가치</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">문제 해결 중심</h4>
                    <p className="text-sm text-muted-foreground">
                      기술은 수단이며, 진정한 목표는 문제를 해결하는 것입니다.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">지속적 학습</h4>
                    <p className="text-sm text-muted-foreground">
                      빠르게 변화하는 기술 트렌드를 따라가며 끊임없이 성장합니다.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">사용자 중심</h4>
                    <p className="text-sm text-muted-foreground">
                      사용자의 관점에서 생각하고 최고의 경험을 제공합니다.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm">
              성장 스토리
            </Badge>
            <h2 className="text-3xl font-bold">과거 → 현재 → 미래</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              지금까지의 여정과 앞으로의 계획을 소개합니다.
            </p>
          </div>
          
          <Timeline items={timelineData} />
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm">
              철학 & 가치관
            </Badge>
            <h2 className="text-3xl font-bold">일하는 방식과 문제 해결 철학</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>협업 스타일</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  팀원들과의 원활한 소통을 중시하며, 
                  서로의 아이디어를 존중하고 함께 성장하는 것을 추구합니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>문제 해결 철학</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  문제의 근본 원인을 파악하고, 
                  창의적이고 효율적인 솔루션을 찾아 실행하는 것을 중요하게 생각합니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>미래 비전</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI 기술을 통해 더 많은 사람들에게 도움이 되는 
                  서비스를 만들고 싶습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}

