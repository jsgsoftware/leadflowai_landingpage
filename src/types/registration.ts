export interface RegistrationData {
  // Business Info
  orgName: string
  website: string
  industry: string
  size: string
  mainCustomers: string
  acquisitionChannels: string[]
  usageGoals: string[]
  storeData: string
  role: string
  phoneNumber: string
}

export const INITIAL_DATA: RegistrationData = {
  orgName: '',
  website: '',
  industry: '',
  size: '',
  mainCustomers: '',
  acquisitionChannels: [],
  usageGoals: [],
  storeData: '',
  role: '',
  phoneNumber: ''
}
