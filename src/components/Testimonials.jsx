import React, { useEffect, useRef } from "react";
import "./testimonials.css";

const TESTIMONIALS = [
  {
    name: "Mickael Grants",
    role: "CEO of Apples to Oranges",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Product Lead at NovaLabs",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80",
    text: "Chetan delivers pixel-perfect interfaces, cares about performance, and is extremely reliable in fast-paced environments.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Engineering Manager at GridPulse",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80",
    text: "From complex tables to delightful UX details, his work consistently raises the bar for our frontend codebase.",
    rating: 5,
  },
];

const Testimonials = () => {
  // Duplicate data so the animation can loop seamlessly
  const LOOP_DATA = [...TESTIMONIALS, ...TESTIMONIALS];

  const trackRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // allow pausing when user hovers / focuses a card
    let x = 0;
    let animationFrameId;
    const speed = 0.5; // px per frame - tweak for faster/slower

    const loop = () => {
      const totalWidth = track.scrollWidth / 2; // width of one full set

      // only advance the scroll when not paused
      if (!pausedRef.current) {
        x -= speed;

        // When one full set has moved out, jump forward by that width
        // because the second half is identical (LOOP_DATA)
        if (-x >= totalWidth) {
          x += totalWidth;
        }
      }

      track.style.transform = `translateX(${x}px)`;
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="testimonials-section  mb-44">
      <div className="testimonials-header max-w-[1200px] md:w-[90vw] w-full mx-auto text-left lg:text-left">
        <div className="flex flex-col gap-1">
          <span className="text-base leading-[24px] font-normal text-[#AAA6C3]">
            WHAT OTHERS SAY
          </span>
          <span className="md:text-[40px] text-[24px] leading-[40px] font-bold font-poppins text-[#9354E4]">
            Testimonials
          </span>
        </div>

        <p className="text-sm md:text-base text-gray-300  mt-3">
          Practical feedback from people I&apos;ve actually shipped work with —
          no fluff, just how I show up on real projects.
        </p>
      </div>

      <div className="testimonials-marquee">
        <div className="testimonials-track" ref={trackRef}>
          {LOOP_DATA.map((item, index) => (
            <article
              className="testimonial-card"
              key={item.name + index}
              // pause marquee on pointer hover and keyboard focus
              onPointerEnter={() => (pausedRef.current = true)}
              onPointerLeave={() => (pausedRef.current = false)}
              onFocus={() => (pausedRef.current = true)}
              onBlur={() => (pausedRef.current = false)}
              tabIndex={0}
            >
              <p className="testimonial-text">“{item.text}”</p>

              <div className="testimonial-footer">
                <div className="testimonial-user">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <p className="testimonial-name flex gap-3 items-center">
                      {item.name}{" "}
                      <a
                        href="https://www.linkedin.com/in/chetan-sharma-a098281a0/"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="white"
                          className="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                      </a>
                    </p>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>

                <div className="testimonial-stars">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
