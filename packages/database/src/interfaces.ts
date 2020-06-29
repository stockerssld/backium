export type DatabaseType = "mongodb" | "mysql" | "postgress"

export interface DatabaseSource {
  database: string
  host: string
  username?: string
  password?: string
  collections?: Array<{ name: string; query?: string }>
  authenticationDatabase?: string
}

export interface DatabaseDestination {
  database: string
  username?: string
  password?: string
  from: string
  host: string
  drop?: boolean
  collections?: Array<{ name: string }>
  authenticationDatabase?: string
}

export interface MySQLAuthInfo {
  database: string
  username?: string
  password?: string
  from: string
  host: string
  drop?: boolean
  collections?: Array<{ name: string }>
  authenticationDatabase?: string
}

export interface PostgressAuthInfo {
  database: string
  username?: string
  password?: string
  host: string
  drop?: boolean
  collections?: Array<{ name: string }>
  authenticationDatabase?: string
}

export interface MongoDBAuthInfo {
  database: string
  username?: string
  password?: string
  host: string
  drop?: boolean
  collections?: Array<{ name: string }>
  authenticationDatabase?: string
}

export interface Common {
  createBackupCommand: () => {}
  createRestoreCommand: () => {}
  executeCommand: () => {}
}

export interface Connector {
  createBackup: () => void
  restoreBackup: () => void
  generateDumpCommand: () => void
  isAvailable: () => boolean
}
