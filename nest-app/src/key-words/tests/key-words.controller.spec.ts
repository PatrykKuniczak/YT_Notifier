import { Test } from '@nestjs/testing';
import { OAUTH2_GOOGLE_CLIENT } from '../../auth/oauth2.module';
import { SessionsGuard } from '../../auth/sessions/sessions.guard';
import { SessionsService } from '../../auth/sessions/sessions.service';
import { UsersEntity } from '../../users/model/users.entity';
import { UsersService } from '../../users/users.service';
import { CreateKeyWordDto } from '../dto/create-key-word.dto';
import { UpdateKeyWordDto } from '../dto/update-key-word.dto';
import { KeyWordsController } from '../key-words.controller';
import { KeyWordsService } from '../key-words.service';
import { KeyWordsEntity } from '../model/key-words.entity';

const generateRandomInt = (max: number) => Math.floor(Math.random() * max);

describe('KeyWordsController', () => {
  let keyWordsController: KeyWordsController;

  const currentLoggedUserId = generateRandomInt(100);

  const keyWordsServiceMock = {
    findAll: jest.fn((userId: number) => {
      if (userId === currentLoggedUserId) {
        return [{ id: generateRandomInt(100), content: 'Nowe słowo' }];
      }

      return [];
    }),

    findOne: jest.fn((currentUserId: number, id: number) => {
      if (currentUserId === currentLoggedUserId) {
        return {
          id,
          content: 'Zaktualizowane słowo',
        };
      } else {
        return {};
      }
    }),

    create: jest.fn(({ content }: CreateKeyWordDto, user: UsersEntity) => {
      if (user.id === currentLoggedUserId) {
        return { id: generateRandomInt(100), content, userId: user.id };
      }
    }),

    update: jest.fn((currentUserId: number) => {
      if (currentUserId === currentLoggedUserId) {
        return undefined;
      }
    }),

    delete: jest.fn((currentUserId: number) => {
      if (currentUserId === currentLoggedUserId) {
        return undefined;
      }
    }),
  };

  const usersServiceMock = {
    findOneById: jest.fn(userId => {
      return {
        id: userId,
        displayName: 'Jurek',
        email: 'dupa@gmail.com',
        avatar: 'asda/dadsadaas',
        userYtVideos: {},
        keywords: {},
        errorLogs: {},
      };
    }),
  };

  const sessionServiceMock = {};
  const oAuth2ClientProviderMock = {};

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [KeyWordsController],
      providers: [
        KeyWordsService,
        { provide: UsersService, useValue: usersServiceMock },
        {
          provide: SessionsGuard,
          useValue: jest.fn().mockImplementation(() => true),
        },
        {
          provide: SessionsService,
          useValue: sessionServiceMock,
        },
        {
          provide: OAUTH2_GOOGLE_CLIENT,
          useValue: oAuth2ClientProviderMock,
        },
      ],
    })
      .overrideProvider(KeyWordsService)
      .useValue(keyWordsServiceMock)
      .compile();

    keyWordsController = moduleRef.get<KeyWordsController>(KeyWordsController);
  });

  it('should be defined', () => {
    expect(keyWordsController).toBeDefined();
  });

  it('should return array of keywords', async () => {
    const result: Omit<KeyWordsEntity, 'user'>[] = [
      {
        id: expect.any(Number),
        content: expect.any(String),
      },
    ];

    expect(await keyWordsController.findAll(currentLoggedUserId)).toEqual(result);
  });

  it('should return keyword', async () => {
    const result: Omit<KeyWordsEntity, 'user'> = {
      id: expect.any(Number),
      content: expect.any(String),
    };

    expect(await keyWordsController.findOne(currentLoggedUserId, 20)).toEqual(result);
  });

  it('should return created keyword', async () => {
    const createDto: CreateKeyWordDto = { content: 'example content' };

    const result: Omit<KeyWordsEntity, 'user'> & { userId: number } = {
      id: expect.any(Number),
      content: expect.any(String),
      userId: currentLoggedUserId,
    };

    expect(await keyWordsController.create(currentLoggedUserId, createDto)).toEqual(result);
  });

  it('should update and return undefined, cause only code was important', async () => {
    const updateDto: UpdateKeyWordDto = { content: 'example content' };

    expect(await keyWordsController.update(currentLoggedUserId, generateRandomInt(20), updateDto)).toBeUndefined();
  });

  it('should delete and return undefined, cause only code was important', async () => {
    expect(await keyWordsController.delete(currentLoggedUserId, generateRandomInt(20))).toBeUndefined();
  });
});
