import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import {DocumentFileBodyDto} from "./dto/document.body.dto";
import {DocumentFileStatus} from "@prisma/client";

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) {}

  async documents(skip: number = 0, take: number = 50) {
    return this.prisma.document.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        documentType: true,
        files: {
          select: {
            id: true,
            name: true,
            version: true,
            status: true,
            createdAt: true,
            expirationDate: true,
          },
          orderBy: [
            {
              createdAt: 'desc',
            },
          ],
        },
      },
      skip,
      take,
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    })
  }

  async getDocumentsAndTheirRequirements(skip: number = 0, take: number = 50) {
    return this.prisma.document.findMany({
      select: {
        id: true,
        name: true,
        documentType: true,
        neededForRequirements: {
          select: {
            requirement: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        }
      },
      skip,
      take,
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    })
  }

  async createDocumentFile(document: DocumentFileBodyDto) {
    return this.prisma.documentFile.create({
      data: {
        name: document.name,
        version: document.version,
        status: document.status,
        expirationDate: document.expirationDate || null,
        requirement: {
          connect: {
            id: document.requirementId
          }
        },
        mimeType: "text/plain",
        document: {
          connect: {
            id: document.documentId
          }
        }
      }
    })
  }

  async updateDocumentFileStatus(documentFileId: string, status: DocumentFileStatus) {
    await this.prisma.documentFile.update({
      where: {
        id: documentFileId,
      },
      data: {
        status,
      }
    })
  }

  async deleteDocumentFile(documentFileId: string) {
    return this.prisma.documentFile.delete({where: {id: documentFileId}})
  }
}
