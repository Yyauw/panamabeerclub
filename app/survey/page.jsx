import Image from "next/image";
import bgImage from "@/public/images/surveybg.jpg";
import surveyImage from "@/public/images/serveyimg.jpg";
import Link from "next/link";
import ProgressBar from "@/components/survey/ProgressBar";

export default function surveyPage() {
  return (
    <>
      <section className="h-screen  flex items-center bg-secondary/10">
        <div className="border-0  rounded-2xl w-[80vw] p-8 mx-auto">
          <div className="absolute top-0 left-0 z-10 m-6">salir gei</div>
          <div className="progress-wrapper flex">
            <ProgressBar></ProgressBar>
          </div>

          <h1 className="text-4xl text-center font-bold">Survey</h1>
          <p className="text-2xl text-center">
            Whats your favorite type of beer?
          </p>

          <div className="grid grid-cols-2 gap-4 p-6">
            <div className="auto-rows gap-1 grid" id="radioGroup">
              <div className="form-control bg-black p-3 w-100 my-auto rounded-md">
                <label className="label cursor-pointer">
                  <span className="label-text text-xl">Lager</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                  />
                </label>
              </div>
              <div className="form-control bg-black p-3 w-100 my-auto rounded-md">
                <label className="label cursor-pointer">
                  <span className="label-text text-xl">Stout</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                  />
                </label>
              </div>
              <div className="form-control bg-black p-3 w-100 my-auto rounded-md">
                <label className="label cursor-pointer">
                  <span className="label-text text-xl">Pale</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                  />
                </label>
              </div>
              <div className="form-control bg-black p-3 w-100 my-auto rounded-md">
                <label className="label cursor-pointer">
                  <span className="label-text text-xl">Dont know</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                  />
                </label>
              </div>
            </div>
            <Image
              src={surveyImage}
              layout="responsive"
              className="rounded-xl"
            ></Image>
          </div>
          <div className="button-group grid grid-cols-2 gap-4 mx-auto mt-6">
            <button className="btn btn-wide btn-secondary mx-auto">BACK</button>
            <button className="btn btn-wide btn-primary mx-auto">NEXT</button>
          </div>
        </div>
      </section>
    </>
  );
}
