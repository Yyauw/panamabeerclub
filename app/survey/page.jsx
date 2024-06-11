"use client";
import Image from "next/image";
import bgImage from "@/public/images/surveybg.jpg";
import surveyImage from "@/public/images/serveyimg.jpg";
import Link from "next/link";
import ProgressBar from "@/components/survey/ProgressBar";
import SurveyOption from "@/components/survey/SurveyOption";
import { useState } from "react";

export default function surveyPage() {
  const [preferences, setPreferences] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const surveyQuestions = [
    {
      question: "Cual es tu estilo de cerveza preferido?",
      options: [
        { option: "Lager", value: "lager" },
        { option: "Pale", value: "pale" },
        { option: "Pilsner", value: "pilsner" },
        { option: "No se / otros", value: "" },
      ],
      img: surveyImage,
      name: "style",
    },
    {
      question: "Cual es tasdasdsadasdasdza preferido?",
      options: [
        { option: "La6969669ger", value: "lager" },
        { option: "Pale", value: "pale" },
        { option: "Pilsner", value: "pilsner" },
        { option: "No se / otros", value: "" },
      ],
      img: surveyImage,
      name: "sdddd",
    },
    {
      question: "Cual es tu estilo de cerveza preferido?",
      options: [
        { option: "Lager", value: "lager" },
        { option: "Pale", value: "pale" },
        { option: "Pilsner", value: "pilsner" },
        { option: "No se / otros", value: "" },
      ],
      img: surveyImage,
      name: "xdddddddddd",
    },
  ];

  const onClickHandler = (action) => {
    if (action === "sum") {
      if (currentQuestion >= surveyQuestions.length - 1) return;
      setCurrentQuestion((prev) => prev + 1);
    }
    if (action === "sub") {
      if (currentQuestion === 0) return;
      setCurrentQuestion((prev) => prev - 1);
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
  };

  return (
    <>
      <Image
        src={bgImage}
        alt="Background"
        layout="responsive"
        objectFit="cover"
        className="absolute top-0 left-0 z-0 h-screen w-screen bg-cover opacity-50"
      />

      <section className="h-screen  flex items-center relative z-20">
        <div className="border-0  rounded-2xl w-[80vw] p-8 mx-auto">
          <Link href="/" className="absolute top-0 left-0 z-10 m-6 font-bold">
            ← Go Back
          </Link>
          <div className="progress-wrapper flex">
            <ProgressBar></ProgressBar>
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
                return <SurveyOption value={i.value}>{i.option}</SurveyOption>;
              })}
            </div>
            <Image
              src={surveyImage}
              layout="responsive"
              className="rounded-xl"
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
              NEXT
            </button>
          </div>
        </div>
      </section>
    </>
  );
}