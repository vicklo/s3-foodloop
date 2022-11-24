export interface  userDto { 
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
}