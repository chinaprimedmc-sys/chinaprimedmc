"use client";

import { ArrowRight, Check } from "lucide-react";
import { useMemo } from "react";
import { calculateJourneyPrice } from "@/lib/tours/journey-price";

import { TourDayAccordion } from "@/features/tours/detail/tour-day-accordion";
import {
  freeDayServices,
  useJourneyConfiguration,
  type FreeDayServiceId,
  type JourneyPaceId,
} from "@/features/tours/detail/journey-configuration";
import type { TourDetailDay, TourDetailModel } from "@/features/tours/detail/tour-detail-model";
import { TrackedTourLink } from "@/features/tours/detail/tour-detail-interactions";
import styles from "@/features/tours/detail/journey-pace-planner.module.css";

export function JourneyPacePlanner({ model }: { model: TourDetailModel }) {
  const { pace, setPace, freeDayService, setFreeDayService, guests, setGuests, priceFromUsd } =
    useJourneyConfiguration();

  const variant = useMemo(
    () => buildVariant(pace, model, freeDayService),
    [freeDayService, model, pace],
  );
  const basePrice = model.price?.fromUsd;
  const selectedService = freeDayServices.find((item) => item.id === freeDayService);

  return (
    <div className={styles.planner}>
      <section className={styles.compareSection} id="pace" aria-labelledby="pace-title">
        <div className={styles.shell}>
          <div className={styles.heading}>
            <h2 id="pace-title">Make this journey yours.</h2>
            <p>Two quick choices update your price and day-by-day plan below.</p>
          </div>

          <div className={styles.choiceGroupHeader}>
            <div>
              <strong>Choose your pace</strong>
              <small>Both versions include all four cities.</small>
            </div>
          </div>
          <label className={styles.guestSelector}>
            <span>Travellers</span>
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value as typeof guests)}
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="3-4">3-4 guests (not confirmed)</option>
              <option value="5-6">5–6 guests</option>
              <option value="7+">7+ guests</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
            <small>
              Published prices use four guests sharing two rooms. Other party sizes receive a
              written quote.
            </small>
          </label>
          <div className={styles.paceChooser} role="group" aria-label="Choose your journey pace">
            {[
              {
                id: "essential" as const,
                label: "Essential",
                duration: "12 days / 11 nights",
                price: calculateJourneyPrice(basePrice, {
                  pace: "essential",
                  freeDayService,
                  guests,
                }),
                freeDay: "Xi'an Free Day",
                fit: "For a shorter first visit",
              },
              {
                id: "considered" as const,
                label: "Considered",
                duration: "13 days / 12 nights",
                price: calculateJourneyPrice(basePrice, {
                  pace: "considered",
                  freeDayService,
                  guests,
                }),
                freeDay: "Chengdu Free Day",
                fit: "For more room to breathe",
              },
            ].map((option) => {
              const selected = pace === option.id;
              return (
                <button
                  type="button"
                  key={option.id}
                  className={[styles.paceChoice, selected ? styles.paceChoiceSelected : ""]
                    .filter(Boolean)
                    .join(" ")}
                  aria-pressed={selected}
                  onClick={() => setPace(option.id)}
                >
                  <span className={styles.paceChoiceMarker} aria-hidden="true">
                    {selected ? "✓" : ""}
                  </span>
                  <span className={styles.paceChoiceMain}>
                    <strong>{option.label}</strong>
                    <small>{option.fit}</small>
                  </span>
                  <span className={styles.paceChoiceDetails}>
                    <span>{option.duration}</span>
                    <span>{option.freeDay}</span>
                  </span>
                  <span className={styles.paceChoicePrice}>
                    {option.price ? "US$" + option.price.toLocaleString("en-US") : "On request"}
                    <small>per person</small>
                  </span>
                </button>
              );
            })}
          </div>
          <div className={styles.freeDayBlock} aria-labelledby="free-day-title">
            <div className={styles.choiceGroupHeader}>
              <div>
                <strong id="free-day-title">Shape your free day</strong>
                <small>Keep the day open at no extra cost, or add one guided experience.</small>
              </div>
              <div className={styles.freeDayContext} aria-live="polite">
                <strong>{variant.label}</strong>
                <small>
                  {variant.duration} / {variant.freeDayLocation}
                </small>
              </div>
            </div>

            <div
              className={styles.serviceGrid}
              role="group"
              aria-label="Choose a free day experience"
            >
              {freeDayServices.map((option) => {
                const selected = freeDayService === option.id;
                return (
                  <button
                    type="button"
                    key={option.id}
                    aria-pressed={selected}
                    className={[styles.serviceOption, selected ? styles.serviceSelected : ""]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setFreeDayService(option.id)}
                  >
                    <span className={styles.serviceSelectMark} aria-hidden="true">
                      {selected ? <Check size={13} /> : null}
                    </span>
                    <span className={styles.serviceCopy}>
                      <strong>{option.title}</strong>
                      <small>{option.description}</small>
                    </span>
                    <span className={styles.servicePrice}>{option.priceLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.itinerarySection} id="itinerary" aria-labelledby="itinerary-title">
        <div className={styles.shell}>
          <div className={styles.itineraryHeader}>
            <div className={styles.heading}>
              <h2 id="itinerary-title">Your journey, day by day.</h2>
              <p>{variant.description}</p>
            </div>
          </div>

          <div className={styles.journeySummary} aria-label="Selected journey summary">
            <div>
              <span>From</span>
              <strong>
                {priceFromUsd ? "US$" + priceFromUsd.toLocaleString("en-US") : "On request"}
              </strong>
              {priceFromUsd ? <small>per person / based on 4 guests</small> : null}
            </div>
            <div>
              <span>Journey length</span>
              <strong>{variant.duration}</strong>
            </div>
            <div>
              <span>Free Day</span>
              <strong>{variant.freeDayLocation}</strong>
              <small>{selectedService?.title}</small>
            </div>
            <p>
              Based on four guests sharing two rooms, outside peak periods. Your final proposal is
              confirmed personally by our China-based team.
            </p>
            <TrackedTourLink
              className={styles.summaryAction}
              href="#enquiry"
              journeySlug={model.slug}
              label={"CHOOSE " + variant.duration}
              placement="tour-pace-selector"
            >
              Request this pace <ArrowRight size={16} aria-hidden="true" />
            </TrackedTourLink>
          </div>

          <div className={styles.itineraryGrid}>
            <TourDayAccordion
              key={pace + "-" + freeDayService}
              days={variant.days}
              journeySlug={model.slug + "-" + pace}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function buildVariant(pace: JourneyPaceId, model: TourDetailModel, service: FreeDayServiceId) {
  const baseDays = model.days;
  const relabel = (day: TourDetailDay, number: number): TourDetailDay => ({
    ...day,
    label: "Day " + String(number).padStart(2, "0"),
  });
  const freeDay = (
    location: string,
    number: number,
    selectedService: FreeDayServiceId = service,
  ): TourDetailDay => {
    const servicePlan = getFreeDayServicePlan(selectedService);
    return {
      label: "Day " + String(number).padStart(2, "0"),
      title: "A day in " + location + ", your way",
      destination: location,
      summary: servicePlan.summary,
      transport: servicePlan.transport,
      meals: number === 2 ? "Hotel breakfast + welcome dinner" : "Hotel breakfast",
      stay: location + " stay: confirmed in your private proposal",
      guideInsight: servicePlan.guideInsight,
      experiences: [
        {
          title: servicePlan.experienceTitle,
          description: servicePlan.experienceDescription,
        },
      ],
    };
  };

  if (pace === "essential") {
    return {
      label: "Essential Pace",
      duration: "12 Days / 11 Nights",
      freeDayLocation: "Xi'an",
      description:
        "The classic first-China route, with the essential landmarks and one protected day to explore Xi'an at your own pace.",
      days: [
        ...baseDays.slice(0, 5).map((day) => relabel(day, Number(day.label.replace(/\D/g, "")))),
        freeDay("Xi'an", 6),
        ...baseDays.slice(5).map((day) => relabel(day, dayNumber(day) + 1)),
      ],
      advantages: [
        "Four defining cities",
        "One included Xi'an Free Day",
        "More efficient starting price",
      ],
      comparison: [
        { label: "Hotel rhythm", value: "Beijing 3 · Xi'an 3 · Chengdu 2 · Shanghai 3" },
        { label: "Free Day", value: "Xi'an" },
        { label: "Travel feel", value: "Efficient, clear and carefully private" },
        { label: "Best for", value: "Travelers with limited holiday time" },
      ],
    };
  }

  return {
    label: "Considered Pace",
    duration: "13 Days / 12 Nights",
    freeDayLocation: "Chengdu",
    description:
      "A more spacious journey with three nights in each city, a deeper Xi'an chapter and a full day in Chengdu that belongs entirely to you.",
    days: [
      ...baseDays.slice(0, 5).map((day) => relabel(day, Number(day.label.replace(/\D/g, "")))),
      {
        ...freeDay("Xi'an", 6, "open"),
        title: "Xi'an beyond the museum",
        summary:
          "Spend a full day with the living city: its walls, food culture, neighborhoods and the stories that continue beyond the Terracotta Warriors.",
      },
      ...baseDays.slice(5, 7).map((day) => relabel(day, dayNumber(day) + 1)),
      freeDay("Chengdu", 9),
      ...baseDays.slice(7).map((day) => relabel(day, dayNumber(day) + 2)),
    ],
    advantages: [
      "Three nights in each city",
      "A deeper Xi'an chapter",
      "One included Chengdu Free Day",
    ],
    comparison: [
      { label: "Hotel rhythm", value: "Beijing 3 · Xi'an 3 · Chengdu 3 · Shanghai 3" },
      { label: "Free Day", value: "Chengdu" },
      { label: "Travel feel", value: "Spacious, restorative and more open" },
      { label: "Best for", value: "Travelers who value comfort and depth" },
    ],
  };
}

function dayNumber(day: TourDetailDay) {
  return Number(day.label.replace(/\D/g, ""));
}

function getFreeDayServicePlan(service: FreeDayServiceId) {
  switch (service) {
    case "open":
      return {
        summary:
          "Keep this day unplanned. Rest, explore independently or follow our neighbourhood and dining recommendations at your own pace.",
        transport: "Independent day",
        guideInsight:
          "Before you travel, we share practical local suggestions suited to your hotel location, interests and energy level, while keeping the day entirely yours.",
        experienceTitle: "Time that belongs to you",
        experienceDescription:
          "Use the day for a slower morning, spontaneous discoveries or a favourite place you want to revisit. No fixed activity is added to your price.",
      };
    case "local-culture":
      return {
        summary:
          "Spend an easy, engaging day with a local guide, discovering neighbourhood life and culture at a pace that works especially well for families.",
        transport: "Local guide + public transport",
        guideInsight:
          "The day is designed to feel personal rather than programmed: your guide handles the practical details while your family has space to connect with the city.",
        experienceTitle: "A day made for your family",
        experienceDescription:
          "Move through local neighbourhoods, cultural places and everyday scenes by public transport and on foot, with activities adjusted to your family's ages and interests.",
      };
    case "food-journey":
      return {
        summary:
          "Follow the flavours of the city with a local guide, from trusted family-run places to markets and dishes chosen around your tastes.",
        transport: "Local guide + walking / short transfers",
        guideInsight:
          "Good food is also a way into local life. We choose places for quality, comfort and character, while checking dietary needs before the day.",
        experienceTitle: "Taste the city with confidence",
        experienceDescription:
          "Explore local flavours through a relaxed route of markets, small eateries and regional specialities, with your guide explaining what to try and why it matters.",
      };
  }
}
