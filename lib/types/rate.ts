import { SecurusServices } from './service';
import { Stringified } from './json';

export type ICSRate = {
    tariffBand?: string
    initialDuration?: string,
    initialCost?: number,
    overDuration?: string,
    overCost?: number,
    tax?: number,
    finalCost?: number,
    number: string,
    createdAt: number,
    scraper: string,
    agency: string,
    facility: string,
    seconds: number,
}

export type SecurusRate = {
    additionalAmount?: string,
    feeName: string | null,
    initalAmount: string,
    quoteRule?: boolean,
    ratePerMinute?: number,
    surCharge?: number,
    totalAmount?: string,
    number?: string,
    service: SecurusServices,
    createdAt: number,
    scraper: string,
    facility: string,
    seconds: number
}

export type Stusab = "AL"|"AK"|"AZ"|"AR"|"CA"|"CO"|"CT"|"DE"|"FL"|"GA"|"HI"|"ID"|"IL"|"IN"|"IA"|"KS"|"KY"|"LA"|"ME"|"MD"|"MA"|"MI"|"MN"|"MS"|"MO"|"MT"|"NE"|"NV"|"NH"|"NJ"|"NM"|"NY"|"NC"|"ND"|"OH"|"OK"|"OR"|"PA"|"RI"|"SC"|"SD"|"TN"|"TX"|"UT"|"VT"|"VA"|"WA"|"WV"|"WI"|"WY";

export type ScrapeResult<T> = {
    errors: string[]
} & {
    [K in Stusab]?: T[]
}

export type Rate = {
    created_at?: string,
    updated_at?: string,

    initial_amount: number | null,
    additional_amount: number | null,
    initial_duration: number | null,
    over_duration: number | null,
    tax: number | null,
    raw: Stringified<Omit<ICSRate | SecurusRate, "createdAt">>,
    raw_sha1: string;
    seen_at: string[],
    phone_number: string,
    disabled?: boolean;

    scraper_id: number
    canonical_rate_id: number;
}

export type CanonicalRate = {
    created_at?: string,
    updated_at?: string,

    phone_number: string;
    company_id: number,
    facility_id: number;
    service_id: number;
    notes: string;
    disabled?: boolean;
}