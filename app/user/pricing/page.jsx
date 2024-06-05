import checkpricing from "@/public/images/checkpricing.svg";
import Image from "next/image";

export default function pricingPage() {
  return (
    <>
      <section className="section-pricing " style={{ paddingTop: 0 }}>
        <div className="pricing-cards">
          <div className="pricing-card-blue">
            <div className="flex h-[100%] flex-col">
              <h5>Basic</h5>
              <p>$14.99 Per Delivery</p>
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>6 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ varieties of Craft-Beer</span>
                </li>
              </ul>
              <button className="btn-pricing mt-auto">Select</button>
            </div>
          </div>
          <div className="pricing-card-brown">
            <div className="flex h-[100%] flex-col">
              <h5>Basic</h5>
              <p>$29.99 Per Delivery</p>
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>12 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ varieties of Craft-Beer</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Merchandising</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Informational Brochure</span>
                </li>
              </ul>

              <button className="btn-pricing mt-auto">Select</button>
            </div>
          </div>
          <div className="pricing-card-blue">
            <div className="flex h-[100%] flex-col">
              <h5>Basic</h5>
              <p>$49.99 Per Delivery</p>
              <ul>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>24 Craft-beers</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>20+ varieties of Craft-Beer</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Merchandising</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Informational Brochure</span>
                </li>
                <li>
                  <Image src={checkpricing} alt="Check Pricing" />
                  <span>Special Rewards</span>
                </li>
              </ul>

              <button className="btn-pricing mt-auto">Select</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
