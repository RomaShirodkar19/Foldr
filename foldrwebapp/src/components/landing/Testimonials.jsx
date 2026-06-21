import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../assets/data';

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const goTo = (index) => setActive(((index % total) + total) % total);

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#FFF0E4] sm:text-4xl">
            What Our Users Say
          </h2>

          <p className="mt-4 text-lg leading-6 text-white">
            Hear from our satisfied users about how our service has transformed
            their file management experience.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-xl">
          {/* Card stack */}
          <div className="relative">
            <button
              onClick={() => goTo(active - 1)}
              aria-label="Previous testimonial"
              className="
                absolute left-0 sm:-left-14 top-1/2 -translate-y-1/2 z-20
                w-9 h-9 rounded-full
                bg-white/10 hover:bg-white/20
                border border-white/10
                text-[#FFF0E4]
                flex items-center justify-center
                transition-colors duration-200
              "
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>

            <button
              onClick={() => goTo(active + 1)}
              aria-label="Next testimonial"
              className="
                absolute right-0 sm:-right-14 top-1/2 -translate-y-1/2 z-20
                w-9 h-9 rounded-full
                bg-white/10 hover:bg-white/20
                border border-white/10
                text-[#FFF0E4]
                flex items-center justify-center
                transition-colors duration-200
              "
            >
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </button>

            <div className="relative h-[380px] sm:h-[330px] mx-12 sm:mx-0">
            {testimonials.map((testimonial, index) => {
              const offset = (index - active + total) % total;
              if (offset > 2) return null;

              const isActive = offset === 0;
              const translateY = offset * 14;
              const scale = 1 - offset * 0.05;
              const rotate = isActive ? 0 : (index % 2 === 0 ? -2 : 2) * offset;

              return (
                <div
                  key={index}
                  aria-hidden={!isActive}
                  className="
                    absolute inset-0
                    rounded-2xl
                    bg-white
                    border border-black/5
                    p-7 sm:p-8
                    flex flex-col justify-between
                    transition-all duration-500 ease-out
                    overflow-hidden
                  "
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                    transformOrigin: 'bottom center',
                    zIndex: 10 - offset,
                    opacity: offset === 2 ? 0.5 : 1,
                    boxShadow: isActive
                      ? '0 10px 40px -10px rgba(0,121,121,0.25)'
                      : '0 4px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Folded corner motif — only on the active card */}
                  {isActive && (
                    <div
                      className="absolute top-0 right-0 w-0 h-0"
                      style={{
                        borderStyle: 'solid',
                        borderWidth: '0 32px 32px 0',
                        borderColor: 'transparent #24B1B1 transparent transparent',
                      }}
                    />
                  )}

                  {isActive && (
                    <div className="flex items-center gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill={starIndex < testimonial.rating ? '#24B1B1' : '#FFE0C5'}
                          aria-hidden="true"
                        >
                          <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.77l-5.18 2.67.99-5.77-4.19-4.08 5.79-.84z" />
                        </svg>
                      ))}
                      <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                    </div>
                  )}

                  <svg
                    className="w-7 h-7 text-[#24B1B1]/25 mb-2"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.333 19.111c-2.453 0-4.444-1.99-4.444-4.444 0-4.267 3.484-7.703 7.787-8.434l.658 1.823c-2.769.84-4.444 2.821-4.89 4.942.297-.099.643-.165 1-.165 2.454 0 4.445 1.99 4.445 4.445 0 2.453-1.99 4.444-4.445 4.444-.039 0-.075-.005-.111-.006v.395zm12.889 0c-2.453 0-4.444-1.99-4.444-4.444 0-4.267 3.484-7.703 7.787-8.434l.658 1.823c-2.77.84-4.444 2.821-4.89 4.942.296-.099.642-.165 1-.165 2.453 0 4.444 1.99 4.444 4.445 0 2.453-1.99 4.444-4.444 4.444-.04 0-.075-.005-.111-.006v.395z" />
                  </svg>

                  {isActive && (
                    <>
                      <p className="text-[15px] sm:text-base leading-relaxed text-black/80 flex-1">
                        {testimonial.quote}
                      </p>

                      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/5">
                        <img
                          className="h-11 w-11 rounded-full object-cover ring-2 ring-[#FFE0C5]"
                          src={testimonial.image}
                          alt={`${testimonial.name}'s photo`}
                        />
                        <div>
                          <p className="text-sm font-semibold text-black">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-black/50">
                            {testimonial.role} · {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === active}
                className="h-2 rounded-full transition-all duration-300 ease-out"
                style={{
                  width: index === active ? '22px' : '8px',
                  backgroundColor: index === active ? '#24B1B1' : '#FFE0C5',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;