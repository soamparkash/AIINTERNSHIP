// app/(student)/student/assessments/page.tsx
"use client";

import React, { useState } from "react";

const SAMPLE_QUIZ = {
  title: "Cloud Architecture & Docker Microservices",
  questions: [
    {
      id: 1,
      prompt: "What is the primary benefit of containerizing microservices with Docker?",
      options: [
        "Guarantees hardware graphics acceleration",
        "Ensures consistent runtime environment across development and production",
        "Automatically eliminates all network latency",
        "Replaces the need for a Linux kernel",
      ],
      correctIndex: 1,
    },
    {
      id: 2,
      prompt: "In Kubernetes, which component maintains state and cluster configuration?",
      options: [
        "Kube-Proxy",
        "etcd",
        "Container Runtime (CRI)",
        "Kubelet",
      ],
      correctIndex: 1,
    },
    {
      id: 3,
      prompt: "Which AWS service is best suited for serverless event-driven microservices?",
      options: ["Amazon EC2", "AWS Lambda", "Amazon EBS", "AWS Direct Connect"],
      correctIndex: 1,
    },
  ],
};

export default function StudentAssessmentsPage() {
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>(
    {}
  );
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [completedTests, setCompletedTests] = useState<string[]>([
    "a1",
    "a2",
  ]);

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleNextQuestion = () => {
    if (currentQIndex < SAMPLE_QUIZ.questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setTestSubmitted(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    SAMPLE_QUIZ.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) correct++;
    });
    return Math.round((correct / SAMPLE_QUIZ.questions.length) * 100);
  };

  const resetQuiz = () => {
    setActiveTest(null);
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setTestSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm">
          Skill Verification Center
        </span>
        <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mt-2">
          Technical Skill Assessments
        </h1>
        <p className="font-body-md text-on-surface-variant">
          Complete proctored domain assessments to verify your skills and boost
          your AI allocation priority score.
        </p>
      </div>

      {/* If taking a test */}
      {activeTest ? (
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-outline-variant/30 shadow-md max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Proctored Assessment In Progress
              </span>
              <h2 className="font-headline-sm text-on-surface mt-0.5">
                {SAMPLE_QUIZ.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={resetQuiz}
              className="text-xs text-on-surface-variant hover:text-error"
            >
              Exit Quiz ✕
            </button>
          </div>

          {!testSubmitted ? (
            <div className="space-y-6">
              <div className="flex justify-between font-label-sm text-on-surface-variant">
                <span>
                  Question {currentQIndex + 1} of {SAMPLE_QUIZ.questions.length}
                </span>
                <span>Proctoring Secure Mode Active ✓</span>
              </div>

              <div className="space-y-3">
                <div className="font-headline-sm text-on-surface text-lg">
                  {SAMPLE_QUIZ.questions[currentQIndex].prompt}
                </div>
                <div className="space-y-2.5 pt-2">
                  {SAMPLE_QUIZ.questions[currentQIndex].options.map(
                    (opt, optIdx) => {
                      const isSelected =
                        selectedAnswers[currentQIndex] === optIdx;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() =>
                            handleSelectOption(currentQIndex, optIdx)
                          }
                          className={`w-full p-4 rounded-xl border text-left transition-all font-body-md ${
                            isSelected
                              ? "border-primary bg-primary-fixed/40 font-semibold text-on-surface shadow-xs"
                              : "border-outline-variant/30 bg-surface-container/40 hover:bg-surface-container text-on-surface-variant"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-outline-variant/20">
                <button
                  type="button"
                  disabled={selectedAnswers[currentQIndex] === undefined}
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-md disabled:opacity-50"
                >
                  {currentQIndex === SAMPLE_QUIZ.questions.length - 1
                    ? "Submit Assessment"
                    : "Next Question →"}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center mx-auto text-3xl font-bold">
                {calculateScore()}%
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-on-surface">
                  Assessment Completed Successfully!
                </h3>
                <p className="font-body-sm text-on-surface-variant">
                  Your score has been verified and securely synced with your AI
                  Allocation profile.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCompletedTests((prev) => [...prev, activeTest]);
                  resetQuiz();
                }}
                className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-label-md"
              >
                Return to Assessments Dashboard
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Assessments List */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: "a1",
              title: "Cloud Architecture & Docker Microservices",
              duration: "25 mins",
              questions: 3,
              score: "96th Percentile",
              status: completedTests.includes("a1")
                ? "Completed"
                : "Available",
            },
            {
              id: "a2",
              title: "PyTorch, FastAPI & Production ML Pipelines",
              duration: "30 mins",
              questions: 3,
              score: "94th Percentile",
              status: completedTests.includes("a2")
                ? "Completed"
                : "Available",
            },
            {
              id: "a3",
              title: "React 19, Next.js App Router & TypeScript",
              duration: "25 mins",
              questions: 3,
              score: "+8.0% Affinity Boost",
              status: completedTests.includes("a3")
                ? "Completed"
                : "Available",
            },
          ].map((test) => {
            const isDone = test.status === "Completed";
            return (
              <div
                key={test.id}
                className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-label-sm font-semibold ${
                        isDone
                          ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                          : "bg-primary-fixed text-primary"
                      }`}
                    >
                      {test.status}
                    </span>
                    <span className="font-label-sm text-primary font-bold">
                      {test.score}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-on-surface">
                    {test.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    {test.questions} Questions • {test.duration}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => !isDone && setActiveTest(test.id)}
                  className={`w-full py-2.5 rounded-xl font-label-md transition-all ${
                    isDone
                      ? "bg-surface-container text-on-surface-variant"
                      : "bg-primary text-on-primary hover:bg-primary-container"
                  }`}
                >
                  {isDone ? "Verified Score Locked ✓" : "Start Assessment →"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}