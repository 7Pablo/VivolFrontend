// WorldButton.jsx (Client component)
'use client';

import Image from "next/image";
import { Dialog, Portal  } from "@chakra-ui/react"
import CountryCard from "../cards/CountryCard";

export default function WorldButton({ data, icon, trans }) {
    
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <div className="world-button">
                        <div className="world-button__country">
                            <div  className="world-button__country--image">
                                <Image
                                    src={icon}
                                    alt={`${data.title} logo`}
                                    height={40}
                                    width={40}
                                />
                            </div>
                            <h4>{data.title}</h4>
                        </div>
                    </div>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <CountryCard 
                                country={data.title}
                                flag={icon}
                                capital={data.capital}
                                population={data.population}
                                surface={data.surface}
                                language={data.language}
                                currency={data.currency}
                                info={data.info}
                                trans={trans}
                            />
                        </Dialog.Content>
                    </Dialog.Positioner>
                    </Portal>
            </Dialog.Root>
        </>
    );
}