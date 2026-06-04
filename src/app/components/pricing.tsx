const plans = [
  {
    name: "Gratuit",
    price: "0 €",
    period: "/mois",
    features: [
      "Rejoindre jusqu'à 2 groupes",
      "Participer à 1 défi par jour",
      "Création de défis limitée",
      "Catégories limitées",
      "Options de preuve de base",
      "Support communautaire",
    ],
  },
  {
    name: "Basique",
    price: "2 €",
    period: "/mois",
    features: [
      "Rejoindre un nombre illimité de groupes",
      "Participer à un nombre illimité de défis",
      "Créer un nombre illimité de défis",
      "Accès à toutes les catégories de défis",
      "Options de preuve avancées",
      "Support prioritaire",
    ],
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Tarification simple</h2>
          <p className="mt-3 text-gray-600">
            Commencez gratuitement et passez à l’offre supérieure quand vous
            serez prêt.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 shadow-sm ${
                plan.highlighted
                  ? "bg-[#E3EBF0] text-black shadow-xl"
                  : "border bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute right-6 top-6 rounded-full bg-green-500 px-3 py-1 text-sm font-semibold">
                  La plus populaire
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <div className="mt-4">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span
                  className={
                    plan.highlighted ? "text-black" : "text-gray-500"
                  }
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-gray-200"
                    : "border hover:bg-gray-100"
                }`}
              >
                {plan.highlighted
                  ? "Passer à l’offre Basique"
                  : "Commencer gratuitement"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
