export type EventLogData = {
  createdAt: string;
  createdBy: number;
  currentValue: string | null;
  description: string;
  eventLogId: number;
  eventLogLevelId: number;
  eventLogLevelName: string;
  eventLogTypeId: number;
  eventLogTypeName: string;
  issuerId: number;
  issuerName: string;
  moduleName: string;
  memberEmail: string | null;
  moduleId: number;
  memberId: number | null;
  previousValue: string | null; 
};
