import {ComponentPropsWithoutRef, ElementType} from "react";
import styles from './styles.module.scss'


export const typographyVariant = ['H1', 'H2', 'H3', 'H4', 'Body1', 'Subtitle1', 'Body2', 'Subtitle2', 'Caption', 'Overline', 'Link1', 'Link2'] as const
export type TypographyVariant = typeof typographyVariant[number]
export type TypographyProps<T extends ElementType = 'p'> = {
    as?: T
    variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
    const { as: Component = 'p', variant = 'H1', ...rest} = props
    const className = styles[variant];
    return < Component className={className} {...rest} />;
};

