export default function Footer() {
    return(
        <footer className="pbs-10 bg-[#F0E8E3] flex flex-col gap-10">
            <h2 className="text-center text-3xl font-bold">Commencez gratuitement</h2>
            <div className="grid grid-cols-2 grid-rows-1">
                <div className="">
                    <div className="flex justify-center pbe-3"><h2 className="content-center text-2xl protest-strike">Today's Mission</h2></div>
                    <div className="flex justify-center rotate-5 content-center"><img src="/captures.png" alt="photo de l'application" width={250} className="max-w-[150] lg:max-w-[250]"/></div>
                    <div className="flex justify-center content-center"><img src="/playstore.png" alt="photo de l'application" width={150}/></div>
                </div>
                <div>
                    <div className="flex flex-col pbs-5">
                        <span className="font-semibold">Informations</span>
                        <span>Github</span>
                        <span>Pourquoi ce projet ?</span>
                    </div>
                    <div className="flex flex-col pbs-5">
                        <span className="font-semibold">Contact</span>
                        <span>email@email.com</span>
                        <span>FAQ</span>
                    </div>
                    <div className="flex flex-col pbs-5">
                        <span className="font-semibold">Legal</span>
                        <span>Confidentialité</span>
                        <span>Condition d'utilisation</span>
                    </div>

                </div>
            </div>
            <p className="pbs-5 text-center">© today’s mission - 2026</p>
        </footer>
    )
}