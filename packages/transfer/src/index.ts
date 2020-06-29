import { ProviderType } from "./interfaces"
import AmazonSimpleStorageService from "./connector/aws"
import GoogleCloudStorage from "./connector/google"
import RackspaceStorage from "./connector/rackspace"
import IMBStorage from "./connector/ibm"
import AzureStorage from "./connector/azure"

class StorageFactory {
  static getStorage(provider: ProviderType) {
    switch (provider) {
      case "google":
        return new GoogleCloudStorage()
      case "aws":
        return new AmazonSimpleStorageService()
      case "azure":
        return new AzureStorage()
      case "ibm":
        return new IMBStorage()
      case "rackspace":
        return new RackspaceStorage()
      default:
        throw new Error("Invalid provider")
    }
  }
}

export default StorageFactory
