export default function FAQ() {
  const faqs = [
    {
      question: "Qu’est-ce que Today’s Mission ?",
      answer:
        "Today’s Mission aide les familles et les groupes à organiser leurs tâches quotidiennes grâce à des défis, des missions et des récompenses.",
    },
    {
      question: "L’application est-elle gratuite ?",
      answer:
        "Oui. Vous pouvez commencer avec l’offre gratuite et passer au plan Basic à tout moment.",
    },
    {
      question: "Combien de groupes puis-je rejoindre ?",
      answer:
        "Les utilisateurs gratuits peuvent rejoindre jusqu’à 2 groupes. Les abonnés Basic peuvent rejoindre un nombre illimité de groupes.",
    },
    {
      question: "Puis-je créer mes propres défis ?",
      answer:
        "Oui. Les utilisateurs gratuits ont des options limitées de création de défis, tandis que les utilisateurs Basic ont un accès illimité avec des fonctionnalités avancées.",
    },
    {
      question: "Comment fonctionnent les preuves ?",
      answer:
        "Les créateurs de défis peuvent demander des preuves de réalisation, comme des photos ou d’autres méthodes de validation.",
    },
    {
      question: "Puis-je annuler mon abonnement ?",
      answer:
        "Oui. Vous pouvez annuler votre abonnement Basic à tout moment depuis les paramètres de votre compte.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Questions fréquentes</h2>
          <p className="mt-4 text-gray-600">
            Tout ce que vous devez savoir sur Today’s Mission.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {faq.question}
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}