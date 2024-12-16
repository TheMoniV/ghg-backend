import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RequirementsModule } from './requirements/requirement.module'
import { DocumentModule } from './documents/document.module'

@Module({
  imports: [RequirementsModule, DocumentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
