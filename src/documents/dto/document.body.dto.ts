import {DocumentFileStatus} from '@prisma/client'
import {Transform} from "class-transformer";

export class DocumentFileBodyDto {
    name: string
    version: string
    status?: DocumentFileStatus
    @Transform(({ value }) => value && new Date(value), { toClassOnly: true })
    expirationDate?: Date
    requirementId: string
    documentId: string
}

export class PatchDocumentFileBodyDto {
    status: DocumentFileStatus
}
