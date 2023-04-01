interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={`${className} rounded-full flex items-center justify-center font-medium px-12 py-4 text-xl hover:scale-105`}>
            {children}
        </button>
    )
}