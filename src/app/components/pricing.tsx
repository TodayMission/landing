const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    features: [
      "Join up to 2 groups",
      "Play 1 challenge per day",
      "Limited challenge creation",
      "Limited categories",
      "Basic proof options",
      "Community support",
    ],
  },
  {
    name: "Basic",
    price: "$2",
    period: "/month",
    features: [
      "Join unlimited groups",
      "Play unlimited challenges",
      "Create unlimited challenges",
      "Access all challenge categories",
      "Advanced proof options",
      "Priority support",
    ],
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Simple Pricing</h2>
          <p className="text-gray-600 mt-3">
            Start for free and upgrade when you're ready.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Free Plan */}
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Free</h3>

            <div className="mt-4">
              <span className="text-5xl font-extrabold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>✓ Join up to 2 groups</li>
              <li>✓ Play 1 challenge per day</li>
              <li>✓ Limited challenge creation</li>
              <li>✓ Limited categories</li>
              <li>✓ Basic proof submissions</li>
            </ul>

            <button className="mt-8 w-full rounded-xl border py-3 font-medium hover:bg-gray-100">
              Start Free
            </button>
          </div>

          {/* Basic Plan */}
          <div className="relative rounded-3xl bg-black text-white p-8 shadow-xl">
            <span className="absolute right-6 top-6 rounded-full bg-green-500 px-3 py-1 text-sm font-semibold">
              Most Popular
            </span>

            <h3 className="text-2xl font-bold">Basic</h3>

            <div className="mt-4">
              <span className="text-5xl font-extrabold">$2</span>
              <span className="text-gray-300">/month</span>
            </div>

            <ul className="mt-8 space-y-4">
              <li>✓ Unlimited groups</li>
              <li>✓ Unlimited challenges</li>
              <li>✓ Unlimited challenge creation</li>
              <li>✓ All challenge categories</li>
              <li>✓ Advanced proof options</li>
              <li>✓ Priority support</li>
            </ul>

            <button className="mt-8 w-full rounded-xl bg-white py-3 font-semibold text-black hover:bg-gray-200">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}