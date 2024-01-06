import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateErrorLogDto } from '../../error-logs/dto/create-key-word.dto';
import { ErrorLogsService } from '../../error-logs/error-logs.service';
import { UserYtVideosEntity } from '../../user-yt-videos/model/user-yt-videos.entity';
import { UsersEntity } from '../../users/model/users.entity';
import { CreateKeyWordDto } from '../dto/create-key-word.dto';
import { UpdateKeyWordDto } from '../dto/update-key-word.dto';
import { KeyWordsService } from '../key-words.service';
import { KeyWordsEntity } from '../model/key-words.entity';
import { generateRandomInt } from './helpers';

describe('KeyWordsService', () => {
  let keyWordsService: KeyWordsService;

  const currentLoggedUserId = generateRandomInt(100);

  const dummyDB = [
    { id: 1, content: 'danny', user: { id: currentLoggedUserId } },
    { id: 2, content: 'anna', user: { id: currentLoggedUserId } },
    { id: 3, content: 'michael', user: { id: currentLoggedUserId } },
    { id: 4, content: 'julia', user: { id: currentLoggedUserId } },
    { id: 5, content: 'tom', user: { id: currentLoggedUserId } },
  ];

  const keyWordsRepositoryMock = {
    findBy: jest.fn(() =>
      Promise.resolve(
        dummyDB.map(({ id, content, user }) => {
          if (user.id === currentLoggedUserId) {
            return { id, content };
          }
        }),
      ),
    ),
    findOneBy: jest.fn((where: KeyWordsEntity) => {
      const { user: argUser, content: argContent } = where;
      let result: { id: number; content: string };

      if (argUser) {
        result = dummyDB
          .filter(
            ({ content: userContent, user: { id: userId } }) => argContent === userContent && userId === argUser.id,
          )
          .map(({ id, content }) => ({ id, content }))[0];
      } else {
        result = dummyDB
          .filter(({ content: userContent }) => argContent === userContent)
          .map(({ id, content }) => ({ id, content }))[0];
      }

      return Promise.resolve(result);
    }),
    findOneByOrFail: jest.fn(async (where: KeyWordsEntity) => {
      const { user: argUser, id: argId } = where;

      const result = dummyDB
        .filter(({ id, user: { id: userId } }) => id === argId && userId === argUser.id)
        .map(({ id, content }) => ({ id, content }))[0];

      if (result) {
        return Promise.resolve(result);
      }

      throw new NotFoundException({ reason: 'Keyword not found', cause: 'keyword_not_found' });
    }),
    create: jest.fn((dtoWithUser: KeyWordsEntity) => dtoWithUser),
    save: jest.fn((dtoWithUser: KeyWordsEntity) => Promise.resolve({ id: generateRandomInt(100), ...dtoWithUser })),
    update: jest.fn((argId: number) => {
      const result = dummyDB.filter(({ id }) => id === argId);

      if (result.length) {
        return Promise.resolve({ generatedMaps: [], raw: [], affected: 1 });
      }

      return Promise.resolve({ generatedMaps: [], raw: [], affected: 0 });
    }),
    delete: jest.fn((argId: number) => {
      const result = dummyDB.filter(({ id }) => id === argId);

      if (result.length) {
        return Promise.resolve({ raw: [], affected: 1 });
      }

      return Promise.resolve({ raw: [], affected: 0 });
    }),
  };

  const errorLogsServiceMock = {
    create: jest.fn((errorLogsDto: CreateErrorLogDto) => Promise.resolve(errorLogsDto)),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        KeyWordsService,
        {
          provide: ErrorLogsService,
          useValue: errorLogsServiceMock,
        },
        { provide: getRepositoryToken(KeyWordsEntity), useValue: keyWordsRepositoryMock },
      ],
    }).compile();

    keyWordsService = moduleRef.get<KeyWordsService>(KeyWordsService);
  });

  it('should be defined', () => {
    expect(keyWordsService).toBeDefined();
  });

  it('should return array of keywords', async () => {
    const result = dummyDB.map(({ id, content }) => ({ id, content }));

    expect(await keyWordsService.findAll(currentLoggedUserId)).toEqual(result);
  });

  it('should return keyword', async () => {
    const idForSearch = 1;
    const result = dummyDB
      .filter(({ id, user: { id: userId } }) => id === idForSearch && userId === currentLoggedUserId)
      .map(({ id, content }) => ({ id, content }))[0];

    expect(await keyWordsService.findOne(currentLoggedUserId, idForSearch)).toEqual(result);
  });

  it('should return created keyword', async () => {
    const createDto: CreateKeyWordDto = { content: 'example content' };
    const user: UsersEntity = {
      id: currentLoggedUserId,
      displayName: 'Random Name',
      email: 'random@example.com',
      avatar: 'avatar/asd',
      refreshToken: 'asdasdaj2132131231231',
      userYtVideos: new UserYtVideosEntity(),
      keywords: [],
      errorLogs: [],
    };

    const result: Omit<KeyWordsEntity, 'user'> & { user: { id: number } } = {
      id: expect.any(Number),
      content: expect.any(String),
      user: { id: currentLoggedUserId },
    };

    expect(await keyWordsService.create(createDto, user)).toEqual(result);
  });

  it('should update and return undefined, cause only code was important', async () => {
    const idForUpdate = 1;
    const updateDto: UpdateKeyWordDto = { content: 'example content' };

    expect(await keyWordsService.update(idForUpdate, updateDto)).toBeUndefined();
  });

  it('should delete and return undefined, cause only code was important', async () => {
    const idForDelete = 1;

    expect(await keyWordsService.delete(idForDelete)).toBeUndefined();
  });
});
