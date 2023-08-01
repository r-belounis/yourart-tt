import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

// Define generic "as" from ElementType utility
type AsProp<A extends ElementType> = { as?: A; };
// An utility union type using keyof, to omit key props from AsProp<> and any other props.
type PropsToOmit<O extends ElementType, P> = keyof (AsProp<O> & P);

/**
 * GenericProps
 * - A reusable generic prop type that extends utility props from React, 
 * and omit ref types from ComponentPropsWithoutRef
*/
type GenericProps<C extends ElementType, Props = {}> = 
PropsWithChildren<Props & AsProp<C>> & Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

/**
   * GenericComponent
   * - A polymorphic component to use for composing components for edge cases like framework design.
   * - It can be defined as any html block, without ref props.
   * - Highly reusable, flexibility and interoperability in mind, you can even import other components 
   * from faves libraries to render custom components.
   * - Works in same regards as Polymorphic, asChild in RadixUI
   * @param {string} [as] Optional - Define an html block like div, nav...
   * @default "div"
   * @exemple Exemple component with single closure tag
   * @example const text = () => <GenericComponent as="h1" />
   * @exemple Exemple component with children
   * @example const section = ({children}: React.ReactNode) => <GenericComponent as="section">{children}</GenericComponent>
   * @exemple Exemple component with imported library
   * @example import { Code } from '@chakra-ui/react'
   * @example const code = () => <GenericComponent as={Code}></GenericComponent>
   * @desc Important : You cannot use imported components with refs, they will be not treated with their types.
*/
const GenericComponent = <T extends ElementType = "div">({ as, children, ...props }: GenericProps<T>) => {
    const Generic = as || "div";
    return <Generic {...props}>{children}</Generic>
}

export { GenericComponent as default };
export type { GenericProps };