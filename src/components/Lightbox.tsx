import { useEffect, useState } from 'react';

export default function Lightbox({ images, startIndex = 0, onClose }: { images: string[]; startIndex?: number; onClose: () => void }) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(images.length - 1, i + 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <button className="absolute top-6 right-6 text-white text-2xl" onClick={onClose}>✕</button>
      <button className="absolute left-6 text-white text-3xl" onClick={() => setIndex((i) => Math.max(0, i - 1))}>‹</button>
      <div className="max-w-[90%] max-h-[90%]">
        <img src={images[index]} alt={`Image ${index + 1}`} className="w-full h-auto max-h-[90vh] object-contain" />
      </div>
      <button className="absolute right-6 text-white text-3xl" onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}>›</button>
    </div>
  );
}
