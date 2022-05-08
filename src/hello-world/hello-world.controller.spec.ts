import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldController } from './hello-world.controller';

describe('HelloWorldController', () => {
  let controller: HelloWorldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
    }).compile();

    controller = module.get<HelloWorldController>(HelloWorldController);
  });

  it('Controller init', () => {
    expect(controller).toBeDefined();
  });

  it('Response Hello World', async () => {
    expect(await controller.helloWorld()).toBe('Hello World!!');
  });

  it('Secret Key Response', async () => {
    expect(await controller.getSecret()).toBe('very-secure-token');
  });
});
