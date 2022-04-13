import { Candidate } from "./candidate";
import { Company } from "./company";
import { UserType } from "../utilities/types";

export interface User {
  id: string,
  email: string,
  type: UserType,
  info: Company | Candidate
}
