// Footer.js (Server component)

import { getTranslations } from "locales/translations";
import { getCurrentYear } from 'utils/date';
import FoldButton from "./buttons/FoldButton";
import FooterItems from "./FooterItems";
import FooterContact from "./FooterContact";

export default async function Footer({ lang }) {
    const locale = lang || 'en';
    const trans = await getTranslations(locale);
    const currentYear = getCurrentYear();

    // Footer items
    const footItems = [
        { label: trans.footer.international, href: "/volunteer/international" },
        { label: trans.footer.national, href: "/volunteer/national" },
        { label: trans.footer.family, href: "/involve/family" },
        { label: trans.footer.project, href: "/involve/project" },
        { label: trans.footer.book, href: "/book" },
        { label: trans.footer.docs, href: "/documents" },
    ];

    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__about">
                    <h2>{trans.footer.about_title}</h2>
                    <p>{trans.footer.about_text}</p>
                </div>
                <div className="footer__nav">
                    <h2>{trans.footer.links_title}</h2>
                    <FooterItems 
                        footItems={footItems} 
                        creditsLabel={trans.footer.credits}
                    />
                </div>
                <div className="footer__contact">
                    <h2>{trans.footer.contact}</h2>
                    <div className="footer__contact--items">
                        <FooterContact
                            src="/images/icons/whatsapp.svg"
                            text='(+51) 903211488'
                            medium='51903211488'
                            type='whatsapp'
                        />
                        <FooterContact
                            src="/images/icons/mail.svg"
                            text='info@vidayvoluntariado.org'
                            medium="info@vidayvoluntariado.org"
                            type="email"
                        />
                    </div>
                </div>
            </div>
            <hr className="footer__line"/>
            <div className="footer__bottom">
                <small className="footer__bottom--text">© {currentYear} Vida y Voluntariado. {trans.footer.copyright}</small>
                <div className="footer__social-media">
                    <FoldButton 
                        src="/images/icons/instagram.svg"
                        alt="Vivol Instagram"
                        text="Instagram"
                        link="https://www.instagram.com/vivol_peru/"
                    />
                    <FoldButton 
                        src="/images/icons/tiktok.svg"
                        alt="Vivol Tik Tok"
                        text="Tik Tok"
                        link="https://www.tiktok.com/@vivol_peru?lang=es"
                    />
                    <FoldButton 
                        src="/images/icons/facebook.svg"
                        alt="Vivol Facebook"
                        text="Facebook"
                        link="https://www.facebook.com/profile.php?id=100080244291572"
                    />
                </div>
            </div>
        </div>
    );
}