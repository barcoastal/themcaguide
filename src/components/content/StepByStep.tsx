interface Step {
  title: string;
  description: string;
}

interface StepByStepProps {
  title: string;
  steps: Step[];
}

export default function StepByStep({ title, steps }: StepByStepProps) {
  return (
    <div className="my-8 not-prose">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
              {i + 1}
            </div>
            <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="font-bold text-gray-900">{step.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
