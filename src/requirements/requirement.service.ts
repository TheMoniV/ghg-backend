import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { RequirementStatus } from '@prisma/client'


@Injectable()
export class RequirementService {
  constructor(private prisma: PrismaService) {}

  async requirements(skip: number = 0, take: number = 50) {
    return this.prisma.requirement.findMany({
      skip,
      take,
      orderBy: [
        {
          id: 'desc',
        },
      ],
      include: {
        documentsRequired: {
          select: {
            document: {
              select: {
                id: true,
                name: true,
                documentType: true,
              },
            },
          },
        },
        documentsProvided: {
          select: {
            name: true,
            status: true,
            version: true,
            expirationDate: true,
            document: {
              select: {
                documentType: true,
              },
            },
          },
        },
      },
    })
  }
  async updateRequirementStatus(requirementId: string, status: RequirementStatus) {
    await this.prisma.requirement.update({
      where: {
        id: requirementId,
      },
      data: {
        status,
      }
    })
  }
}
