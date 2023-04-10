import {type IWithIdentity} from "@leight/source";

export const withPatch = <T extends IWithIdentity>({id, ...patch}: T) => {
    return {
        data:  patch,
        where: {id},
    };
};

export interface IWithUpsertProps {
    create: any;
    filter: any;
    patch: any;
}

export const withUpsert = ({create, filter: where, patch: update}: IWithUpsertProps) => {
    return {
        where,
        create,
        update,
    };
};
