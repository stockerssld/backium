import { AmazonCredentials, StorageProvider } from "../interfaces"
import AWS, { S3 } from "aws-sdk"

class AmazonSimpleStorageService implements StorageProvider<AmazonCredentials> {
  storage: S3
  config = (credentials: AmazonCredentials) => {
    AWS.config.update({
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
      region: credentials.region,
    })
    this.storage = new AWS.S3()
  }
  init = () => {
    console.log("init")
  }
  upload = () => {
    console.log("upload")
  }
  download = () => {
    console.log("download")
  }
  createBucket = () => {
    console.log("createBucket")
  }
  verifyBucket = () => {
    console.log("verifyBucket")
  }
}

export default AmazonSimpleStorageService
