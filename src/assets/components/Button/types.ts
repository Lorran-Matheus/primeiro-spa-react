export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void;
    size?: number;
    type?: string
}

export interface ButtonStyled {
    variant?: string;
    size?: number;
}