class DocumentResponseDto {
  id: string
  name: string
  documentType: string
}

class DocumentProvidedResponseDto {
  name: string
  status: string
  version: string
  expirationDate: Date
  documentType: string
}

class RequirementResponseDto {
  id: string
  name: string
  description: string
  status: string
  requiredDocuments: DocumentResponseDto[]
  documentsProvided: DocumentProvidedResponseDto[]
}
