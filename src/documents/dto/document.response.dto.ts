class DocumentFileResponseDto {
  id: string
  name: string
  version: string
  status: string
  createdAt: Date
  expirationDate?: Date
}

export class DocumentResponseDto {
  id: string
  name: string
  description: string
  documentType: string
  files: DocumentFileResponseDto[]
}

class RequirementResponseDto {
  id: string
  name: string
}

export class DocumentWithRequirementsResponseDto {
  id: string
  name: string
  documentType: string
  requirements: RequirementResponseDto[]
}
