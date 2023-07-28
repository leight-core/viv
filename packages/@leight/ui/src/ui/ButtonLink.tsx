import {
    type IWithTranslation,
    Link,
    Translation
}                        from "@leight/i18n";
import {type IHrefProps} from "@leight/utils";
import {Button}          from "@mantine/core";
import {
    type ComponentProps,
    type FC,
    type ReactNode
}                        from "react";

export interface IButtonLinkProps extends Partial<ComponentProps<typeof Button<"button">>> {
    withTranslation?: IWithTranslation;
    href?: IHrefProps | string;
    /**
     * Title of a button.
     */
    label?: ReactNode;
}

export const ButtonLink: FC<IButtonLinkProps> = (
    {
        withTranslation,
        href,
        label,
        ...props
    }) => {
    try {
        if (!href) {
            return <Button
                variant={"subtle"}
                size={"md"}
                disabled
                {...props}
            >
                {label ? <span>
                    <Translation {...withTranslation} withLabel={label}/>
				</span> : null}
            </Button>;
        }
        return <Link
            href={href}
            passHref
            legacyBehavior
        >
            <a>
                <Button
                    variant={"subtle"}
                    size={"md"}
                    {...props}
                >
                    {label ? <span>
						<Translation {...withTranslation} withLabel={label}/>
					</span> : null}
                </Button>
            </a>
        </Link>;
    } catch (e) {
        console.error(e);
        return <Button
            variant={"subtle"}
            size={"md"}
            disabled
            {...props}
        >
            {label ? <span>
				<Translation {...withTranslation} withLabel={label}/>
			</span> : null}
        </Button>;
    }
};
