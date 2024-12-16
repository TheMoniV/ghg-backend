import { RequirementStatus } from '@prisma/client'


export class RequirementBodyDto {
  requirementId: string
  status: RequirementStatus
}
