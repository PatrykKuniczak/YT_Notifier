import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ReqUserAccessToken = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  return request.session.passport.user.accessToken;
});
