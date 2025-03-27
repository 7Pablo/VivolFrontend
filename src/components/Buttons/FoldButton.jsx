// Fold-button (Client component)
'use client';

import React from 'react';

import Image from 'next/image';

export default function FoldButton({ src, alt, text, link }) {
  return (
    <a 
      className="fold-button"
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
    >
        <Image
          src={src}
          alt={alt}
          width={32}
          height={32}
          priority
          className="fold-button__icon"
        />
        <span className="fold-button__text">{text}</span>
    </a>
);
}