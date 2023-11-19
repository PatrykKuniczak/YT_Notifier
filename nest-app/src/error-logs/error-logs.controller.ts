import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { SessionsGuard } from '../auth/sessions/sessions.guard';
import { ErrorLogsResponse } from '../swagger/response-examples/error-logs.response';
import { ErrorResponse } from '../swagger/response-examples/error.response';
import { ReqUserId } from '../users/decorators/user.decorator';
import { ErrorLogsService } from './error-logs.service';

@Controller('error-logs')
@ApiTags('error-logs')
export class ErrorLogsController {
  constructor(private readonly errorLogsService: ErrorLogsService) {}

  @ApiOkResponse({ type: ErrorLogsResponse, isArray: true })
  @ApiUnauthorizedResponse({
    type: ErrorResponse,
    description: 'cause: unauthorized',
  })
  @Get()
  @UseGuards(SessionsGuard)
  async findAll(@ReqUserId() userId: number) {
    return this.errorLogsService.findAll(userId);
  }
}
