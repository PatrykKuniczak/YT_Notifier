import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOAuth2,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SessionsGuard } from '../auth/sessions/sessions.guard';
import { KeywordsResponse } from '../swagger/response-examples/keywords.response';
import { ReqUserId } from '../users/decorators/user.decorator';
import { UpdateUserYtVideosDto } from './dto/update-user-yt-videos.dto';
import { UserYtVideosService } from './user-yt-videos.service';

@ApiOAuth2([])
@ApiTags('user-yt-videos')
@Controller('user-yt-videos')
export class UserYtVideosController {
  constructor(private readonly ytVideosService: UserYtVideosService) {}

  @ApiOkResponse({ type: KeywordsResponse, isArray: true })
  @ApiForbiddenResponse({ description: 'You reach the requests limit for youtube' })
  @ApiInternalServerErrorResponse({ description: 'Error on updating fetch date of user: {error message}' })
  @ApiUnauthorizedResponse()
  @Get()
  @UseGuards(SessionsGuard)
  async findAll(@ReqUserId() userId: number) {
    return this.ytVideosService.findAll(userId);
  }

  @ApiOkResponse()
  @ApiForbiddenResponse({ description: 'You reach the requests limit for youtube' })
  @ApiConflictResponse({ description: 'Video already exists in playlist' })
  @ApiNotFoundResponse({ description: 'Video not found' })
  @ApiBadRequestResponse({ description: 'title/description must be a string' })
  @ApiUnauthorizedResponse()
  @Patch('update-playlist')
  @UseGuards(SessionsGuard)
  async updatePlaylist(@ReqUserId() userId: number, @Body() updateUserYtVideosDto: UpdateUserYtVideosDto) {
    return this.ytVideosService.updatePlaylist(userId, updateUserYtVideosDto);
  }
}
