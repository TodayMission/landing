interface props {
    text: String
}

export default function PrimaryButton({ text }: props) {
    return (
        // <div className="flex ">
            <button className="px-3 min-h-15 bg-[#5FB8EF] rounded-md text-white">{text}</button>
        // </div>
    )
}