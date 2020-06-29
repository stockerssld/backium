import { S3 } from "aws-sdk"
import { Storage } from "@google-cloud/storage"

// export interface AuthInfo {
//   provider: "aws" | "google"
//   credentials: Partial<AmazonCredentials | GoogleCredentials>
// }

export type ProviderType = "aws" | "google" | "ibm" | "azure" | "rackspace"

export interface AmazonCredentials {
  accessKeyId: string
  secretAccessKey: string
  region: string
  bucketName: string
  acl: string
}

export interface GoogleCredentials {
  name: string
  privateKeyType: string
  privateKeyData: string
  validAfterTime: string
  validBeforeTime: string
  keyAlgorithm: string
}

export interface StorageProvider<T> {
  credential?: Credential
  storge?: S3 | Storage
  config: (params: T) => void
  init: () => void
  upload: () => void
  download: () => void
  createBucket: () => void
  verifyBucket: () => void
}
