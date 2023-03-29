import {
    Tab,
    Tabs
}                from "nextra-theme-docs";
import {type FC} from "react";

export interface IInstallProps {
    packages: string[];
}

export const Install: FC<IInstallProps> = ({packages}) => {
    return <Tabs items={[
        "npm",
        "pnpm",
        "yarn"
    ]}>
        <Tab>
            ```bash copy filename="npm"
            npm i @leight/calendar-client
            ```
        </Tab>
        <Tab>
            ```bash copy filename="pnpm"
            pnpm i @leight/calendar-client
            ```
        </Tab>
        <Tab>
            ```bash copy filename="yarn"
            yarn add @leight/calendar-client
            ```
        </Tab>
    </Tabs>;
};
