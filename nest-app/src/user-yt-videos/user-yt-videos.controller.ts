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
import { ErrorResponse } from '../swagger/response-examples/error.response';
import { UserYtVideosResponse } from '../swagger/response-examples/user-yt-videos.response';
import { ReqUserId } from '../users/decorators/user.decorator';
import { UpdateUserYtVideosDto } from './dto/update-user-yt-videos.dto';
import { UserYtVideosService } from './user-yt-videos.service';

@ApiOAuth2([])
@ApiTags('user-yt-videos')
@Controller('user-yt-videos')
export class UserYtVideosController {
  constructor(private readonly ytVideosService: UserYtVideosService) {}

  @ApiOkResponse({ type: UserYtVideosResponse, isArray: true })
  @ApiForbiddenResponse({ description: 'You reach the requests limit for youtube, cause: quota_limit' })
  @ApiInternalServerErrorResponse({ description: 'Error on updating fetch date of user: {error message}' })
  @ApiUnauthorizedResponse({
    type: ErrorResponse,
    description: 'cause: unauthorized',
  })
  @Get()
  @UseGuards(SessionsGuard)
  async findAll(@ReqUserId() userId: number) {
    return this.ytVideosService.findAll(userId);
  }

  @ApiOkResponse()
  @ApiForbiddenResponse({ description: 'You reach the requests limit for youtube, cause: quota_limit' })
  @ApiConflictResponse({ description: 'Video already exists in playlist, cause: duplicated_video_for_playlist' })
  @ApiNotFoundResponse({ description: 'Video not found, cause: video_for_playlist_not_found' })
  @ApiBadRequestResponse({ description: 'title/description must be a string' })
  @ApiUnauthorizedResponse({
    type: ErrorResponse,
    description: 'cause: unauthorized',
  })
  @Patch('update-playlist')
  @UseGuards(SessionsGuard)
  async updatePlaylist(@ReqUserId() userId: number, @Body() updateUserYtVideosDto: UpdateUserYtVideosDto) {
    return this.ytVideosService.updatePlaylist(userId, updateUserYtVideosDto);
  }
}
