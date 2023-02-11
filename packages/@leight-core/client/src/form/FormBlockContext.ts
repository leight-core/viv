import {IBlockContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext}    from "../context";

export const FormBlockContext = createContext<IBlockContext>(null as any);

/**
 * Access to UI blocking context of a Form.
 */
export const useFormBlockContext = () => useContext<IBlockContext>(FormBlockContext, "FormBlockContext");
