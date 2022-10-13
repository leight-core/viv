import {
    IBlockContext,
    useContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const FormBlockContext = createContext<IBlockContext>(null as any);

/**
 * Access to UI blocking context of a Form.
 */
export const useFormBlockContext = () => useContext<IBlockContext>(FormBlockContext, "FormBlockContext");
