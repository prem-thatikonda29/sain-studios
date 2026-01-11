"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

interface CarouselProps {
  items: React.ReactNode[];
}

// Renamed conceptually: This is now a Grid, not a Carousel.
// Keeping export name for compatibility with ServicesOverview.
export const Carousel = ({ items }: CarouselProps) => {
  return (
    <CarouselContext.Provider value={{ onCardClose: () => {}, currentIndex: 0 }}>
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-8 pb-20 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                },
              }}
              key={"card" + index}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};


export const CarouselCard = ({
  card,
  index,
  layout = false,
}: {
  card: CardData;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => setOpen(false));

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-neutral-900 h-fit  z-[60] my-10 rounded-3xl font-sans relative overflow-hidden"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-transparent border border-white/20 rounded-full flex items-center justify-center z-50 mr-4 mt-4"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6 text-white/20" />
              </button>
              
              <motion.div
                layoutId={layout ? `image-${card.title}` : undefined}
                className="h-80 w-full md:rounded-t-3xl absolute top-0 inset-x-0 z-0"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 70%, transparent 90%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 70%, transparent 90%)',
                }}
              >
                <img 
                   src={card.src} 
                   alt={card.title} 
                   className="object-cover w-full h-full"
                />
              </motion.div>

              <div className="p-4 md:p-10 relative z-10 mt-64 border-t border-white/10 bg-neutral-900/50 backdrop-blur-md">
                <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className="text-base font-medium text-white"
                >
                    {card.category}
                </motion.p>
                <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="text-2xl md:text-5xl font-semibold text-white mt-4"
                >
                    {card.title}
                </motion.p>
                <div className="py-10 text-neutral-200">{card.content}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 w-full h-72 md:h-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8 h-full flex flex-col justify-end items-start w-full">
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        {/* Placeholder gradient since we don't have images yet */}
         <motion.div 
            layoutId={layout ? `image-${card.title}` : undefined}
            className="absolute inset-0 z-10"
            style={{
              maskImage: 'linear-gradient(to bottom, #000 70%, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 70%, transparent 90%)',
            }}
         >
            <img 
               src={card.src} 
               alt={card.title} 
               className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
         </motion.div>
      </motion.button>
    </>
  );
};


export type CardData = {
  src?: string;
  title: string;
  category: string;
  content: React.ReactNode;
};
