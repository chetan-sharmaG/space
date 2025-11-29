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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let animationFrameId;
    const speed = 0.5; // px per frame - tweak for faster/slower

    const loop = () => {
      const totalWidth = track.scrollWidth / 2; // width of one full set

      x -= speed;

      // When one full set has moved out, jump forward by that width
      // because the second half is identical (LOOP_DATA)
      if (-x >= totalWidth) {
        x += totalWidth;
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
    <section className="testimonials-section">
      <div className="testimonials-header max-w-[1200px] w-full mx-auto text-left lg:text-left">
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
            <article className="testimonial-card" key={item.name + index}>
              <p className="testimonial-text">“{item.text}”</p>

              <div className="testimonial-footer">
                <div className="testimonial-user">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <p className="testimonial-name">{item.name}</p>
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
