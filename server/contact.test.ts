import { describe, it, expect, beforeAll } from 'vitest';

describe('Contact Form reCAPTCHA Configuration', () => {
  beforeAll(() => {
    // 确保环境变量已加载
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      throw new Error('RECAPTCHA_SECRET_KEY is not configured');
    }
  });

  it('should have RECAPTCHA_SECRET_KEY configured', () => {
    expect(process.env.RECAPTCHA_SECRET_KEY).toBeDefined();
    expect(process.env.RECAPTCHA_SECRET_KEY).toMatch(/^.{20,}$/); // 基本的长度检查
  });

  it('should have contact router configured', async () => {
    // 动态导入 contact router 以验证其配置
    const { contactRouter } = await import('./routers/contact');
    expect(contactRouter).toBeDefined();
    expect(contactRouter._def).toBeDefined();
  });
});
