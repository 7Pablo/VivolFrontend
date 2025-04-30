// WorldDropdown (Client component)
'use client' 

import { Collapsible } from '@chakra-ui/react';
import { ChevronDown } from "lucide-react";

export default function WorldDropdown({ text, children }) {
    return (
        <div className="world-dropdown">
            {/* Screen > 800px */}
            <div className='world-dropdown--big'>
                <Collapsible.Root defaultOpen disabled>
                    <Collapsible.Trigger>
                        <h2>{text}</h2>
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                        {children}
                    </Collapsible.Content>
                </Collapsible.Root>
            </div>

            {/* Screen < 800px */}
            <div className='world-dropdown--small'>
                <Collapsible.Root>
                    <Collapsible.Trigger>
                        <h2>
                            {text}
                            <ChevronDown />
                        </h2>
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                        {children}
                    </Collapsible.Content>
                </Collapsible.Root>
            </div>
        </div>
        
    );
}