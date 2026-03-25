export default function HowItWorks() {
  const steps = [
    { icon: "📝", title: "You Apply", description: "Quick application, minimal paperwork. Sounds easy, right?" },
    { icon: "💰", title: "Get Funded Fast", description: "Money in your account in 1-3 days. That speed comes at a cost." },
    { icon: "📉", title: "Daily Payments Taken", description: "10-25% of your daily sales are automatically withdrawn. Every. Single. Day." },
    { icon: "💸", title: "You Pay Back Way More", description: "A $50K advance can cost you $67,500 or more. That's $17,500 in fees." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How an MCA Really Works</h2>
          <p className="mt-3 text-lg text-gray-500">The 4 steps they don&apos;t always explain clearly</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-gray-50 rounded-2xl p-6 text-center h-full border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{step.description}</p>
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 text-2xl z-10">&rarr;</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
