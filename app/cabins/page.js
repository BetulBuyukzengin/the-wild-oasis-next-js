import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const metadata = {
  title: "Cabins",
};

//! Convert to dynamic
// export const revalidate = 0;
//! ISR (Middle ground between static and dynamic)
// export const revalidate = 3600; //seconds

export default function Cabins({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-2xl md:text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-base md:text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-center md:justify-end mb-8">
        <Filter />
      </div>
      {/* It is important to use "key" to show the loader */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
