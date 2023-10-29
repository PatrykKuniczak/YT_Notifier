import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOAuth2,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SessionsGuard } from '../auth/sessions/sessions.guard';
import { ReqUserId } from '../users/decorators/user.decorator';
import { UsersService } from '../users/users.service';
import { CreateKeyWordDto } from './dto/create-key-word.dto';
import { UpdateKeyWordDto } from './dto/update-key-word.dto';
import { KeyWordsService } from './key-words.service';

@ApiOAuth2([])
@ApiTags('key-words')
@Controller('key-words')
export class KeyWordsController {
  constructor(
    private readonly keyWordsService: KeyWordsService,
    private readonly userService: UsersService,
  ) {}

  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @Get()
  @UseGuards(SessionsGuard)
  async findAll(@ReqUserId() userId: number) {
    return this.keyWordsService.findAll(userId);
  }

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiUnauthorizedResponse()
  @ApiBadRequestResponse({ description: 'Validation failed (numeric string is expected)' })
  @Get(':id')
  @UseGuards(SessionsGuard)
  async findOne(@ReqUserId() userId: number, @Param('id', ParseIntPipe) id: number) {
    return this.keyWordsService.findOne(userId, id);
  }

  @ApiCreatedResponse({ description: 'Return {id: number}' })
  @ApiConflictResponse({ description: 'This keyword already exists' })
  @ApiInternalServerErrorResponse({ description: 'Error on creating user: ${error message}' })
  @ApiBadRequestResponse({ description: 'Validation failed (numeric string is expected)' })
  @ApiUnauthorizedResponse()
  @Post()
  @UseGuards(SessionsGuard)
  async create(@ReqUserId() userId: number, @Body() createKeyWordDto: CreateKeyWordDto) {
    const user = await this.userService.findOneById(userId);

    return this.keyWordsService.create(createKeyWordDto, user);
  }

  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @ApiNotFoundResponse()
  @ApiConflictResponse({ description: 'This keyword already exists' })
  @ApiInternalServerErrorResponse({ description: 'Error on updating user: ${error message}' })
  @ApiBadRequestResponse({ description: 'Validation failed (numeric string is expected)' })
  @Patch(':id')
  @UseGuards(SessionsGuard)
  async update(
    @ReqUserId() userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKeyWordDto: UpdateKeyWordDto,
  ) {
    await this.keyWordsService.findOne(userId, id);

    return this.keyWordsService.update(id, updateKeyWordDto);
  }

  @ApiOkResponse()
  @ApiBadRequestResponse({ description: 'Validation failed (numeric string is expected)' })
  @ApiNotFoundResponse()
  @ApiUnauthorizedResponse()
  @Delete(':id')
  @UseGuards(SessionsGuard)
  async delete(@ReqUserId() userId: number, @Param('id', ParseIntPipe) id: number) {
    await this.keyWordsService.findOne(userId, id);

    return this.keyWordsService.delete(id);
  }
}
