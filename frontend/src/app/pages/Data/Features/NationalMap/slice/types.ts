import { Repo } from 'types/Repo';
import { Facility } from 'types/Facility';

export interface Filters {
  call_type: CallType;
  geography: Geography[];
  company: FilterCompanies;
  facility_type: FacilityType;
}

export enum Geography {
  FACILITY = 1,
  COUNTY = 2,
  STATE = 3,
}

export enum FilterCompanies {
  ICS = 1,
  SECURUS = 2,
  ALL = 3,
}

export enum CallType {
  IN_STATE = 1,
  OUT_STATE = 2,
}

export enum FacilityType {
  LOCAL = 'LOCAL',
  COUNTY = 'COUNTY',
  STATE = 'STATE',
  FEDERAL = 'FEDERAL',
  MULTI = 'MULTI',
  ALL = 'ALL',
}

/* --- STATE --- */
export interface NationalMapState {
  facilities: Facility[];
  filters: Filters;
  loading: boolean;
  error?: RepoErrorType | null;
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,
  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = NationalMapState;
