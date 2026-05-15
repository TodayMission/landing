import PrimaryButton from "./button";

export var playstore = "https://play.google.com/store/apps?hl=fr"

export default function Header() {
    return (
        <header className="flex justify-between p-5 shadow-lg fixed min-w-full bg-white dark:bg-[#9A9A9A] z-500">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Strike&display=swap" rel="stylesheet" />
            <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    />
            <div className="flex"><a href="/" className="content-center"><h2 className="content-center text-2xl protest-strike">Today's Mission</h2></a></div>
            {/* Desktop button */}
            <div className="hidden md:block">
                <PrimaryButton text={"Télécharger"} />
            </div>

            {/* Mobile burger */}
            <button
                className="md:hidden text-3xl"
                aria-label="Menu"
            >
                ☰
            </button>

        </header>
    );
}