import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOAuth2,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SessionGuard } from '../auth/session/session.guard';
import { ReqUserId } from '../user/decorators/user.decorator';
import { YtService } from './yt.service';

@ApiOAuth2([])
@ApiTags('yt')
@Controller('yt')
export class YtController {
  constructor(private readonly ytService: YtService) {}

  @ApiOkResponse()
  @ApiForbiddenResponse({ description: 'You reach the requests limit for youtube' })
  @ApiInternalServerErrorResponse({ description: 'Error on updating fetch date of user: {error message}' })
  @ApiUnauthorizedResponse()
  @Get()
  @UseGuards(SessionGuard)
  async findAll(@ReqUserId() userId: number) {
    return this.ytService.findAll(userId);
  }
}
