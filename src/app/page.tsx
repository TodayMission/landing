import Image from "next/image";
import PrimaryButton from "./components/button";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

export default function Home() {
  return (
    <main>
      <div className="sm:grid grid-cols-2 grid-rows-1 overflow-hidden">
        <div className="p-7 md:flex md:justify-center md:flex-col">
          <div className="flex justify-center">
            <h2 className="max-w-xs text-center text-3xl font-bold">Défiez vos amis sans contraintes</h2>
          </div>
          <div className="m-5">
            <p className="text-lg">Today’s mission vous permet d’élaborer des groupes pour faire des challenges entre amis sans prises de têtes</p>
          </div>
        </div>
        <div className="md:pbs-20">
          <div className="flex justify-center rotate-5 content-center"><img src="/captures.png" alt="photo de l'application" width={300}/></div>
        </div>
        <div className="flex justify-evenly p-10 lg:p-0 items-center lg:overflow-visible lg:-mbs-50">
          <img src="/playstore.png" alt="Download playstore" width={200}/>
          <PrimaryButton text="Télécharger"></PrimaryButton>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center flex-col items-center">
          <h2 className="pbs-10 pbe-5 max-w-xs lg:max-w-max  text-center text-3xl font-bold">Créer des missions simplement</h2>
          
          <div className="lg:flex lg:flex-row">
            <div>
              <div className="p-5">
                <div className="flex lg:flex-col gap-20 pbs-20 items-center justify-center">
                  <div className="min-w-30 min-h-30 bg-[#E3EBF0] flex justify-center items-center rounded-full"><span className="text-5xl font-bold">1</span></div>
                  <h2 className="text-2xl font-semibold text-center">Embarquez vos amis</h2>
                </div>
                <div>
                  <p className="p-5">Partgez un lien d’invitation avec votre ami, une fois que votre proche à créer son compte, il apparait directement dans votre liste d’ami.</p>
                </div>
              </div>

            </div>

            <div>
              <div className="p-5">
                <div className="flex lg:flex-col-reverse gap-20 pbs-20 items-center justify-center">
                  <h2 className="text-2xl font-semibold text-center">Créez un groupe avec vos amis</h2>
                  <div className="min-w-30 min-h-30 bg-[#E3EBF0] flex justify-center items-center rounded-full"><span className="text-5xl font-bold">2</span></div>
                </div>
                <div>
                  <p className="p-5">Créez votre groupe en vous dirigeant dans la page groupe. Invitez vos amis dans votre groupes et partagez des moments amusants.</p>
                </div>
              </div>
            </div>
          
            <div>

              <div className="p-5">
                <div className="flex lg:flex-col gap-20 pbs-20 items-center justify-center">
                  <div className="min-w-30 min-h-30 bg-[#E3EBF0] flex justify-center items-center rounded-full"><span className="text-5xl font-bold">3</span></div>
                  <h2 className="text-2xl font-semibold text-center">Inventez des challenges</h2>
                </div>
                <div>
                  <p className="p-5">Maintenant que vous êtes dans votre groupe avec vos amis, imaginez les défis les plus improbable et voyez qui osera les relever.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
        <div className="pbe-10">
          <div className="flex justify-center flex-col items-center ">
            <h2 className="pbs-10 pbe-5 max-w-xs lg:max-w-max  text-center text-3xl font-bold">Une liberté d'adaptation</h2>
            <p className="p-5">Plus qu’une simple application de défi, vous pouvez challengez votre quotidien en toute circonstances.</p>
          </div>
          <div className="flex lg:flex-row flex-col sm:gap-10">
            <div className="p-3 m-5 pbe-10 bg-[#F0E8E3] rounded-2xl shadow-xl">
              <div className="flex p-5 gap-5 items-center">
                <div className="flex bg-white rounded-full min-w-20 min-h-20 justify-center items-center"><HomeOutlinedIcon style={{ fontSize: 40 }}></HomeOutlinedIcon></div>
                <h2>EN FAMILLE</h2>
              </div>
              <p>Partagez des challenges sur les tâches ménagéres ou sur la gestion autonome des différents membre de famille.  Ainsi que des petits défis amusant pour stimuler l’ensemble des membres de la famille avec des activités communes.</p>
            </div>

            <div className="p-3 m-5 pbe-10 bg-[#F0E8E3] max-w-(80vw) rounded-2xl shadow-xl">
              <div className="flex p-5 gap-5 items-center">
                <div className="flex bg-white rounded-full min-w-20 min-h-20 justify-center items-center"><GroupsOutlinedIcon style={{ fontSize: 40 }}></GroupsOutlinedIcon></div>
                <h2>ENTRE AMIS</h2>
              </div>
              <p>Que ça soit loufoques ou accès sur vos passions communes vous pouvez vous ammenez à découvrir de nouveaux centre d’intêret commun ou à renforcer vos liens en surmontants vos différents challenges.</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
