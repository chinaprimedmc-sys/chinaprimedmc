import { describe, it, expect, beforeEach } from 'vitest';
import { getEmailService, generateContactEmailHTML } from './email';

describe('Email Service', () => {
  describe('generateContactEmailHTML', () => {
    it('should generate valid HTML email content', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        country: 'United States',
        tripType: 'Private Tailor-Made Journey',
        duration: '10-14 days',
        message: 'I am interested in a cultural immersion journey to China.',
      };

      const html = generateContactEmailHTML(data);

      expect(html).toContain('John Doe');
      expect(html).toContain('john@example.com');
      expect(html).toContain('+1234567890');
      expect(html).toContain('United States');
      expect(html).toContain('Private Tailor-Made Journey');
      expect(html).toContain('10-14 days');
      expect(html).toContain('I am interested in a cultural immersion journey to China.');
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('</html>');
    });

    it('should handle optional fields gracefully', () => {
      const data = {
        name: 'Jane Smith',
        email: 'jane@example.com',
        message: 'I want to explore China.',
      };

      const html = generateContactEmailHTML(data);

      expect(html).toContain('Jane Smith');
      expect(html).toContain('jane@example.com');
      expect(html).toContain('I want to explore China.');
      expect(html).not.toContain('undefined');
    });

    it('should escape HTML special characters', () => {
      const data = {
        name: 'John <Doe>',
        email: 'john@example.com',
        message: 'Test & "quotes" and \'apostrophes\'',
      };

      const html = generateContactEmailHTML(data);

      expect(html).toContain('John &lt;Doe&gt;');
      expect(html).toContain('Test &amp;');
      expect(html).toContain('&quot;quotes&quot;');
      expect(html).toContain('&#039;apostrophes&#039;');
    });

    it('should preserve line breaks in message', () => {
      const data = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'Line 1\nLine 2\nLine 3',
      };

      const html = generateContactEmailHTML(data);

      expect(html).toContain('Line 1<br>Line 2<br>Line 3');
    });
  });

  describe('getEmailService', () => {
    it('should return email service instance', () => {
      const service = getEmailService();
      expect(service).toBeDefined();
      expect(service.send).toBeDefined();
    });

    it('should have send method that returns a promise', async () => {
      const service = getEmailService();
      const result = service.send({
        to: 'test@example.com',
        subject: 'Test',
        html: '<p>Test</p>',
      });

      expect(result).toBeInstanceOf(Promise);
      // 等待 promise 完成
      await result;
    });
  });
});
