import { SFC } from 'react';
import { ReactNode } from 'react';
export declare type ButtonKind = 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray';
export declare type ButtonKinds = Record<ButtonKind, string>;
export interface ButtonProps {
    scale: 'small' | 'normal' | 'big';
    kind: 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray';
    outline: boolean;
    children: ReactNode;
}
export declare const Button: SFC<ButtonProps>;
