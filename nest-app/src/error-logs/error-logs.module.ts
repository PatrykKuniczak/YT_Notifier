import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorLogsController } from './error-logs.controller';
import { ErrorLogsService } from './error-logs.service';
import { ErrorLogsEntity } from './model/error-logs.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([ErrorLogsEntity])],
  controllers: [ErrorLogsController],
  providers: [ErrorLogsService],
  exports: [ErrorLogsService],
})
export class ErrorLogsModule {}
