"use client";
import Image from "next/image";
import bgImage from "@/public/images/surveybg.jpg";

import Link from "next/link";
import ProgressBar from "@/components/survey/ProgressBar";
import SurveyOption from "@/components/survey/SurveyOption";
import { useState, useEffect } from "react";
import { surveyQuestions } from "@/lib/surveyQuestions";
import { useRouter } from "next/navigation";

export default function SurveyPage({ setUserPreferences }) {
  const router = useRouter();
  const [preferences, setPreferences] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const savePreferences = async () => {
    const session = localStorage.getItem("userData");
    if (session) {
      setUserPreferences(preferences, session);
    }
  };

  const onClickHandler = (action) => {
    console.log(currentQuestion);
    if (surveyQuestions.length === currentQuestion + 1) {
      localStorage.setItem("preferences", JSON.stringify(preferences));
      savePreferences();
      router.push("user/catalog");
    }

    if (action === "sum") {
      if (currentQuestion >= surveyQuestions.length - 1) return;
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
    if (action === "sub") {
      if (currentQuestion === 0) return;
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const fieldName = surveyQuestions[currentQuestion].name;
    console.log(fieldName + " : " + value);
    console.log(preferences);
    setPreferences((prv) => {
      return { ...prv, [fieldName]: value };
    });
    setSelectedOption(value);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <>
          <Image
            src={bgImage}
            alt="Background"
            layout="responsive"
            objectFit="cover"
            className="absolute top-0 left-0 z-0 h-screen w-screen bg-cover opacity-50"
          />

          <section
            className="h-screen  flex items-center relative z-20"
            suppressHydrationWarning
          >
            <div className="border-0  rounded-2xl w-[80vw] p-8 mx-auto">
              <Link
                href="/"
                className="absolute top-0 left-0 z-10 m-6 font-bold"
              >
                ← Go Back
              </Link>
              <div className="progress-wrapper flex">
                <ProgressBar progress={currentQuestion}></ProgressBar>
              </div>

              <h1 className="text-4xl text-center font-bold">Survey</h1>
              <p className="text-2xl text-center">
                {surveyQuestions[currentQuestion].question}
              </p>

              <div className="grid grid-cols-2 gap-4 p-6">
                <div
                  className="auto-rows gap-1 grid"
                  id="radioGroup"
                  onChange={onChangeHandler}
                >
                  {surveyQuestions[currentQuestion].options.map((i) => {
                    return (
                      <SurveyOption
                        key={i.value}
                        value={i.value}
                        checked={selectedOption === i.value}
                      >
                        {i.option}
                      </SurveyOption>
                    );
                  })}
                </div>
                <Image
                  src={surveyQuestions[currentQuestion].img}
                  layout="responsive"
                  className="rounded-xl"
                  alt="survey image"
                ></Image>
              </div>
              <div className="button-group grid grid-cols-2 gap-4 mx-auto mt-6">
                <button
                  className="btn btn-wide btn-secondary mx-auto"
                  onClick={() => onClickHandler("sub")}
                >
                  BACK
                </button>
                <button
                  className="btn btn-wide btn-primary mx-auto"
                  onClick={() => onClickHandler("sum")}
                >
                  SIGUIENTE
                </button>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
