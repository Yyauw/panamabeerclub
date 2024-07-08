import Micomponente from "@/components/Micomponente";
import Image from "next/image";
import señor_cerveza from "@/public/images/heroimage.png";
import Link from "next/link";
import ranadorada from "@/public/images/ranadorada.svg";
import tresgatos from "@/public/images/tresgatos.svg";
import casabruja from "@/public/images/casa bruja.svg";
import cladestina from "@/public/images/clandestina.svg";
import cervezagrupo from "@/public/images/pintas-cerveza-grupo.svg";
import cervezaestudiar from "@/public/images/cervezas-estudio.svg";
import takesurvey from "@/public/images/takesurvey.svg";
import chooseplan from "@/public/images/chooseplan.svg";
import pickyourbeer from "@/public/images/pickyourbeer.svg";
import checkpricing from "@/public/images/checkpricing.svg";
import bglanding from "@/public/images/bg-image-landing.svg";
import cervezafooter from "@/public/images/bg-cerveza-footer.svg";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <main>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={bglanding}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <section className=" my-auto pb-20 h-screen">
        <Navbar></Navbar>
        <div className="hero h-full">
          <div className="hero-content flex flex-col lg:flex-row-reverse lg:mr-auto">
            <div className="hidden relative shadow-2xl lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-[44vw] md:block">
              <Image src={señor_cerveza} layout="responsive" />
            </div>
            <div className="max-w-full lg:max-w-[30vw] my-auto lg:ms-10 p-4 lg:p-0">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Hand-Craft Beer <br />
                In <span className="text-primary">One Click</span>
              </h1>
              <p className="py-4 lg:py-6">
                <span className="text-lg lg:text-xl">
                  Welcome to PanamaBeerClub, Elevate your beer journey with our
                  exclusive subscription service. Join the community of beer
                  enthusiasts and embark on a flavor-filled adventure with every
                  bottle.
                </span>
              </p>
              <Link href="/login" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-cervecerias relative z-10">
        <div className="banner-socios grid grid-cols-3">
          <Image src={ranadorada} alt="Rana Dorada" height={115.49} />
          <Image src={tresgatos} alt="Tres Gatos" height={133.59} />
          <Image src={casabruja} alt="Casa Bruja" height={116.35} />
          <Image src={cladestina} alt="Clandestina" height={118.94} />
        </div>
      </div>
      <section className="section-quehacemos">
        <div className="item-quehacemos">
          <Image src={cervezagrupo} alt="Cerveza Grupo" height={377} />
          <div>
            <h4>Who We Are?</h4>
            <p>
              PanamaBeerClub is a team of dedicated beer enthusiasts with a
              shared mission: to curate the finest selection of craft beers and
              deliver them straight to your doorstep.
            </p>
          </div>
        </div>

        <div className="item-quehacemos">
          <div>
            <h4>What We Do?</h4>
            <p>
              Our subscription service is designed to take the guesswork out of
              finding your perfect beer. Through a quick survey, we learn about
              your taste preferences, flavor profiles you enjoy, and even your
              brewing style.
            </p>
          </div>
          <Image src={cervezaestudiar} alt="Cerveza Estudiar" height={377} />
        </div>
      </section>
      <section className="section-comopedir">
        <div>
          <h4>
            Get Your Hand-Craft Beer <br /> In 3 Easy Steps
          </h4>
        </div>
        <div className="comopedir-pasos">
          <div>
            <Image src={chooseplan} alt="Choose Plan" height={200} />
            <div className="comopedir-description">
              <h5>Choose A Plan</h5>
              <p>
                Create an account and Begin your <br /> craft beer journey by
                choosing a <br /> plan.
              </p>
            </div>
          </div>
          <div>
            <Image src={takesurvey} alt="Take Survey" height={200} />
            <div className="comopedir-description">
              <h5>Take The Survey</h5>
              <p>
                After choosing a plan <br /> take our <br /> quick and easy
                survey.
              </p>
            </div>
          </div>
          <div>
            <Image src={pickyourbeer} alt="Pick Your Beer" height={200} />
            <div className="comopedir-description">
              <h5>Pick Your Beer</h5>
              <p>
                Pick the beer that better suits you <br /> or leave the choice
                to our experts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pricing">
        <div className="pricing-title">
          <h4>Plans & Pricing</h4>
          <p>subscription plans that suits your needs</p>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card-blue">
            <div className="flex h-[100%] flex-col">
              <h5>Basic</h5>
              <p>$14.99 Per Delivery</p>
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">6 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">
                    20+ varieties of Craft-Beer
                  </span>
                </li>
              </ul>
              <button className="btn-pricing mt-auto">Select</button>
            </div>
          </div>
          <div className="pricing-card-brown">
            <div className="flex h-[100%] flex-col">
              <h5>Experto</h5>
              <p>$29.99 Per Delivery</p>
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">12 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">
                    20+ varieties of Craft-Beer
                  </span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">Merchandising</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">Informational Brochure</span>
                </li>
              </ul>

              <button className="btn-pricing mt-auto">Select</button>
            </div>
          </div>
          <div className="pricing-card-blue">
            <div className="flex h-[100%] flex-col">
              <h5>Guru</h5>
              <p>$49.99 Per Delivery</p>
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">24 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">
                    20+ varieties of Craft-Beer
                  </span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">Merchandising</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">Informational Brochure</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span className="text-start">Special Rewards</span>
                </li>
              </ul>

              <button className="btn-pricing mt-auto">Select</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-takesurvey relative mb-0">
        <div className="absolute left-0 w-full h-full">
          <Image
            src={cervezafooter}
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 p-4 text-center lg:text-left">
          <h4 className="text-2xl lg:text-4xl font-bold mb-4 md:text-center">
            Your <span className="text-primary">Journey</span> Shouldn’t End
            Here.
          </h4>
          <p className="text-lg lg:text-xl mb-6 md:text-center">
            Start Your Journey In The World Of Craft-Beer Now.
          </p>
          <p className="text-center">
            <Link
              href="/login"
              className="btn btn-primary text-center text-xl px-24"
            >
              Start Your Journey
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
