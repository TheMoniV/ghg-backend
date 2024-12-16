import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common'
import { DocumentService } from './document.service'
import {DocumentResponseDto, DocumentWithRequirementsResponseDto} from './dto/document.response.dto'
import {DocumentFileBodyDto, PatchDocumentFileBodyDto} from "./dto/document.body.dto";

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Get()
  async getDocuments(): Promise<DocumentResponseDto[]> {
    const result = await this.documentService.documents()
    return result.map((doc) => {
      return {
        id: doc.id,
        name: doc.name,
        description: doc.description,
        documentType: doc.documentType,
        files: doc.files.map((file) => {
          return {
            id: file.id,
            name: file.name,
            status: file.status,
            version: file.version,
            createdAt: file.createdAt,
            expirationDate: file.expirationDate,
          }
        }),
      }
    })
  }

  @Get('with-requirement')
  async getDocumentsAndTheirRequirements(): Promise<DocumentWithRequirementsResponseDto[]> {
    const result = await this.documentService.getDocumentsAndTheirRequirements()
    return result.map((doc) => {
      return {
        id: doc.id,
        name: doc.name,
        documentType: doc.documentType,
        requirements: doc.neededForRequirements.map(nfr => {
          return {
            id: nfr.requirement.id,
            name: nfr.requirement.name,
          }
        }),
      }
    })
  }

  @Post()
  async createDocumentFile(@Body() file: DocumentFileBodyDto) {
    return this.documentService.createDocumentFile(file)
  }

  @Patch(":id")
  async changeDocumentFileStatus(@Body() file: PatchDocumentFileBodyDto, @Param('id') id: string) {
    return this.documentService.updateDocumentFileStatus(id, file.status)
  }

  @Delete(":id")
  async deleteDocumentFile(@Param('id') id: string) {
    return this.documentService.deleteDocumentFile(id)
  }
}
