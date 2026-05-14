import Image from "next/image";
import PrimaryButton from "../components/button";

export default function PreFooter() {
    return (
        <section>
        <div className="flex justify-center flex-col items-center bg-[#E3EBF0]">
          <h2 className="pbs-10 pbe-5 max-w-[300] lg:max-w-max  text-center text-3xl font-bold">Surpassez vous avec Today’s Mission</h2>
          <p className="px-10 pbs-5">Commencez à vous dépassez et à être le meilleur avec vos amis en téléchargeant l’application gratuitement.</p>
        <div className="flex justify-evenly p-10 lg:p-0 items-center lg:overflow-visible my-10">
          <Image
            src="/playstore.png"
            alt="Télécharger sur Play Store"
            width={300}
            height={200}
            className="max-w-[200]"
          />
          <PrimaryButton text="Télécharger"></PrimaryButton>
        </div>
        </div>
      </section>
    )
}