import { CompanyDto } from "./company.dto";

export interface  UserDto {
    given_name?: string;
    family_name?: string;
    nickname?: string;
    name?: string;
    picture?: string;
    locale?: string;
    updated_at?: Date;
    email?: string;
    email_verified?: boolean;
    sub?: string;
    roles?: string[],
    dbId?: number,
    CompanyId?: number,
    company?: CompanyDto,
    firstName?:string,
    lastName?:string,
    userId?:number
}