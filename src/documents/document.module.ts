import { Module } from '@nestjs/common'
import { DocumentService } from './document.service'
import { PrismaModule } from '../prisma/prisma.module'
import { DocumentController } from './document.controller'

@Module({
  imports: [PrismaModule],
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentModule {}
