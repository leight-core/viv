import Image                  from "next/image";
import {type DocsThemeConfig} from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo:               <div style={{width: "10em", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <Image
                                alt={"logo"}
                                src={"https://avatars.githubusercontent.com/u/74918176?s=96&v=4"}
                                width={24}
                                height={24}
                            />
                            <span>Project: Leight Viv</span>
                        </div>,
    project:            {
        link: "https://github.com/leight-core/viv",
    },
    docsRepositoryBase: "https://github.com/leight-core/viv",
    footer:             {
        text: "Leight Viv Documentation",
    },
};

export default config;
