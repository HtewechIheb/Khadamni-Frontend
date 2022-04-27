export interface Offer {
  id: number,
  title: string,
  industry: string,
  type: string,
  description: string,
  gender: string,
  minimumExperience: number,
  recommendedExperience: number,
  spots: number,
  salary: number,
  degree: string,
  skills: string[],
  companyId: number
}
