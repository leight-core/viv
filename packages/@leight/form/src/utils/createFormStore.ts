import {createStore}      from "@leight/store";
import {type IFormSchema} from "../schema/FormSchema";

export interface ICreateFormStoreProps {
    name: string;
}

export const createFormStore = <TTypeOf extends IFormSchema.TypeOf<any>>({name}: ICreateFormStoreProps) => {
    return createStore<TTypeOf["StoreProps"]>({
        state: ({state}) => () => ({
            ...state,
        }),
        name:  `${name}FormStore`,
    });
};
