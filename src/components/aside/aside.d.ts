// define aside props
export interface Props {
  // whether aside is open
  open: boolean;
  // aside width
  width: string;
  // whether aside is sticky
  sticky: boolean;
  // sticky offset
  offsetTop: string;
}

// define button component props
export const asideProps = {
  // whether aside is open
  open: { type: Boolean, default: true, },
  // aside width
  width: { type: String, default: "240px", },
  // whether aside is sticky
  sticky: { type: Boolean, default: false, },
  // sticky offset
  offsetTop: { type: String, default: "0px", },
}