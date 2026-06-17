import Image from "next/image";
import Script from "next/script";
import { getSiteContent } from "@/lib/site-content";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main>
      <section className="hero" aria-label="Trio Luminesse introduction">
        <Image
          src="/images/trio-luminesse-hero.png"
          alt="A warm jazz soul trio performance"
          fill
          priority
          className="heroImage"
          sizes="100vw"
        />
        <div className="heroShade" />
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Trio Luminesse home">
            <span>Trio Luminesse</span>
          </a>
          <div className="navLinks">
            <a href="#sound">Sound</a>
            <a href="#occasions">Occasions</a>
            <a href="#booking">Booking</a>
          </div>
        </nav>
        <div className="heroContent" id="top">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.heroTitle}</h1>
          <p className="heroLead">{content.heroLead}</p>
          <div className="heroActions">
            <a className="button primary" href="#booking">
              {content.heroActions.primary}
            </a>
            <a className="button ghost" href="#sound">
              {content.heroActions.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="intro" id="sound">
        <div>
          <p className="sectionKicker">The sound</p>
          <h2>{content.aboutTitle}</h2>
        </div>
        <p>{content.aboutBody}</p>
      </section>

      <section className="soundStrip" aria-label="Musical qualities">
        {content.soundNotes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </section>

      <section className="splitBand" id="occasions">
        <div className="sectionHeader">
          <p className="sectionKicker">Occasions</p>
          <h2>Sets shaped around the room, the people, and the moment</h2>
        </div>
        <div className="packageGrid">
          {content.packages.map((item) => (
            <article className="packageCard" key={item.title}>
              <p>{item.idealFor}</p>
              <h3>{item.title}</h3>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="calendarBand">
        <div>
          <p className="sectionKicker">Availability</p>
          <h2>Current booking window</h2>
        </div>
        <div className="eventList">
          {content.events.map((event) => (
            <article className="eventRow" key={`${event.date}-${event.title}`}>
              <time>{event.date}</time>
              <div>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="booking" id="booking">
        <div>
          <p className="sectionKicker">Booking</p>
          <h2>Bring Trio Luminesse to your next gathering</h2>
          <p>
            Share the date, location, event type, and the feeling you want in the room.
            We will follow up with availability, lineup options, and the easiest next
            step for your event.
          </p>
        </div>
        <div className="bookingForm">
          <Script
            src="https://js-na2.hsforms.net/forms/embed/246518428.js"
            strategy="afterInteractive"
          />
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="6e0abaf6-545c-46f3-ab66-78973ae0382f"
            data-portal-id="246518428"
          />
        </div>
      </section>
    </main>
  );
}
