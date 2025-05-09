// page.js (Dopcuments/Server component)

import PinCard from "@/components/cards/PinCard";
import { getTranslations } from "locales/translations";
import Image from "next/image";

export default async function BookPage(props) {
    const params = await props.params;
    const lang = params?.lang || 'es'; 
    const trans = await getTranslations(lang);

    return (
        <div className="documents-page">
            <h3>{trans.documents_page.title}</h3>

            <div className="documents-page__content">
                <Image 
                    src="/images/photos/board.jpg"
                    alt="board background"
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="documents-page__cards">
                    <PinCard
                        icon="/images/icons/peru.png"
                        text={trans.documents_page.national}
                        color="#355FB5"
                        link="https://www.canva.com/design/DAGiG0Jd6eM/R1GALqhZF-qsTWjkQuIcAA/view?utm_content=DAGiG0Jd6eM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h73cb9226ad"
                    />
                    <PinCard
                        icon="/images/icons/work.png"
                        text={trans.documents_page.work}
                        color="#85AF59"
                        link="https://www.canva.com/design/DAGiG0Jd6eM/R1GALqhZF-qsTWjkQuIcAA/view?utm_content=DAGiG0Jd6eM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h73cb9226ad"
                    />
                    <PinCard
                        icon="/images/icons/faq.png"
                        text={trans.documents_page.faq}
                        color="#D53686"
                        link="https://www.canva.com/design/DAGiG0Jd6eM/R1GALqhZF-qsTWjkQuIcAA/view?utm_content=DAGiG0Jd6eM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h73cb9226ad"
                    />
                </div>
            </div>
        </div>
    );
}