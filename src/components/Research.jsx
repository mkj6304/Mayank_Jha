import React from "react";

const research = [
  {
    title: "Unlocking Diabetes Prediction in the Era of Machine Learning",
    period: "Mar 2025",
    points: [
      "Proposed a voting ensemble combining Logistic Regression, Random Forest, and SVM.",
      "Achieved 85.8% accuracy on the PIMA Indian dataset; presented at State Level Conference.",
    ],
  },
  {
    title: "Explainable AI for Rare Dermatological Disease Diagnosis",
    period: "Jun 2025 – Present",
    points: [
      "Applied SHAP to interpret ML predictions on a rare skin disease dataset (UCI).",
      "Achieved accuracy up to 96% with interpretable SHAP feature visualizations.",
    ],
  },
];

const Research = () => {
  return (
    <section id="research" className="bg-gray-900 text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-10">
          Research
        </h2>
        <div className="space-y-6">
          {research.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-yellow-500/20 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-lg font-semibold text-yellow-200">{item.title}</h3>
                <span className="text-sm text-purple-300 mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
