interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    placeholder?: string
}

export const InputComponent = ({ label, placeholder, className, ...props }: InputProps) => {
    return (
        <div className="flex flex-col mb-6">
            <label className="text-lg pb-2">{label}</label>
            <input type="text" placeholder={placeholder} className="border-2 px-4 text-gray-500 border-gray-300 h-16 rounded-md" />
        </div>
    )

}