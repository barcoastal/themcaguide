/**
 * How an MCA really works — 4 steps.
 *
 * Step 4 is differentiated with red styling to visually land the "you pay
 * back way more" punch that the first three steps lead up to.
 */
export default function HowItWorks() {
  const steps = [
    {
      title: "You Apply",
      description: "Quick application, minimal paperwork. Sounds easy, right?",
      tone: "neutral" as const,
    },
    {
      title: "Get Funded Fast",
      description: "Money in your account in 1-3 days. That speed comes at a cost.",
      tone: "neutral" as const,
    },
    {
      title: "Daily Payments Taken",
      description:
        "10-25% of your daily sales are automatically withdrawn. Every. Single. Day.",
      tone: "neutral" as const,
    },
    {
      title: "You Pay Back Way More",
      description:
        "A $50K advance can cost you $67,500 or more. That's $17,500 in fees.",
      tone: "alert" as const,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2">
            How it works
          </p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            How an MCA Really Works
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            The 4 steps they don&apos;t always explain clearly
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const isAlert = step.tone === "alert";
            const cardClass = isAlert
              ? "bg-red-50 rounded-2xl p-6 text-center h-full border-2 border-red-100"
              : "bg-gray-50 rounded-2xl p-6 text-center h-full border-2 border-gray-100 hover:border-blue-200 transition-colors";
            const numClass = isAlert
              ? "inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold text-lg mb-4"
              : "inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg mb-4";
            const textClass = isAlert ? "text-gray-600" : "text-gray-500";
            return (
              <div key={i} className="relative">
                <div className={cardClass}>
                  <div className={numClass}>{i + 1}</div>
                  <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                  <p className={`${textClass} text-sm mt-2 leading-relaxed`}>
                    {step.description}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 text-2xl z-10">
                    &rarr;
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
