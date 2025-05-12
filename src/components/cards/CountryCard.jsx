// CountryCard.jsx (Client component)

import Image from "next/image";
import CountryInfo from "../CountryInfo";
import { getAssetPath } from "@/utils/getAssetPath";

export default function CountryCard({ 
    country, 
    flag, 
    capital, 
    population, 
    surface, 
    language, 
    currency, 
    info,
    trans
}) {
    
    return (
        <div className="country-card">
            <div className="country-card__content">
                <h3 className="country-card__title">{country}</h3>
                <div className="country-card__content--top">
                    <div className="country-card__image">
                        <Image
                            src={flag}
                            alt={`${country} flag`}
                            height={300}
                            width={300}
                            priority
                        />
                    </div>
                    <div className="country-card__content--info">
                        <CountryInfo
                            icon={getAssetPath("/images/icons/location.svg")}
                            title={trans.inter_page.capital_title}
                            text={capital}
                        />
                        <CountryInfo
                            icon={getAssetPath("/images/icons/group.svg")}
                            title={trans.inter_page.population_title}
                            text={population}
                        />
                        <CountryInfo
                            icon={getAssetPath("/images/icons/surface.svg")}
                            title={trans.inter_page.surface_title}
                            text={surface}
                        />
                        <CountryInfo
                            icon={getAssetPath("/images/icons/language.svg")}
                            title={trans.inter_page.language_title}
                            text={language}
                        />
                        <CountryInfo
                            icon={getAssetPath("/images/icons/currency.svg")}
                            title={trans.inter_page.currency_title}
                            text={currency}
                        />
                    </div>
                </div>
                <div className="country-card__content--bottom">
                    <p>{info}</p>
                    <p>{trans.inter_page.source}</p>
                </div>
            </div>
        </div>
    );
}