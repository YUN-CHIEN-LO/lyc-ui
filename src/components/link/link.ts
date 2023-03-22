import { propColors, propSizes } from "@/constants";

// define link props
export interface Props {
    // color variant
    color: String;
    // size types
    size: String;
    // is disabled
    disabled: Boolean;
    // alone style
    alone: Boolean;
    // full style
    full: Boolean;
    // is plain text
    text: Boolean;
    // is active
    active: Boolean;
}


// define link component props
export const linkProps = {
    // color variant
    color: {
        type: String,
        default: propColors.default,
        validator(value: string) {
            return Object.keys(propColors).includes(value);
        },
    },
    // size types
    size: {
        type: String,
        default: propSizes.medium,
        validator(value: string) {
            return Object.keys(propSizes).includes(value);
        },
    },
    // is disabled
    disabled: { type: Boolean, default: false, },
    // full style
    full: { type: Boolean, default: false, },
    // aline style
    alone: { type: Boolean, default: false, },
    // is plain text
    text: { type: Boolean, default: false, },
    // is active
    active: { type: Boolean, default: false, },
}

// define link events
export enum Events {
    click = "click",
  }
  
  // define link emits
  export const linkEmits = {
    [Events.click]: (evt: Event) => true,
  };
  