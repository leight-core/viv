import {watch} from "turbowatch";

export interface IWithTurbowatchProps {
    project: string;
}

export const withTurbowatch = ({project}: IWithTurbowatchProps) => watch({
    project,
    triggers: [
        {
            expression: [
                "anyof",
                [
                    "dirname",
                    "src",
                    [
                        "depth",
                        "eq",
                        0
                    ],
                ],
                [
                    "suffix",
                    [
                        "json",
                    ]
                ]
            ],
            name:       "build",
            onChange:   async ({spawn}) => {
                await spawn`npm run build:esbuild`;
                await spawn`npm run build:types`;
            },
        },
    ],
});
