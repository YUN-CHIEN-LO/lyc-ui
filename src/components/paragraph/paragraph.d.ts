import { propColors, propSizes } from "@/constants";

// define button props
export interface Props {
    // paragraph types
    type: string;
    // color variant
    color: string;
    // paragraph label
    label: string;
}

// define button component props
export const paragraphProps = {
    // display type
    type: {
        type: String,
        default: "paragraph",
        validator(val: string): boolean {
            return ["paragraph", "quote", "block"].includes(val);
        },
    },
    // color variant
    color: {
        type: String,
        default: propColors.default,
        validator(value: string) {
            return Object.keys(propColors).includes(value);
        },
    },
    // paragraph label
    label: {
        type: String,
        default: null,
    },
};
