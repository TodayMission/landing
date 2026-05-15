import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

export default function Profile() {
    return(
                <section className="pbe-10">
          <div className="flex justify-center flex-col items-center ">
            <h2 className="pbs-10 pbe-5 max-w-xs lg:max-w-max  text-center text-3xl font-bold">Une liberté d'adaptation</h2>
            <p className="p-5">Plus qu’une simple application de défi, vous pouvez challengez votre quotidien en toute circonstances.</p>
          </div>
          <div className="flex lg:flex-row flex-col sm:gap-10">
            <div className="p-3 m-5 pbe-10 bg-[#F0E8E3] rounded-2xl shadow-xl">
              <div className="flex p-5 gap-5 items-center">
                <div className="flex bg-white rounded-full min-w-20 min-h-20 justify-center items-center"><HomeOutlinedIcon style={{ fontSize: 40, color: "black" }}></HomeOutlinedIcon></div>
                <h2 className='text-black'>EN FAMILLE</h2>
              </div>
              <p className='text-black'>Partagez des challenges sur les tâches ménagères ou sur la gestion autonome des différents membre de famille.  Ainsi que des petits défis amusant pour stimuler l’ensemble des membres de la famille avec des activités communes.</p>
            </div>

            <div className="p-3 m-5 pbe-10 bg-[#F0E8E3] max-w-(80vw) rounded-2xl shadow-xl">
              <div className="flex p-5 gap-5 items-center">
                <div className="flex bg-white rounded-full min-w-20 min-h-20 justify-center items-center"><GroupsOutlinedIcon style={{ fontSize: 40, color: "black" }}></GroupsOutlinedIcon></div>
                <h2 className='text-black'>ENTRE AMIS</h2>
              </div>
              <p className='text-black'>Que ça soit loufoques ou accès sur vos passions communes vous pouvez vous amenez à découvrir de nouveaux centre d’intérêt commun ou à renforcer vos liens en surmontant vos différents challenges.</p>
            </div>
          </div>
          </section>
    )
} 