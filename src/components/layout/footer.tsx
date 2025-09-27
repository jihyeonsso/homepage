import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">J</span>
              </div>
              <span className="font-bold text-xl">JIHYUN</span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI와 데이터를 통해 문제를 해결하는 풀스택 사고력을 가진 개발자
            </p>
            <Badge variant="secondary" className="w-fit">
              Available for Interview
            </Badge>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">빠른 링크</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">연락처</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>wlgus7368@naver.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/jihyun" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/jihyun" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://twitter.com/jihyun" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 JIHYUN. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

