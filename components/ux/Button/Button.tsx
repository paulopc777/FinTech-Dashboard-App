import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import ButtonStyle from "./Button.style";

function ButtonIcon({ children, ...props }: { children: React.ReactNode } & TouchableOpacityProps) {
    return (
        <TouchableOpacity {...props} style={[ButtonStyle.ButtonBase, ButtonStyle.ButtonIcon, props.style]}>
            {children}
        </TouchableOpacity>
    )
}

export default function Button({ children, ...props }: { children: React.ReactNode } & TouchableOpacityProps) {
    return (
        <ButtonIcon {...props}>
            {children}
        </ButtonIcon>
    )
}
