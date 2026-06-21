import { ArrowRight } from 'lucide-react';

const Cta = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            group relative
            rounded-3xl
            bg-[#FFF0E4]
            overflow-hidden
            px-8 py-16
            sm:px-16 sm:py-20
            text-center
          "
        >
          {/* Folded corner — lifts further open on hover */}
          <div
            className="
              absolute top-0 right-0
              w-0 h-0
              transition-transform duration-500 ease-out
              origin-top-right
              group-hover:scale-125
            "
            style={{
              borderStyle: 'solid',
              borderWidth: '0 56px 56px 0',
              borderColor: 'transparent #24B1B1 transparent transparent',
            }}
          />

          <p className="text-sm font-semibold tracking-wide text-[#007979] uppercase">
            Start free, upgrade anytime
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-black sm:text-5xl max-w-2xl mx-auto leading-tight">
            Your files deserve a better home
          </h2>

          <p className="mt-5 text-lg text-black/60 max-w-xl mx-auto">
            Join thousands of teams who store, share, and organize their work
            with Foldr — no credit card required.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="
                group/btn
                inline-flex items-center gap-2
                bg-black text-[#FFF0E4]
                px-8 py-3.5
                rounded-full
                font-semibold
                transition-all duration-200
                hover:bg-[#007979]
                hover:scale-[1.03]
                active:scale-[0.98]
              "
            >
              Get started for free
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                strokeWidth={2.5}
              />
            </button>

            <button
              className="
                inline-flex items-center gap-2
                px-8 py-3.5
                rounded-full
                font-semibold
                text-black
                border border-black/15
                transition-all duration-200
                hover:border-black/30
                hover:bg-black/5
              "
            >
              Talk to sales
            </button>
          </div>

          <p className="mt-8 text-xs text-black/40">
            Free for individuals · No setup fees · Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;