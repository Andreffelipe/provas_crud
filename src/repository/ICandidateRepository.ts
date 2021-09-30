export interface ICandidateRepository {
  create (name: string, email: string, hash_identifier: string): Promise<any>
  find (email: string): Promise<any>
  findByHash (hash: string): Promise<any>
  findAll (): Promise<any>
}
