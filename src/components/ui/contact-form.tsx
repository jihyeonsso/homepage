'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContactForm as ContactFormType } from '@/types';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, '이름은 최소 2글자 이상이어야 합니다.'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요.'),
  company: z.string().optional(),
  subject: z.string().min(5, '제목은 최소 5글자 이상이어야 합니다.'),
  message: z.string().min(10, '메시지는 최소 10글자 이상이어야 합니다.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 실제 구현에서는 EmailJS나 다른 이메일 서비스를 사용
      await new Promise(resolve => setTimeout(resolve, 2000)); // 시뮬레이션
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-primary" />
          <span>연락하기</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                이름 *
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="홍길동"
              />
              {errors.name && (
                <p className="text-sm text-destructive flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                이메일 *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="example@email.com"
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              회사명 (선택사항)
            </label>
            <input
              id="company"
              {...register('company')}
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="회사명을 입력해주세요"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              제목 *
            </label>
            <input
              id="subject"
              {...register('subject')}
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="문의 제목을 입력해주세요"
            />
            {errors.subject && (
              <p className="text-sm text-destructive flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.subject.message}</span>
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              메시지 *
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={6}
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="자세한 내용을 입력해주세요..."
            />
            {errors.message && (
              <p className="text-sm text-destructive flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          {/* Submit Status */}
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
              <CheckCircle className="h-5 w-5" />
              <span>메시지가 성공적으로 전송되었습니다!</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
              <AlertCircle className="h-5 w-5" />
              <span>메시지 전송에 실패했습니다. 다시 시도해주세요.</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                전송 중...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                메시지 보내기
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

