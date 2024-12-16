import { Test, TestingModule } from '@nestjs/testing';
import { DocumentController } from '../src/documents/document.controller';
import { DocumentService } from '../src/documents/document.service';
import { DocumentFileBodyDto } from '../src/documents/dto/document.body.dto';

// Mock DocumentService
const mockDocumentService = {
    documents: jest.fn(),
    getDocumentsAndTheirRequirements: jest.fn(),
    createDocumentFile: jest.fn(),
};

describe('DocumentController', () => {
    let controller: DocumentController;
    let service: DocumentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DocumentController],
            providers: [
                {
                    provide: DocumentService,
                    useValue: mockDocumentService,
                },
            ],
        }).compile();

        controller = module.get<DocumentController>(DocumentController);
        service = module.get<DocumentService>(DocumentService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('getDocuments', () => {
        it('should return a list of documents', async () => {
            const mockDocuments = [
                {
                    id: 1,
                    name: 'Doc1',
                    description: 'Description1',
                    documentType: 'Type1',
                    files: [
                        {
                            name: 'File1',
                            status: 'NEW',
                            version: 'v1',
                            createdAt: new Date(),
                            expirationDate: new Date(),
                        },
                    ],
                },
            ];
            mockDocumentService.documents.mockResolvedValue(mockDocuments);

            const result = await controller.getDocuments();

            expect(service.documents).toHaveBeenCalled();
            expect(result).toEqual(
                mockDocuments.map((doc) => ({
                    id: doc.id,
                    name: doc.name,
                    description: doc.description,
                    documentType: doc.documentType,
                    files: doc.files.map((file) => ({
                        name: file.name,
                        status: file.status,
                        version: file.version,
                        createdAt: file.createdAt,
                        expirationDate: file.expirationDate,
                    })),
                }))
            );
        });
    });

    describe('getDocumentsAndTheirRequirements', () => {
        it('should return documents with their requirements', async () => {
            const mockDocumentsWithRequirements = [
                {
                    id: 1,
                    name: 'Doc1',
                    documentType: 'Type1',
                    neededForRequirements: [
                        {
                            requirement: {
                                id: 101,
                                name: 'Requirement1',
                            },
                        },
                    ],
                },
            ];
            mockDocumentService.getDocumentsAndTheirRequirements.mockResolvedValue(
                mockDocumentsWithRequirements
            );

            const result = await controller.getDocumentsAndTheirRequirements();

            expect(service.getDocumentsAndTheirRequirements).toHaveBeenCalled();
            expect(result).toEqual(
                mockDocumentsWithRequirements.map((doc) => ({
                    id: doc.id,
                    name: doc.name,
                    documentType: doc.documentType,
                    requirements: doc.neededForRequirements.map((nfr) => ({
                        id: nfr.requirement.id,
                        name: nfr.requirement.name,
                    })),
                }))
            );
        });
    });

    describe('createDocumentFile', () => {
        it('should create a document file', async () => {
            const mockFile: DocumentFileBodyDto = {
                name: 'File1',
                version: 'v1',
                requirementId: '1234-323-4123',
                documentId: '423412-2123-3123'

            };
            const mockResponse = { id: 1, ...mockFile }

            mockDocumentService.createDocumentFile.mockResolvedValue(mockResponse);

            const result = await controller.createDocumentFile(mockFile);

            expect(service.createDocumentFile).toHaveBeenCalledWith(mockFile);
            expect(result).toEqual(mockResponse);
        });
    });
});
