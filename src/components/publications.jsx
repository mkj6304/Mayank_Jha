import React from "react";

const publications = [
  {
    title:
      "Explainable AI for Rare Dermatological Disease Diagnosis using SHAP on Clinical Dataset",
    journal: "The Indian Journal of Technical Education (IJTE)",
    details: "Vol. 49, No. 2 · April–June 2026 · Pages 62–68",
    authors: "Shweta Kharya · Mayank Kumar Jha · Bhumika Maheshwari",
    points: [
      "Developed an XGBoost-based 6-class dermatological disease classification model using the UCI Dermatology dataset.",
      "Used 366 patient records with 33 clinical attributes covering 6 dermatological disease classes.",
      "Applied SHAP for global and local interpretability to understand the clinical features influencing model predictions.",
      "Achieved 97.2% accuracy, 96.8% precision, 96.5% recall, and 96.6% F1-score using 5-fold stratified cross-validation.",
    ],
    tags: ["XGBoost", "SHAP", "Explainable AI", "Healthcare AI"],
    publicationUrl: "https://www.ijteonline.in//assets/uploads/issue_pdf/1784178572.pdf",
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="bg-gray-900 text-gray-100 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-2">
            Research & Academic Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300">
            Publications
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Peer-reviewed research exploring practical applications of
            Artificial Intelligence, Machine Learning, and Explainable AI.
          </p>
        </div>

        {/* Publication Cards */}
        <div className="space-y-8">
          {publications.map((paper, idx) => (
            <article
              key={idx}
              className="group relative bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg
                         border border-gray-700
                         hover:border-yellow-300/40
                         hover:shadow-yellow-500/10
                         transition-all duration-300"
            >
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-green-400/10 text-green-300 text-xs font-semibold border border-green-400/20">
                      Published
                    </span>

                    <span className="text-xs text-purple-300">
                      April–June 2026
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-yellow-200 leading-snug">
                    {paper.title}
                  </h3>
                </div>

                {/* Publication Icon */}
                <div className="hidden md:flex shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/20 items-center justify-center text-2xl">
                  📄
                </div>
              </div>

              {/* Journal */}
              <div className="mb-5">
                <p className="text-purple-300 font-medium">
                  {paper.journal}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {paper.details}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  <span className="text-gray-400">Authors:</span>{" "}
                  {paper.authors}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-gray-900/70 rounded-xl p-3 text-center border border-gray-700">
                  <p className="text-lg font-bold text-yellow-300">97.2%</p>
                  <p className="text-[11px] text-gray-400">Accuracy</p>
                </div>

                <div className="bg-gray-900/70 rounded-xl p-3 text-center border border-gray-700">
                  <p className="text-lg font-bold text-yellow-300">96.8%</p>
                  <p className="text-[11px] text-gray-400">Precision</p>
                </div>

                <div className="bg-gray-900/70 rounded-xl p-3 text-center border border-gray-700">
                  <p className="text-lg font-bold text-yellow-300">96.5%</p>
                  <p className="text-[11px] text-gray-400">Recall</p>
                </div>

                <div className="bg-gray-900/70 rounded-xl p-3 text-center border border-gray-700">
                  <p className="text-lg font-bold text-yellow-300">96.6%</p>
                  <p className="text-[11px] text-gray-400">F1 Score</p>
                </div>
              </div>

              {/* Description */}
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                {paper.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {paper.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 rounded-full bg-gray-900 text-gray-300 text-xs border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-7 pt-5 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-xs text-gray-500">
                  <span className="text-gray-400">ISSN:</span> 0971-3034
                </div>

                <a
                  href={paper.publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg
                             bg-yellow-300 text-gray-900 font-semibold text-sm
                             hover:bg-yellow-200 transition-all duration-200
                             hover:shadow-lg hover:shadow-yellow-400/20"
                >
                  View Publication
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;