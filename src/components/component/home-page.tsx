/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/PQHQ0JgA5xf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import BadgeAlertIcon from "../icons/BadgeAlertIcon";
import ShieldIcon from "../icons/ShieldIcon";
import FishIcon from "../icons/FishIcon";
import HospitalIcon from "../icons/HospitalIcon";
import VoteIcon from "../icons/VoteIcon";
import GiftIcon from "../icons/GiftIcon";
import InfoIcon from "../icons/InfoIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { getSession } from "@/lib/actions";

export async function HomePage() {
  const session = await getSession();
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Link
        href="#"
        className="fixed bottom-8 right-8 items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        prefetch={false}
      >
        <Button style={{ backgroundColor: "red", borderRadius: 500 + "em" }}>
          <BadgeAlertIcon className="mr-2 h-4 w-4" />
          EMERGENCY
        </Button>
      </Link>
      <section className="w-full bg-primary py-20 px-4 md:py-32">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
            Disaster Relief and Information
          </h1>
          <p className="mt-4 text-lg text-primary-foreground md:text-xl">
            We&apos;re here to help communities in times of crisis. Get the
            information and resources you need.
          </p>
          {session.isLoggedIn === false && (
            <Link
              href="/login"
              className="mt-8 inline-flex items-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              prefetch={false}
            >
              Get Involved
            </Link>
          )}
          {session.isLoggedIn && (
            <Link
            href="/disaster-map"
            className="mt-8 inline-flex items-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            prefetch={false}
          >
            Get Involved
          </Link>
          )}
        </div>
      </section>
      <section className="w-full py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our key information to support communities in need.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <ShieldIcon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Emergency Shelter
              </h3>
              <p className="text-center text-muted-foreground">
                Providing information and resources to help people find safe
                shelter during disasters.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FishIcon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Food Assistance
              </h3>
              <p className="text-center text-muted-foreground">
                Information relating to edible items, food, and other vital
                resources to affected communities.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HospitalIcon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Medical Aid
              </h3>
              <p className="text-center text-muted-foreground">
                Know where to find medical assistance and resources during a
                disaster.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-muted py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Get Involved
            </h2>
            <p className="mt-2 text-muted-foreground">
              Together we can make a difference...
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <VoteIcon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Volunteer
              </h3>
              <p className="text-center text-muted-foreground">
                Join our team of info brokers and non-profit organizations to
                help those in need.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                prefetch={false}
              >
                Sign Up
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <GiftIcon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-foreground">Donate</h3>
              <p className="text-center text-muted-foreground">
                To some, a small donation can make a big difference. Help us
                help others.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                prefetch={false}
              >
                Donate Now
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <InfoIcon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-foreground">
                Stay Updated
              </h3>
              <p className="text-center text-muted-foreground">
                Perhaps, the most important thing you can do is stay informed.
                Subscribe to our newsletter.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                prefetch={false}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Latest Updates
            </h2>
            <p className="mt-2 text-muted-foreground">
              Stay informed about our latest news and initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-md border bg-card p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Update 1"
                className="mb-4 aspect-[3/2] w-full rounded-md object-cover"
                width="300"
                height="200"
              />
              <h3 className="mb-2 text-lg font-bold text-card-foreground">
                Disaster Response in Wayanad
              </h3>
              <p className="text-muted-foreground">
                Learn how the disaster in Wayanad, Tamil Nadu has affected the
                local community.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/90"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-md border bg-card p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Update 2"
                className="mb-4 aspect-[3/2] w-full rounded-md object-cover"
                width="300"
                height="200"
              />
              <h3 className="mb-2 text-lg font-bold text-card-foreground">
                Volunteer Opportunities
              </h3>
              <p className="text-muted-foreground">
                Join our team of volunteers to help with disaster relief efforts
                in your local community.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/90"
                prefetch={false}
              >
                Sign Up
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-md border bg-card p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Update 3"
                className="mb-4 aspect-[3/2] w-full rounded-md object-cover"
                width="300"
                height="200"
              />
              <h3 className="mb-2 text-lg font-bold text-card-foreground">
                Disaster Preparedness Tips
              </h3>
              <p className="text-muted-foreground">
                Learn how to prepare your family and home for natural disasters
                with our helpful guide.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/90"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
