import React, { useEffect, useRef } from "react";
import "./testimonials.css";

const TESTIMONIALS = [
  {
    name: "Kalyani Dhawale",
    role: "UX/UI Designer at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQG6MG5MYIS5Lg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698935954939?e=1766016000&v=beta&t=NVpS06S8wEROQdcvSqVkozrdW3fyYGkmnWrp0uiTUvI",
    text: "Chetan consistently turned complex UX flows into clean, intuitive interfaces. His attention to detail and ability to translate design intent into responsive, production-ready components made collaboration seamless.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/kalyanidhawale/",
  },
  {
    name: "Ridima Udasi",
    role: "SDE-II at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQH0mkxMj7tQbA/profile-displayphoto-scale_400_400/B4DZo0nZvDHwAo-/0/1761819336921?e=1766016000&v=beta&t=plmBVjzXndeOn9U1CLONnTqpJJks8FZpGExUfztwCSc",
    text: "His routing migration work and system-level thinking stood out. Chetan approaches problems methodically and ensures solutions align with long-term architecture rather than just short-term fixes.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/ridima-udasi9598/",
  },
  {
    name: "Amarnath Verma",
    role: "Engineering Management Master at HashedIn",
    avatar: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    text: "Chetan takes ownership end-to-end. His work on multi-module navigation, permission workflows, and UI consistency significantly improved overall platform usability and reduced operational friction.",
    rating: 5,
  },
  {
    name: "Chandan Mishra",
    role: "SDE-II at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5103AQE24JWnWyiJLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1574151396488?e=1766016000&v=beta&t=E1_CD1PkpPtWprN4iiOf-PX13T7U7JC48VmlsQEV34A",
    text: "Chetan has a strong grasp of React fundamentals and modern patterns. His Vite migration, reusable hooks, and architecture refinements improved performance and made development easier for the entire team.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/chandan-kumar-mishra-691aba193/",
  },
  {
    name: "Aditya Saxena",
    role: "SDE-III at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQFCZO3yu1MwTw/profile-displayphoto-scale_400_400/B56Zei0pfLGQA4-/0/1750783401639?e=1766016000&v=beta&t=UF-fV1ul69Blj4Iy9zZyZlyKgJ6XTr-4O04sHJZeulo",
    text: "Chetan demonstrated solid engineering judgement across multiple modules. He breaks down complex tasks cleanly, communicates clearly, and consistently delivers maintainable, well-structured code.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/aditya-saxena-68b01a185/",
  },
  {
    name: "Abhinav Sharma",
    role: "Product Specialist at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQFEddyZtdryfA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716085474466?e=1766016000&v=beta&t=ptKNeJIZV2u9HJBPfnxWR8xCQlwK7V__SfwE5emx1H4",
    text: "He quickly understood functional requirements and translated them into stable UI workflows. Several enhancements he delivered directly improved the day-to-day efficiency of internal users.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/abhinav-sharma9132/",
  },
  {
    name: "Vipul Jha",
    role: "SDE-II at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQHReR24tZhODg/profile-displayphoto-scale_400_400/B56ZoFlkssKAAk-/0/1761030328106?e=1766016000&v=beta&t=-Th67A8fYIy0Adq8fCg8MYNaz0S8QP9PP19ciCdXSFw",
    text: "His work on deep-linking and navigation made the platform far more cohesive. Chetan thinks about edge cases proactively and builds solutions that hold up in real usage.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/thevipuljha/",
  },
  {
    name: "Harsh Shrinivas Toraskar",
    role: "Product Specialist at HashedIn",
    avatar: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    text: "Chetan consistently delivered improvements that made complex workflows easier to operate. His iterative approach brought clarity to several high-usage screens.",
    rating: 5,
  },
  {
    name: "Sonam Shivani",
    role: "Product Analyst at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4E03AQE-40w0Lxr98g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1634405983353?e=1766016000&v=beta&t=KmgIkfRmdOP89I3n4HphJSTS_UiUci3KVLPeFLg8coo",
    text: "Chetan delivers with precision and consistency. The global search and workflow refinements he contributed had a noticeable impact on operational efficiency.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/sonam-shivani-a3284820a/",
  },
  {
    name: "Harshita",
    role: "SDET-I at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQF5puwIeo0Fjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729593889508?e=1766016000&v=beta&t=RwCMjTpTmuJxxWS9OO-lfsF0r60M66cE4CQv__6DbYI",
    text: "He maintains a strong focus on stability and edge-case handling. The structured UI logic he built reduced regressions and made testing cycles more predictable.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/harshitha-raj-26446b197/",
  },
  {
    name: "Zuhair Abbas",
    role: "SDE-II at HashedIn",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQF5eXpA1bnHpA/profile-displayphoto-scale_400_400/B56Zpu8XlcG0Ag-/0/1762797911981?e=1766016000&v=beta&t=xkTik4Cq65wURRaUVZR4alIYiHQ_lF09dnUQNguf5Wo",
    text: "Chetan writes clean, modular code with a strong understanding of state management. His improvements across multiple modules made the codebase more reliable and easier to extend.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/zuhair-abbas07/",
  },
  {
    name: "Sujitha P",
    role: "Consultant at Deloitte",
    avatar: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    text: "He consistently delivered user-focused UI solutions with technical depth. The dashboards he contributed to improved both speed and clarity for end users.",
    rating: 5,
  },
  {
    name: "Kiran Daddala Kumar",
    role: "SDE-II at Deloitte",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4D03AQFg_nb8k72LTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1616848956820?e=1766016000&v=beta&t=fKij13U-adCfl4YtFrm9eYPPiap9FJiwlfxPqry6UAI",
    text: "Chetan brought clarity and performance improvements to several modules. His ability to break down complex UI flows and optimize them was extremely valuable.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/kirankumar-daddala-84a9241a0/",
  },
  {
    name: "Ayush Mishra",
    role: "Consultant at Deloitte",
    avatar: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    text: "He handled multi-step workflows with maturity and precision. Chetan’s optimization of rendering and state flow helped reduce UI bottlenecks significantly.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/ayush-mishra-a52aa4140/",
  },
  {
    name: "Aravindh Ravi",
    role: "Manager at Deloitte",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5103AQFQ1ALG7LIqeA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1522150125365?e=1766016000&v=beta&t=1id1wJp4uXxXVc4eLP0Vp0P4oJooYBzOebubG8iYYqg",
    text: "Chetan consistently delivered reliable, maintainable frontend solutions with minimal supervision. His ownership over navigation, permissions, and workflow improvements contributed strongly to the project's success.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/aravindh-ravi-46939366/",
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
    <section className="testimonials-section  mb-44 sm:pl-7">
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
                      {item.linkedin && (
                        <a
                        href={item.linkedin}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="white"
                          className="bi bi-linkedin hover:fill-[#0A66C2] transition-colors duration-200"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                      </a>
                      )}
                    </p>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>

                <div className="testimonial-stars">
                  {Array.from({ length: Number(item.rating || 0) }).map(
                    (_, i) => (
                      <span
                        key={`${item.name}-star-${i}`}
                        className="testimonial-star"
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    )
                  )}
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
