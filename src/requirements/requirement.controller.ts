import {Body, Controller, Get, Patch} from '@nestjs/common'
import { RequirementService } from './requirement.service'
import {RequirementBodyDto} from "./dto/requirement.body.dto";

@Controller('requirements')
export class RequirementsController {
  constructor(private readonly requirementService: RequirementService) {}

  @Get()
  async getRequirements(): Promise<RequirementResponseDto[]> {
    const result = await this.requirementService.requirements()
    return result.map((r) => {
      return {
        id: r.id,
        name: r.name,
        description: r.description,
        status: r.status,
        requiredDocuments: r.documentsRequired.map((dr) => {
          return {
            id: dr.document.id,
            name: dr.document.name,
            documentType: dr.document.documentType,
          }
        }),
        documentsProvided: r.documentsProvided.map((dp) => {
          return {
            name: dp.name,
            status: dp.status,
            version: dp.version,
            expirationDate: dp.expirationDate,
            documentType: dp.document.documentType,
          }
        }),
      }
    })
  }

  @Patch()
  async updateRequirementStatus(@Body() body: RequirementBodyDto) {
    await this.requirementService.updateRequirementStatus(body.requirementId, body.status)
  }
}
