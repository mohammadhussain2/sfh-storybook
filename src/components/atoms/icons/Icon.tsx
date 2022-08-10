import React from 'react';
// import {Icons} from './index'
interface IconsProps {
    name: string;
    className: string;
}
export const Icon: React.FC<IconsProps> = ({ name, className }) => {
  return (
    <>
    <svg className={`c-icon ${className}`} aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
    </>
  );
};
