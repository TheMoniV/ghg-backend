import { Module } from '@nestjs/common'
import { RequirementsController } from './requirement.controller'
import { RequirementService } from './requirement.service'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [RequirementsController],
  providers: [RequirementService],
})
export class RequirementsModule {}
