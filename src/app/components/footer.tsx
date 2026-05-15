import { playstore } from "./header";

export default function Footer() {
    return(
        <footer className="pbs-10 bg-[#F0E8E3] flex flex-col gap-10">
            <h2 className="text-center text-3xl font-bold text-black">Commencez gratuitement</h2>
            <div className="grid grid-cols-2 grid-rows-1">
                <div className="">
                    <div className="flex justify-center pbe-3"><a href="/" className="content-center"><h2 className="content-center text-2xl protest-strike text-black">Today's Mission</h2></a></div>
                    <div className="flex justify-center rotate-5 content-center"><img src="/captures.png" alt="photo de l'application" width={250} className="max-w-[150] lg:max-w-[250]"/></div>
                    <div className="flex justify-center content-center"><a href={playstore}><img src="/playstore.png" alt="photo de l'application" width={150}/></a></div>
                </div>
                <div>
                    <div className="text-black flex flex-col pbs-5">
                        <span className="font-semibold">Informations</span>
                        <a href="https://github.com/TodayMission">Github</a>
                        <a href="/#"><span>Pourquoi ce projet ?</span></a>
                    </div>
                    <div className="text-black flex flex-col pbs-5">
                        <span className="font-semibold">Contact</span>
                        <a href="mailto:dupontstef80@gmail.com"><span>email@email.com</span></a>
                        <a href="/faq"><span>FAQ</span></a>
                    </div>
                    <div className="text-black flex flex-col pbs-5">
                        <span className="font-semibold">Legal</span>
                        <a href="#"><span>Confidentialité</span></a>
                        <a href="#"><span>Condition d'utilisation</span></a>
                    </div>

                </div>
            </div>
            <p className="text-black pbs-5 text-center">© today’s mission - 2026</p>
        </footer>
    )
}