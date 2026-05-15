export default function Step() {
    return (
    <section className="">
        <div className="flex justify-center flex-col items-center">
          <h2 className="pbs-10 pbe-5 max-w-xs lg:max-w-max  text-center text-3xl font-bold">Créer des missions simplement</h2>
            <div className="lg:flex lg:flex-row">

            <OneStep 
                index={"1"}
                title={"Inventez des challenges"}
                description={"Partagez un lien d’invitation avec votre ami, une fois que votre proche à créé son compte, il apparait directement dans votre liste d’ami."}
            />

            <OneStep 
                index={"2"}
                title={"Créez un group avec vos amis"}
                description={"Créez votre groupe en vous dirigeant dans la page groupe. Invitez vos amis dans votre groupe et partagez des moments amusants."}
                reverse={true}
            />
          

            <OneStep 
                index={"3"}
                title={"Inventez des challenges"}
                description={"Maintenant que vous êtes dans votre groupe avec vos amis, imaginez les défis les plus improbable et voyez qui osera les relever."}
            />

          </div>
        </div>
    </section>
    )
} 

interface oneStepProps {
    index: String
    title: String,
    description: String,
    reverse?: Boolean
}

function OneStep({index, title, description, reverse = false}: oneStepProps){
    var flex = reverse ? "flex-row-reverse" : "flex-row"
    return (
            <div>
              <div className="p-5">
                <div className={`flex ${flex} lg:flex-col gap-10 pbs-20 items-center justify-center`}>
                  <div className="min-w-30 min-h-30 bg-[#E3EBF0] flex justify-center items-center rounded-full"><span className="text-5xl font-bold text-black">{index}</span></div>
                  <h2 className="text-2xl font-semibold text-center max-w-[255]">{title}</h2>
                </div>
                <div>
                  <p className="p-5">{description}</p>
                </div>
              </div>

            </div>
    )
}