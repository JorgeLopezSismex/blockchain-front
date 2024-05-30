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
  jsonBody: string;
  templateId: number;
  templateName: string;
  verificationId: string | null;
  createdAt: string;
};
