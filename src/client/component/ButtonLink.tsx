import {
    IQueryParams,
    Translate
}               from "@leight/viv";
import {Button} from "antd";
import Link     from "next/link";
import React, {
    ComponentProps,
    FC,
    ReactNode
}               from "react";

export interface IButtonLinkProps extends Partial<ComponentProps<typeof Button>> {
    /**
     * Href goes to generate method (clever link).
     */
    href?: string;
    /**
     * Title of a button.
     */
    label?: ReactNode;
    /**
     * Optional params for the link generator.
     */
    query?: IQueryParams | void;
}

export const ButtonLink: FC<IButtonLinkProps> = ({href, label, query, ...props}) => {
    try {
        if (!href) {
            return <Button
                type={"link"}
                size={"large"}
                disabled
                {...props}
            >
				<span>
					<Translate text={label}/>
				</span>
            </Button>;
        }
        return <Link href={{pathname: href, query: query || undefined}}>
            <Button
                type={"link"}
                size={"large"}
                {...props}
            >
				<span>
					<Translate text={label}/>
				</span>
            </Button>
        </Link>;
    } catch (e) {
        console.warn(`Cannot generate link [${href}] for ButtonLink. Params:`, query, e);
        return <Button
            type={"link"}
            size={"large"}
            disabled
            {...props}
        >
			<span>
				<Translate text={label}/>
			</span>
        </Button>;
    }
};
