import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400; // daily

export const metadata = {
  title: "About",
};
export default async function About() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-4 lg:grid-rows-[auto] lg:grid-cols-5 lg:gap-x-24 gap-y-8 lg:gap-y-32 text-lg lg:items-center">
      <div className="col-span-4 row-start-1 lg:row-start-auto lg:col-span-3 h-max">
        <h1 className="text-2xl lg:text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8 text-sm lg:text-base">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-4 lg:col-span-2  row-start-2 lg:row-start-auto h-max">
        {/* To have a sensitive image. */}
        <Image
          className="pr-4"
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-4 lg:col-span-2  row-start-4 lg:row-start-auto h-max">
        {/* For any image available on the computer. */}
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover pr-4"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-4 lg:col-span-3 items-center  row-start-3 lg:row-start-auto h-max">
        <h1 className="text-2xl lg:text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8 text-sm lg:text-base flex items-center flex-col">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 rounded-sm px-4 lg:px-8 py-2 lg:py-5 text-primary-800 text-sm lg:text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
