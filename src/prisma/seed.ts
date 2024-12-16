import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

let requirements = [
  {
    name: 'Climate change action plan oversight / effectiveness',
    description:
      'Internal monitoring and governance are in place to oversee the implementation and effectiveness of the action plan related to climate change adaptation and mitigation, ensuring objectives are met and improvements are made',
    documents: new Set(['climate-change-action-plan']),
  },
  {
    name: 'Climate change adaptation and mitigation targets',
    description:
      'The organization has set targets related to the adaptation and mitigation of climate change impacts',
    documents: new Set(['climate-change-policy']),
  },
  {
    name: 'Climate change adaptation and mitigation targets oversight',
    description:
      'Internal monitoring and governance mechanisms are in place to oversee the achievement of targets related to climate change adaptation and mitigation, ensuring alignment with strategic objectives and compliance with established policies',
    documents: new Set(['climate-change-policy']),
  },
  {
    name: 'Awareness training on climate actions',
    description:
      'The organization has established training programmes for employees to raise awareness and understanding on climate change and initiatives deployed to foster adaptation or mitigation',
    documents: new Set([
      'climate-change-training-slides',
      'climate-change-training-attendance',
    ]),
  },
  {
    name: 'Climate change-related financial impacts oversight (methodology and assumptions)',
    description:
      'A clear methodology for calculating climate change-related financial impacts has been formalized, laying out the calculation steps, data sources used and assumptions made',
    documents: new Set(['climate-change-reporting']),
  },
  {
    name: 'Cilmate change-related financial impact reporting',
    description:
      'The organization tracks and reports KPIs related to climate change-related financial impacts',
    documents: new Set(['climate-change-reporting']),
  },
  {
    name: 'Anti-corruption policy',
    description:
      'The company has formalized an anti-corruption or anti-bribery policy \\n- that is consistent with the UN Convention against Corruption\\n- for which the timetable for implementation is clearly defined\\n- with a clear communication plan to relevant populations',
    documents: new Set(['corruption-policy', 'ethics-charter']),
  },
  {
    name: 'Policy on conflicts of interest',
    description:
      "The organization has formalized a Policy committing to the identification, disclosure, and management of conflicts between personal interests and the organization's interests to ensure integrity and transparency in decisions.",
    documents: new Set(['conflicts-interest-policy', 'ethics-charter']),
  },
  {
    name: 'Anti-corruption training',
    description:
      'The organization has set up training programmes for internal stakeholders regarding anti-corruption or anti-bribery\\nThe organization clearly provides\\n- Details on nature, scope and depth of training programmes\\n- Whether supervisory bodies participate or not\\n- An analysis of training activities (by region or by category)',
    documents: new Set([
      'corruption-training-slides',
      'corruption-training-attendance',
    ]),
  },
  {
    name: 'Control procedures to prevent and adress corruption',
    description:
      "The organization has procedures in place to prevent, detect and address allegations or incidents of corruption\\nProcedures clearly specify\\n- investigators or investigating committee and whether they're separate from internal Legal team\\n- how outcomes are reported to administrative, management and supervisory bodies\\n- deployment plans throughout the organization",
    documents: new Set([
      'corruption-fraud-procedure',
      'expense-procedure',
      'gifts-invitations-procedure',
    ]),
  },
  {
    name: 'Audit of control procedures',
    description:
      "The organization has mechanisms or processes in place to regularly evaluate the effectiveness of internal controls and procedures, aiming to mitigate risks, ensure compliance, and safeguard the organization's integrity.",
    documents: new Set([
      'fraud-corruption-audit',
      'financial-statements-audit',
    ]),
  },
  {
    name: 'Corruption due diligence',
    description:
      'The organization has mechanisms or processes in place to conduct due diligence on corruption risks in business relationships and transactions, aimed at identifying and mitigating potential corruption before engagement.',
    documents: new Set(['kyc-procedure']),
  },
  {
    name: 'Anti-corruption reporting',
    description:
      'The organization monitors relevant KPIS regarding corruption and bribery matters\\n- Training coverage\\n- Violations, fines, incidents',
    documents: new Set(['anti-corruption-report']),
  },
  {
    name: 'Anti-corruption certification',
    description:
      'The organization undergoes third-party verification of its anti-corruption management system, demonstrating compliance with international anti-corruption standards and a commitment to ethical business practices.',
    documents: new Set(['iso-37001-certificate']),
  },
  {
    name: 'Disciplinary system and sanctions in the event of misconduct',
    description:
      'The organization has implemented a disciplinary system and sanctions in the event of misconduct or breach against the code of conduct',
    documents: new Set(['ethics-charter']),
  },
]

const documents = [
  {
    document_type: 'climate-change-action-plan',
    name: 'Climate change action plan',
    description:
      'Detailed plan addressing climate change-related impacts, risks and opportunities and detailing specific actions to be taken to address climate change through mitigation and adaptation strategies',
  },
  {
    document_type: 'climate-change-policy',
    name: 'Climate change policy',
    description:
      "Policy document outlining an organization's commitment, strategies, and actions to address climate change",
  },
  {
    document_type: 'climate-change-training-slides',
    name: 'Climate change training slides',
    description:
      'Educational materials designed to inform and train on climate change impacts, mitigation, and adaptation strategies',
  },
  {
    document_type: 'climate-change-training-attendance',
    name: 'Climate change training attendance sheet',
    description:
      'Record of participants who attended climate change-related training sessions',
  },
  {
    document_type: 'climate-change-reporting',
    name: 'Reporting relative to climate change adaptation and mitigation',
    description:
      'Report presenting the main KPIs relative to climate change adaptation and mitigation',
  },
  {
    document_type: 'corruption-policy',
    name: 'Commitment and targets on anti-corruption',
    description: 'Formalized commitments and targets relative to corruption.',
  },
  {
    document_type: 'ethics-charter',
    name: 'Ethics charter',
    description:
      'Formalized policy presenting the commitments made and actions implemented relating to the management of business ethics.\n The document should cover multiple ethics issues such as corruption, fraud, etc.',
  },
  {
    document_type: 'conflicts-interest-policy',
    name: 'Commitment and targets on conflicts of interest',
    description:
      'Formalized commitments and targets relative to conflicts of interest.',
  },
  {
    document_type: 'corruption-training-slides',
    name: 'Corruption training presentation',
    description:
      'Provide evidence of recurring corruption awareness training by your employees.',
  },
  {
    document_type: 'corruption-training-attendance',
    name: 'Corruption training attendance sheet',
    description:
      'Provide evidence of corruption awareness training completion by your employees.',
  },
  {
    document_type: 'corruption-fraud-procedure',
    name: 'Corruption and fraud management procedure',
    description:
      'Procedure detailing how the organization prevents, identifies, and remediates situations of fraud and corruption.',
  },
  {
    document_type: 'expense-procedure',
    name: 'Expense management procedure',
    description:
      'Procedure detailing rules set relative to employee expenses: thresholds, approval mechanisms, etc.',
  },
  {
    document_type: 'gifts-invitations-procedure',
    name: 'Gifts and invitations procedure',
    description:
      'Procedure detailing rules set relative to gits and invitations: circumstances under which they can be accepted, maximum amounts, declaration, approval mechanisms.',
  },
  {
    document_type: 'fraud-corruption-audit',
    name: 'Fraud and corruption audit schedule',
    description:
      'Provide evidence of an audit program in place to investigate effectiveness of control procedures in place.',
  },
  {
    document_type: 'financial-statements-audit',
    name: 'Financial statements auditing mission letter',
    description:
      'Provide evidence of financial statements verification by a third-party auditor.',
  },
  {
    document_type: 'kyc-procedure',
    name: 'KYC procedure',
    description:
      'Procedure detailing rules and processes in place to verify third-party identity prior to establishing a business relationship',
  },
  {
    document_type: 'anti-corruption-report',
    name: 'Anti-corruption KPIs reporting',
    description:
      'Report presenting the main KPIs monitored to measure the impact of anti-corruption initiatives',
  },
  {
    document_type: 'iso-37001-certificate',
    name: 'ISO37001 certificate',
    description:
      "Certificate provided by an approved third-party auditor proving the organization's endorsement of ISO37001 principles.",
  },
]
async function main() {
  await prisma.requirement.createMany({
    data: requirements.map((req) => {
      return {
        name: req.name,
        description: req.description,
        status: 'DRAFT',
      }
    }),
  })

  const dbRequirements = await prisma.requirement.findMany()

  const newRequirements = requirements.map((req) => {
    return {
      ...req,
      id: dbRequirements.find((dReq) => dReq.name === req.name).id,
    }
  })

  for (const document of documents) {
    const reqs = newRequirements.filter((req) =>
      req.documents.has(document.document_type),
    )
    await prisma.document.create({
      data: {
        name: document.name,
        description: document.description,
        documentType: document.document_type,
        neededForRequirements: {
          createMany: {
            data: reqs.map((req) => {
              return {
                requirementId: req.id,
              }
            }),
            skipDuplicates: true,
          },
        },
        files: {
          createMany: {
            data: [...Array(faker.number.int({ min: 1, max: 3 }))].map(
              (file) => {
                return {
                  name: faker.system.fileName(),
                  version: faker.system.semver(),
                  status: 'NEW',
                  mimeType: faker.system.mimeType(),
                  requirementId:
                    reqs[faker.number.int({ min: 0, max: reqs.length - 1 })].id,
                }
              },
            ),
          },
        },
      },
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
