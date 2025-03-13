// Fundations
import Wrapper from "../foundations/containers/Wrapper";
import Text from "../foundations/elements/Text";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <footer className="text-xs pb-8 pt-48">
        <Wrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="gap-4 flex flex-col">
            <div className="gap-1 flex flex-col">
              <Text
                tag="p"
                variant="textSM"
                className="font-serif italic text-black dark:text-neutral-500"
              >
                Follow us on
              </Text>
              <Text
                tag="a"
                variant="textXS"
                href="#_"
                className="dark:text-neutral-500 underline"
              >
                Twitter
              </Text>
            </div>
            <div className="gap-1 flex flex-col">
              <Text
                tag="p"
                variant="textSM"
                className="font-serif italic text-black dark:text-neutral-500"
              >
                Add us on
              </Text>
              <Text
                tag="a"
                variant="textXS"
                href="#_"
                className="dark:text-neutral-500 underline"
              >
                LinkedIn
              </Text>
            </div>
          </div>
          <div>
            <Text
              tag="p"
              variant="textBase"
              className="font-serif italic text-black dark:text-white"
            >
              Privacy
            </Text>
            <Text tag="p" variant="textXS" className="text-neutral-500 mt-1">
              Your privacy is important to us. We avoid invasive practices such
              as data tracking, fingerprinting, or sharing your information with
              third parties. Instead, we use
              <a
                href="#_"
                className="dark:text-neutral-500 text-black underline"
              >
                Umami
              </a>
              , an open-source, cookie-free analytics tool that prioritizes your
              privacy by not collecting personal data.
            </Text>
          </div>
          <div>
            <Text
              tag="p"
              variant="textBase"
              className="font-serif italic text-black dark:text-white"
            >
              Colophon
            </Text>
            <Text tag="p" variant="textXS" className="text-neutral-500 mt-1">
              This site uses Instrument Serif and Inter font. The frontend code
              is built with Astro &amp; Tailwind CSS.
              <a
                href="#_"
                className="dark:text-neutral-500 text-black underline"
              >
                open source
              </a>
              and available online.
            </Text>
          </div>
          <div>
            <Text
              tag="p"
              variant="textBase"
              className="font-serif italic text-black dark:text-white"
            >
              Thank you
            </Text>
            <Text tag="p" variant="textXS" className="text-neutral-500 mt-1">
              The web is a big, big place with lots of people, places, and
              things to see. Thanks for visiting our little corner of the
              internet.
            </Text>
          </div>
          <Text
            tag="p"
            variant="textBase"
            className="flex flex-col text-black font-serif gap-1 italic"
          >
            Copyright
            <span className="text-neutral-500 text-xs">
              © 2023 – <span id="current-year">{currentYear}</span>
            </span>
          </Text>
        </Wrapper>
      </footer>
    </footer>
  );
}
