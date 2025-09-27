import { Container } from '@/components/layout/container';
import { ContactForm } from '@/components/ui/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Phone, 
  Calendar,
  MessageCircle,
  Briefcase
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <Container>
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="text-sm">
              Contact & Collaboration
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              함께 <span className="text-primary">일해요</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기해보세요. 
              언제든지 연락주시면 빠르게 답변드리겠습니다.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>직접 연락</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">이메일</p>
                      <p className="text-sm text-muted-foreground">wlgus7368@naver.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">위치</p>
                      <p className="text-sm text-muted-foreground">서울, 대한민국</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">응답 시간</p>
                      <p className="text-sm text-muted-foreground">24시간 이내</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>소셜 미디어</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://github.com/jihyun" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://linkedin.com/in/jihyun" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://twitter.com/jihyun" target="_blank" rel="noopener noreferrer">
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>빠른 액션</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="mailto:wlgus7368@naver.com?subject=면접 제안">
                      <Mail className="mr-2 h-4 w-4" />
                      면접 제안하기
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/projects">
                      프로젝트 보기
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Availability Status */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                현재 상태
              </Badge>
              <h2 className="text-3xl font-bold">협업 가능 여부</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">프리랜서</h3>
                  <p className="text-muted-foreground text-sm">
                    단기 프로젝트나 컨설팅 작업 가능
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">정규직</h3>
                  <p className="text-muted-foreground text-sm">
                    AI/데이터 분야 정규직 채용 기회 검토 중
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">협업</h3>
                  <p className="text-muted-foreground text-sm">
                    오픈소스 프로젝트나 기술 교류 관심
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">언제든지 연락주세요!</h3>
              <p className="text-muted-foreground">
                새로운 기회나 흥미로운 프로젝트에 대해 이야기하고 싶습니다. 
                어떤 형태의 협업이든 환영합니다.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

