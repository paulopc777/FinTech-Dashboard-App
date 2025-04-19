import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import ButtonStyle from "./Button.style";

function ButtonIcon({ children, ...props }: { children: React.ReactNode } & TouchableOpacityProps) {
    return (
        <TouchableOpacity {...props} style={[ButtonStyle.ButtonBase, ButtonStyle.ButtonIcon, props.style]}>
            {children}
        </TouchableOpacity>
    )
}

function ButtonPrimary({ children, ...props }: { children: React.ReactNode } & TouchableOpacityProps) {
    return (
        <TouchableOpacity {...props} style={[ButtonStyle.ButtonBase, ButtonStyle.ButtonIcon, props.style]}>
            {children}
        </TouchableOpacity>
    )
}

function ButtonOutline({ children, ...props }: { children: React.ReactNode } & TouchableOpacityProps) {
    return (
        <TouchableOpacity
            {...props}
            style={[ButtonStyle.ButtonBase, ButtonStyle.ButtonOutline, props.style]}
        >
            {children}
        </TouchableOpacity>
    )
}

type Variant = "primary" | "icon" | "outline"

export default function Button({ children, Variant = "primary", ...props }: { children: React.ReactNode, Variant?: Variant } & TouchableOpacityProps) {

    if (Variant === "primary") {
        return (
            <ButtonPrimary {...props}>
                {children}
            </ButtonPrimary>
        )
    }

    if (Variant === "outline") {
        return (
            <ButtonOutline {...props}>
                {children}
            </ButtonOutline>
        )
    }

    if (Variant === "icon") {
        return (
            <ButtonIcon {...props}>
                {children}
            </ButtonIcon>
        )
    }

    return (
        <ButtonPrimary {...props}>
            {children}
        </ButtonPrimary>
    )
}
