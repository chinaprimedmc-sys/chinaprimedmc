"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { homeOperatingStandards } from "@/content/home/redesign";

import styles from "./home-redesign.module.css";

export function HomeStandardPanel() {
  return (
    <div className={styles.standardPanel}>
      <div className={styles.standardServiceCarousel}>
        <p className={styles.standardColumnLabel}>How a private journey is supported</p>

        <div className={styles.standardCarouselTrack} aria-label="AVIORA service standards">
          {homeOperatingStandards.map((standard) => (
            <article className={styles.standardSlide} key={standard.number}>
              <div className={styles.standardImagePlaceholder}>
                <Image
                  alt={standard.imageAlt}
                  className={styles.standardImage}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 46vw, 88vw"
                  src={standard.image}
                  style={{ objectPosition: standard.imagePosition }}
                />
              </div>
              <div className={styles.standardSlideCopy}>
                <span>{standard.number}</span>
                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.bookingPolicy} aria-labelledby="home-booking-policy-title">
        <div className={styles.bookingPolicyHeader}>
          <div>
            <p className={styles.standardColumnLabel}>Before You Book</p>
            <h3 id="home-booking-policy-title">Everything Clear From The Start.</h3>
          </div>
          <a href="/terms">
            Read the full terms <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className={styles.bookingPolicyGrid}>
          <article>
            <span>01</span>
            <h4>Before You Pay</h4>
            <p>Price and inclusions are confirmed.</p>
            <ArrowRight className={styles.bookingPolicyConnector} aria-hidden="true" />
          </article>
          <article>
            <span>02</span>
            <h4>When You Book</h4>
            <p>Your payment confirms the booking.</p>
            <ArrowRight className={styles.bookingPolicyConnector} aria-hidden="true" />
          </article>
          <article>
            <span>03</span>
            <h4>If Plans Change</h4>
            <p>Terms depend on when you cancel.</p>
            <ArrowRight className={styles.bookingPolicyConnector} aria-hidden="true" />
          </article>
          <article className={styles.refundNote}>
            <span>04</span>
            <h4>Refunds Made Clear</h4>
            <p>Approved refunds go back to the original payment method.</p>
          </article>
        </div>
        <div className={styles.mobileBookingDetails}>
          <details>
            <summary>Before you pay</summary>
            <p>Your written proposal confirms the price, services and inclusions.</p>
          </details>
          <details>
            <summary>If plans change</summary>
            <p>Cancellation terms and any approved refund route are clear before booking.</p>
          </details>
          <a href="/terms">
            Read the full terms <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
