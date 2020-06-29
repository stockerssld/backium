import { GoogleCredentials, StorageProvider } from "../interfaces"
import { Storage } from "@google-cloud/storage"

class GoogleCloudStorage implements StorageProvider<GoogleCredentials> {
  storage: Storage
  config(params: GoogleCredentials) {}
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

export default GoogleCloudStorage
