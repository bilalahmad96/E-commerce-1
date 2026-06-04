/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

interface BlurredImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

/**
 * Robust utility to extract a lightweight low-resolution representation
 * from an Unsplash image URL. This creates a tiny image that loads instantly.
 */
const getLowResUrl = (url: string) => {
  if (!url) return null;
  if (url.includes('images.unsplash.com')) {
    let lowRes = url;
    // Replace width w=1000 or other sizes with a tiny w=30 for loading speed
    if (lowRes.includes('w=')) {
      lowRes = lowRes.replace(/w=\d+/, 'w=30');
    } else {
      lowRes += '&w=30';
    }
    // Replace high quality q=80 with a super thin q=10
    if (lowRes.includes('q=')) {
      lowRes = lowRes.replace(/q=\d+/, 'q=10');
    } else {
      lowRes += '&q=10';
    }
    // Instruct Unsplash to apply an on-server blur effect
    if (!lowRes.includes('blur=')) {
      lowRes += '&blur=8';
    }
    return lowRes;
  }
  return null;
};

export default function BlurredImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  ...props
}: BlurredImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Check if image is already loaded/cached instantly on mount
  useEffect(() => {
    if (imageRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  const lowResPlaceholder = getLowResUrl(src);
  // Elegant light grey transparent single pixel data URI as absolute base fallback
  const fallbackURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WA8AAcsBTe7YmR0AAAAASUVORK5CYII=';
  const placeholderSrc = lowResPlaceholder || fallbackURI;

  // Extract layout positioning or hover scaling settings to maintain original aesthetics beautifully
  const isObjectContain = className.includes('object-contain');
  const isObjectCover = className.includes('object-cover') || !isObjectContain;

  return (
    <div className={`relative overflow-hidden select-none ${className} ${containerClassName}`}>
      {/* 1. Low-Resolution Instant Blurred Placeholder Background */}
      <img
        src={placeholderSrc}
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full filter blur-xl scale-110 pointer-events-none transition-opacity duration-700 ease-in-out ${
          isObjectContain ? 'object-contain' : 'object-cover'
        } ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* 2. Cozy Glassmorphism Backdrop Filter and Pulse Skeleton Loader */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-neutral-150/10 dark:bg-zinc-900/10 backdrop-blur-md animate-pulse z-10 pointer-events-none"
        />
      )}

      {/* 3. Real High-Resolution Destination Image with elegant fade entrance */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full transition-opacity duration-700 ease-in-out ${
          isObjectContain ? 'object-contain' : 'object-cover'
        } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
}
