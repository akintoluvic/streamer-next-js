// Fundations

import Wrapper from "../foundations/containers/Wrapper";
import Text from "../foundations/elements/Text";

/// Podcasts platforms links
const links = [
  { name: "Spotify", href: "#_" },
  { name: "Overcast", href: "#_" },
  { name: "Youtube", href: "#_" },
];

export default function Header() {
  return (
    <Wrapper variant="standard" className="pb-24">
      <div className="flex items-center justify-between text-gray-medium dark:text-base-medium">
        <Text
          tag="p"
          variant="textBase"
          className="font-serif italic uppercase"
        >
          streamer
        </Text>
        <div className="flex gap-4 items-center">
          {links.map((link) => (
            <Text
              key={link.name}
              tag="a"
              href={link.href}
              variant="textBase"
              className="font-serif italic"
            >
              {link.name}
            </Text>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
