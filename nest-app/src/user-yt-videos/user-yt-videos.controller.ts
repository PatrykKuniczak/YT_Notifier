import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOAuth2,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SessionsGuard } from '../auth/sessions/sessions.guard';
import { ReqUserId } from '../users/decorators/user.decorator';
import { UserYtVideosService } from './user-yt-videos.service';

@ApiOAuth2([])
@ApiTags('user-yt-videos')
@Controller('user-yt-videos')
export class UserYtVideosController {
  constructor(private readonly ytVideosService: UserYtVideosService) {}

  @ApiOkResponse()
  @ApiForbiddenResponse({ description: 'You reach the requests limit for youtube' })
  @ApiInternalServerErrorResponse({ description: 'Error on updating fetch date of user: {error message}' })
  @ApiUnauthorizedResponse()
  @Get()
  @UseGuards(SessionsGuard)
  async findAll(@ReqUserId() userId: number) {
    return this.ytVideosService.findAll(userId);
  }

  // @ApiOkResponse()
  // @ApiForbiddenResponse({ description: 'You reach the requests limit for youtube' })
  // @ApiConflictResponse({ description: 'Video already exists in playlist' })
  // @ApiUnauthorizedResponse()
  // @Patch('update-playlist')
  // @UseGuards(SessionsGuard)
  // async updateWatchLater(@ReqUserId() userId: number, @Body('videoId') videoId: string = 'qrOeGCJdZe4') {
  // return this.ytVideosService.update(userId, videoId);
  // }
}
