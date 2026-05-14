interface props {
    text: String
}

export default function PrimaryButton({ text }: props) {
    return (
        // <div className="flex ">
            <button className="px-5 py-[3.5%] lg:py-4 bg-[#5FB8EF] rounded-md text-white">{text}</button>
        // </div>
    )
}