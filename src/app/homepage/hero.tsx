import Image from "next/image";
import PrimaryButton from "../components/button";
import { playstore } from "../components/header";

export default function Hero() {
    return (
    <section className="sm:grid grid-cols-2 grid-rows-1 overflow-hidden">
        <div className="p-7 md:flex md:justify-center md:flex-col">
          <div className="flex justify-center pbs-20">
            <h2 className="max-w-xs text-center text-3xl font-bold">Défiez vos amis sans contraintes</h2>
          </div>
          <div className="m-5">
            <p className="text-lg">Today’s mission vous permet d’élaborer des groupes pour faire des challenges entre amis sans prises de têtes</p>
          </div>
        </div>
        <div className="md:pbs-20">
          <div className="lg:pbs-5 flex justify-center rotate-5 content-center">
            <Image
              src="/captures.png"
              alt="Capture de l'application"
              width={300}
              height={600}
              className="rotate-5"
            />
            </div>
        </div>
        <div className="flex justify-evenly pbs-10 lg:p-0 items-center lg:overflow-visible lg:-mbs-50">
          <a href={playstore}>
            
          <Image
            src="/playstore.png"
            alt="Télécharger sur Play Store"
            width={300}
            height={200}
            className="max-w-[200]"
            />
          </a>
          <PrimaryButton text="Télécharger"></PrimaryButton>
        </div>
      </section>
    )
}