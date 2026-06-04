export default function ContactPageComponent() {
  return (
    <main className="flex-1 bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Contactez-nous
          </h1>
          <p className="mt-4 text-gray-600">
            Une question, un retour ou besoin d’aide ? Nous serions ravis de vous lire.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm border">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Nom
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jean Dupont"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jean@example.com"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Sujet
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Comment pouvons-nous vous aider ?"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Écrivez votre message ici..."
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Nous répondons généralement sous 24 à 48 heures.
        </div>
      </div>
    </main>
  );
}