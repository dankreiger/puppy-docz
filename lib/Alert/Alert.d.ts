import { SFC } from 'react';
export declare type Kind = 'info' | 'positive' | 'negative' | 'warning';
export declare type KindMap = Record<Kind, string>;
export interface AlertProps {
    /**
     * Set this to change alert kind
     * @default info
     */
    kind: 'info' | 'positive' | 'negative' | 'warning';
}
export declare const Alert: SFC<AlertProps>;
