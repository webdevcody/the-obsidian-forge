import { Title } from "@/components/title";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="oldwall">
      <div className="max-w-screen-lg mx-auto py-24 flex-col flex gap-24">
        <h1 className="text-5xl font-bold text-center">Meet our Blacksmiths</h1>

        <div className="flex gap-12">
          <Image
            src="/dwarf1.jpeg"
            width="300"
            height="300"
            alt="Thrain Ironforge"
          />

          <div>
            <h2 className="text-4xl font-semibold mb-4">Thrain Ironforge</h2>

            <p className="text-lg">
              Thrain Ironforge is a seasoned dwarf blacksmith with a reputation
              for crafting legendary weapons and armor. Raised in the heart of
              the mountainous realm of Khazad-dûm, Thrain developed an early
              fascination with the art of metallurgy. His passion for
              blacksmithing stems from a desire to honor his ancestors and the
              ancient traditions of his clan. Thrain believes that every swing
              of his hammer echoes with the resilience and endurance of the
              dwarven people. His meticulous attention to detail, combined with
              a deep understanding of various metals, makes him a master
              craftsman. Thrain's creations not only boast exceptional
              durability but also bear intricate engravings that tell the tales
              of his people's glorious history.
            </p>
          </div>
        </div>

        <hr />

        <div className="flex gap-12">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Bruni Stoneheart</h2>

            <p className="text-lg">
              Bruni Stoneheart, a dwarf blacksmith known for both his fiery
              temper and unmatched craftsmanship, hails from the subterranean
              city of Ironpeak. Growing up surrounded by the constant hum of
              molten forges, Bruni fell in love with the dance of fire and
              metal. his affinity for crafting exquisite weapons and armor comes
              not just from a desire for artistic expression, but also from a
              commitment to providing his kin with the means to defend their
              homes. Bruni's creations are renowned for their flawless balance
              and deadly precision. Behind his gruff exterior lies a deep sense
              of responsibility to ensure that every warrior equipped with his
              gear stands a stalwart guardian against the perils lurking in the
              dark.
            </p>
          </div>

          <Image
            src="/dwarf2.jpeg"
            width="300"
            height="300"
            alt="Thrain Ironforge"
          />
        </div>

        <hr />

        <div className="flex gap-12">
          <Image
            src="/dwarf3.jpeg"
            width="300"
            height="300"
            alt="Thrain Ironforge"
          />

          <div>
            <h2 className="text-4xl font-semibold mb-4">Faldur Steelbeard</h2>

            <p className="text-lg">
              Faldur Steelbeard, a dwarf blacksmith of renowned skill, is driven
              by an insatiable curiosity for metallurgy and a relentless pursuit
              of perfection. Raised among the forges of Hammerfast, Faldur's
              fascination with the alchemical properties of metals led him to
              experiment with unique alloys. His love for blacksmithing is
              intertwined with a quest for innovation, and he constantly seeks
              to push the boundaries of traditional dwarven craftsmanship.
              Faldur's workshops are filled with intricate contraptions and
              bubbling cauldrons as he tirelessly refines his techniques. His
              clients benefit not only from the durability of his creations but
              also from the ingenious properties that make Faldur's weapons and
              armor stand out among the finest in the realms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
