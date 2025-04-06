import React from "react";

// This is a fallback component that mimics the basic API of framer-motion
// to prevent errors when framer-motion has issues
interface MotionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  variants?: any;
  viewport?: any;
  whileInView?: any;
  [key: string]: any;
}

export const Motion = ({
  children,
  className = "",
  style = {},
  ...props
}: MotionProps) => {
  // Just render the children with the className and style
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export const AnimatePresence = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export default Motion;
