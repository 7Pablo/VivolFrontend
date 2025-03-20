import React from 'react';

import Image from 'next/image';

export default function FoldButton({ src, alt, text }) {
    return (
        <div className="fold-button">
                <Image
                  src={src}
                  alt={alt}
                  width={32}
                  height={32}
                  priority
                  className="fold-button__icon"
                />
                <span className="fold-button__text">{text}</span>
            </div>
    );
}