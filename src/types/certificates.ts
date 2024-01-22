export type CertificatesPermissionsData = {
  LIST_CERTIFICATE: boolean;
  CREATE_CERTIFICATE: boolean;
  READ_CERTIFICATE: boolean;
  UPDATE_CERTIFICATE: boolean;
  DELETE_CERTIFICATE: boolean;
};

export type CertificateData = {
  certificateId: number;
  transactionHash: string | null;
  transactionStatus: string | null;
  userId: number;
  userEmail: string;
  issuerId: number;
  issuerName: string;
  jsonBoby: string;
  templateId: number;
  templateName: string;
  createdAt: string;
};
