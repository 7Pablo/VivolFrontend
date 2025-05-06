// page.js (International Volunteer Page/Server component)

import Image from "next/image";
import { getTranslations } from "locales/translations";
import ProgramCard from "@/components/cards/ProgramCard";
import IconTextCard from "@/components/cards/IconTextCard";
import ProcessCard from "@/components/cards/ProcessCard";
import WorldButton from "@/components/buttons/WorldButton";
import WorldDropdown from "@/components/buttons/WorldDropdown";

export default async function InternationalPage(props) {
  const params = await props.params;
  const lang = params?.lang || 'es'; 
  const trans = await getTranslations(lang);

  return (
    <div className="inter-page">
      
      {/* Intro */}
      <div className="inter-page__intro">
        <Image
          src="/images/photos/vivol-torii.jpg"
          alt={trans?.alt?.inter_image1 || "Volunteer in front of a Torii gate"}
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 55%' }}
          priority
        />
        <div className="inter-page__intro--overlay">
          <div className="inter-page__intro--text">
            <h1>{trans.inter_page.title}</h1>
            <p>{trans.inter_page.intro_text}</p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="inter-page__info">
        <div className="inter-page__info--title">
          <h1>{trans.inter_page.info_title}</h1>
          <Image
            src="/images/photos/icye-logo-simple.svg"
            alt="ICYE logo"
            height={100}
            width={100}
          />
        </div>
        <div className="inter-page__info--left">
          <div className="inter-page__info--image-1">
            <Image
              src="/images/photos/vivol-alemania.jpg"
              alt={trans?.alt?.inter_image2 || "Volunteer in Germany in front of a tower"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="inter-page__info--text">
            {trans.inter_page.info_text1}
          </p>
        </div>
        <div className="inter-page__info--right">
          <p className="inter-page__info--text">
            {trans.inter_page.info_text2}
          </p>
          <div className="inter-page__info--image-2">
            <Image
              src="/images/photos/vivol-paz.jpg"
              alt={trans?.alt?.inter_image3 || "Volunteer in front of a statue"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="inter-page__info--left">
          <div className="inter-page__info--image-3">
            <Image
              src="/images/photos/vivol-pileta.jpeg"
              alt={trans?.alt?.inter_image4 || "Volunteer in front of a fountain"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="inter-page__info--text">
            {trans.inter_page.info_text3}
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="inter-page__benefits">
        <div className="inter-page__benefits--text">
          <h3>{trans.inter_page.benefits_title}</h3>
          <p>{trans.inter_page.benefits_text}</p>
        </div>
        <div className="inter-page__benefits--cards">
          <ProgramCard
            icon="/images/icons/star.svg"
            title={trans.inter_page.tangibles.title}
            listItems={[
              trans.inter_page.tangibles.bullet1,
              trans.inter_page.tangibles.bullet2,
              trans.inter_page.tangibles.bullet3,
              trans.inter_page.tangibles.bullet4,
              trans.inter_page.tangibles.bullet5,
              trans.inter_page.tangibles.bullet6,
              trans.inter_page.tangibles.bullet7,
              trans.inter_page.tangibles.bullet8,
              trans.inter_page.tangibles.bullet9
            ]}
            color="#85AF59"
          />
          <ProgramCard
            icon="/images/icons/heart.svg"
            title={trans.inter_page.intangibles.title}
            listItems={[
              trans.inter_page.intangibles.bullet1,
              trans.inter_page.intangibles.bullet2,
              trans.inter_page.intangibles.bullet3,
              trans.inter_page.intangibles.bullet4,
              trans.inter_page.intangibles.bullet5,
              trans.inter_page.intangibles.bullet6,
              trans.inter_page.intangibles.bullet7
            ]}
            color="#1583F0"
          />
          <ProgramCard
            icon="/images/icons/x.svg"
            title={trans.inter_page.contain.title}
            listItems={[
              trans.inter_page.contain.bullet1,
              trans.inter_page.contain.bullet2,
              trans.inter_page.contain.bullet3
            ]}
            color="#BF0000"
          />
        </div>
      </div>

      {/* Process */}
      <div className="inter-page__process">
            <div className="inter-page__background">
              <Image
                src="/images/photos/alemania.jpg"
                alt="Germany"
                fill
                style={{ objectFit: 'cover'}}
              />
            </div>
            <div className="inter-page__process--overlay">
              <div className="inter-page__process--text">
                <h3>{trans.inter_page.process_title}</h3>
                <h2>{trans.inter_page.process_subtitle1}</h2>
              </div>
              <div className="inter-page__process--requirements">
                <IconTextCard
                  icon="/images/icons/edad.svg"
                  text={trans.inter_page.reqs.req1}
                />
                <IconTextCard
                  icon="/images/icons/saludo.png"
                  text={trans.inter_page.reqs.req2}
                />
                <IconTextCard
                  icon="/images/icons/bandera.svg"
                  text={trans.inter_page.reqs.req3}
                />
                <IconTextCard
                  icon="/images/icons/registro.svg"
                  text={trans.inter_page.reqs.req4}
                />
                <IconTextCard
                  icon="/images/icons/manos.svg"
                  text={trans.inter_page.reqs.req5}
                />
                <IconTextCard
                  icon="/images/icons/boleto.svg"
                  text={trans.inter_page.reqs.req6}
                />
              </div>
              <div className="inter-page__process--text">
                <h2>{trans.inter_page.process_subtitle2}</h2>
              </div>
              <div className="inter-page__process--steps">
                <div className="inter-page__process--half">
                  <ProcessCard
                    number="1"
                    text={trans.inter_page.steps.step1}
                    color="#1683F0"
                  />
                  <ProcessCard
                    number="2"
                    text={trans.inter_page.steps.step2}
                    color="#85AF59"
                  />
                  <ProcessCard
                    number="3"
                    text={trans.inter_page.steps.step3}
                    color="#B490F0"
                  />
                  <ProcessCard
                    number="4"
                    text={trans.inter_page.steps.step4}
                    color="#E1BD2A"
                  />
                  <ProcessCard
                    number="5"
                    text={trans.inter_page.steps.step5}
                    color="#2C4B8C"
                  />
                </div>
                <div className="inter-page__process--half">
                  <ProcessCard
                    number="6"
                    text={trans.inter_page.steps.step6}
                    color="#C90707"
                  />
                  <ProcessCard
                    number="7"
                    text={trans.inter_page.steps.step7}
                    color="#00BFBF"
                  />
                  <ProcessCard
                    number="8"
                    text={trans.inter_page.steps.step8}
                    color="#F0A616"
                  />
                  <ProcessCard
                    number="9"
                    text={trans.inter_page.steps.step9}
                    color="#26824A"
                  />
                  <ProcessCard
                    number="10"
                    text={trans.inter_page.steps.step10}
                    color="#D53686"
                  />
                </div>
              </div>
            </div>
      </div>

      {/* Destination */} 
      <div className="inter-page__destination">
        <h3>{trans.inter_page.destination_title}</h3>
        <div className="inter-page__destination--continents">
            <div className="inter-page__destination--continents-america">
              <WorldDropdown
                text={trans.inter_page.america.title}
              >
                {Object.entries(trans.inter_page.america)
                  .filter(([key]) => key !== "title")
                  .map(([countryKey, countryData]) => (
                    <WorldButton
                      key={countryKey}
                      data={countryData}
                      icon={`/images/countries/${countryKey}.svg`}
                      trans={trans}
                    />
                ))}
              </WorldDropdown>
            </div>
            <div className="inter-page__destination--continents-africa">
              <WorldDropdown
                text={trans.inter_page.africa.title}
              >
                {Object.entries(trans.inter_page.africa)
                  .filter(([key]) => key !== "title")
                  .map(([countryKey, countryData]) => (
                    <WorldButton
                      key={countryKey}
                      data={countryData}
                      icon={`/images/countries/${countryKey}.svg`}
                      trans={trans}
                    />
                ))}
              </WorldDropdown>
            </div>
            <div className="inter-page__destination--continents-asia">
              <WorldDropdown
                text={trans.inter_page.asia.title}
              >
                {Object.entries(trans.inter_page.asia)
                  .filter(([key]) => key !== "title")
                  .map(([countryKey, countryData]) => (
                    <WorldButton
                      key={countryKey}
                      data={countryData}
                      icon={`/images/countries/${countryKey}.svg`}
                      trans={trans}
                    />
                ))}
              </WorldDropdown>
            </div>
            <div className="inter-page__destination--continents-europe">
              <WorldDropdown
                text={trans.inter_page.europe.title}
              >
                {Object.entries(trans.inter_page.europe)
                  .filter(([key]) => key !== "title")
                  .map(([countryKey, countryData]) => (
                    <WorldButton
                      key={countryKey}
                      data={countryData}
                      icon={`/images/countries/${countryKey}.svg`}
                      trans={trans}
                    />
                ))}
              </WorldDropdown>
            </div>
        </div>
      </div>
    </div>
  );
}