"use client";
// Fundations
import Text from "../foundations/elements/Text";
import Wrapper from "../foundations/containers/Wrapper";
// Images
import Image, { StaticImageData } from "next/image";
// Import podcasts images
import one from "../../../public/images/1.png";
import two from "../../../public/images/2.png";
import three from "../../../public/images/3.png";
import four from "../../../public/images/4.png";
import five from "../../../public/images/5.png";
import six from "../../../public/images/6.png";
import seven from "../../../public/images/7.png";
import eight from "../../../public/images/8.png";
import nine from "../../../public/images/9.png";
import ten from "../../../public/images/10.png";
import eleven from "../../../public/images/11.png";
import twelve from "../../../public/images/12.png";
import thirteen from "../../../public/images/13.png";
import fourteen from "../../../public/images/14.png";
import fifteen from "../../../public/images/15.png";
import sixteen from "../../../public/images/16.png";
import seventeen from "../../../public/images/17.png";
import eighteen from "../../../public/images/18.png";
import nineteen from "../../../public/images/19.png";
import twenty from "../../../public/images/20.png";
import twentyOne from "../../../public/images/21.png";
import twentyTwo from "../../../public/images/22.png";
import twentyThree from "../../../public/images/23.png";
import twentyFour from "../../../public/images/24.png";
import twentyFive from "../../../public/images/25.png";
import twentySix from "../../../public/images/26.png";
import twentySeven from "../../../public/images/27.png";
import { useRef } from "react";

// Data
const podcastData = [
  {
    date: "2025-01-01",
    title: "Armin Hofmann — Mastering Visual Balance",
    category: "Typography",
    duration: "01:50h",
    imagePath: one,
    description:
      "Explore the life and teachings of Armin Hofmann, the pioneer of Swiss typography and his approach to visual balance and clarity.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
      { name: "Overcast", url: "#" },
    ],
    topics: [
      "The impact of Armin Hofmann on Swiss typography.",
      "Understanding visual balance in minimalistic design.",
      "How Hofmann's teachings remain relevant in modern design.",
      "Typography as the backbone of communication design.",
    ],
    sponsors: [
      {
        name: "Grid Masters",
        description:
          "Your go-to resource for advanced design grids and templates.",
      },
      {
        name: "SwissType Foundry",
        description: "Discover premium typefaces inspired by Swiss design.",
      },
    ],
    links: [
      { label: "Learn more about Armin Hofmann", url: "#" },
      { label: "Typography Principles", url: "#" },
    ],
    transcript: [
      {
        speaker: "Host",
        text: "Welcome to this episode where we discuss Armin Hofmann's influence on modern design. Today, we'll explore how his teachings at the Basel School of Design shaped generations of designers and continue to influence contemporary visual communication. We're joined by design historian Dr. Sarah Chen.",
      },
      {
        speaker: "Guest",
        text: "Hofmann's principles of balance and structure are timeless, and it's fascinating to see how they've evolved yet remained fundamentally relevant in our digital age.",
      },
      {
        speaker: "Host",
        text: "Could you elaborate on what made his approach so revolutionary for its time?",
      },
      {
        speaker: "Guest",
        text: "Hofmann introduced a systematic approach to design that was radical in its simplicity. He emphasized that design isn't about decoration, but about finding the essential form of communication. His famous 'dot, line, and plane' exercises helped students understand the fundamental elements of visual composition.",
      },
      {
        speaker: "Host",
        text: "One thing that always strikes me about his work is the use of contrast. Can you talk about that?",
      },
      {
        speaker: "Guest",
        text: "Absolutely. Hofmann believed that contrast was the driving force of good design. He wasn't just talking about black and base-light, but about the interplay between forms, sizes, and textures. His posters for the Basel Theater are perfect examples – they achieve maximum impact with minimal elements.",
      },
      {
        speaker: "Host",
        text: "I understand you studied some of his original teaching materials. What surprised you most?",
      },
      {
        speaker: "Guest",
        text: "What struck me was how hands-on and experimental his teaching method was. Students weren't just learning rules; they were discovering principles through practical work. His famous exercises, like creating compositions using only black paper and scissors, forced students to think deeply about form and space.",
      },
      {
        speaker: "Host",
        text: "How do you see his influence in today's digital design landscape?",
      },
      {
        speaker: "Guest",
        text: "It's everywhere, really. The emphasis on grid systems, the careful consideration of typography and space, the focus on clear visual hierarchy – these are all Hofmann principles that have become fundamental to UI/UX design. Even minimalist web design owes a debt to his teachings.",
      },
      {
        speaker: "Host",
        text: "Do you think he would approve of how his principles are being applied today?",
      },
      {
        speaker: "Guest",
        text: "That's an interesting question. I think he would appreciate how his fundamental principles have adapted to new mediums. He always said that good design transcends its medium. However, he might challenge us to be more rigorous in our thinking and less reliant on digital shortcuts.",
      },
      {
        speaker: "Host",
        text: "Could you share a specific example of how his teachings influence your own work?",
      },
      {
        speaker: "Guest",
        text: "Every time I start a project, I hear Hofmann's voice saying 'reduce, reduce, reduce.' His emphasis on stripping away everything non-essential has become my guiding principle. It's not about making things look simple; it's about finding the simplest way to communicate effectively.",
      },
    ],
  },
  {
    date: "2025-01-08",
    title: "Josef Müller-Brockmann — The Grid as a Design Tool",
    category: "Grids",
    duration: "02:15h",
    imagePath: two,
    description:
      "A deep dive into Josef Müller-Brockmann's philosophy of the grid system and its transformative impact on design.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
      { name: "Overcast", url: "#" },
    ],
    topics: [
      "The evolution of the grid system in Swiss design.",
      "Why the grid is a tool for clarity and creativity.",
      "Josef Müller-Brockmann's most iconic works.",
    ],
    sponsors: [
      {
        name: "The Grid Co.",
        description: "Modern tools for grid-based design workflows.",
      },
      {
        name: "TypoSwiss",
        description: "Explore typefaces built with the Swiss grid in mind.",
      },
    ],
    links: [
      { label: "Josef Müller-Brockmann's legacy", url: "#" },
      { label: "The Grid as a System", url: "#" },
    ],
    transcript: [
      {
        speaker: "Host",
        text: "Today, we explore how the grid became a design revolution...",
      },
    ],
  },
  {
    date: "2025-01-15",
    title: "The Swiss Design Movement — Simplicity and Functionality",
    category: "History",
    duration: "02:00h",
    imagePath: three,
    description:
      "Unpacking the Swiss design movement's emphasis on simplicity, functionality, and clarity.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "What defines Swiss design aesthetics?",
      "The role of neutrality and functionality in design.",
      "Swiss design beyond Switzerland: Its global influence.",
    ],
    sponsors: [
      {
        name: "neutral Spaces",
        description: "Creating designs that speak without excess.",
      },
    ],
    links: [
      { label: "Swiss design history", url: "#" },
      { label: "neutral design philosophy", url: "#" },
    ],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss design is a testament to the beauty of simplicity...",
      },
    ],
  },
  {
    date: "2025-01-22",
    title: "Emil Ruder — Precision in Typography",
    category: "Typography",
    duration: "01:45h",
    imagePath: four,
    description:
      "Discover Emil Ruder's unique contributions to Swiss typography and his philosophy on precision and order.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Ruder’s influence on modern typography.",
      "Why precision matters in communication.",
      "Breaking rules: When it’s acceptable in typography.",
    ],
    sponsors: [
      {
        name: "TypeCraft",
        description: "Perfect tools for crafting precise typographic designs.",
      },
    ],
    links: [{ label: "Read more about Emil Ruder", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Emil Ruder was a genius of clarity and precision in design...",
      },
    ],
  },
  {
    date: "2025-01-29",
    title: "Swiss Design in Digital Spaces",
    category: "Digital Design",
    duration: "01:30h",
    imagePath: five,
    description:
      "How Swiss design principles have transitioned into the digital era while maintaining their core values.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "The challenges of adapting Swiss design to digital media.",
      "Maintaining clarity and simplicity in a digital-first world.",
    ],
    sponsors: [
      {
        name: "Digital Grids",
        description: "Helping you design for the digital age with precision.",
      },
    ],
    links: [{ label: "Swiss design for digital media", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Digital spaces have opened new avenues for Swiss design...",
      },
    ],
  },
  {
    date: "2025-02-05",
    title: "Max Bill — The Art of Clarity",
    category: "Art and Design",
    duration: "02:00h",
    imagePath: six,
    description:
      "Exploring Max Bill's contributions to art and design, focusing on his relentless pursuit of clarity.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Max Bill's multidisciplinary approach to design.",
      "Art as an extension of clarity and logic.",
      "Why clarity remains at the heart of effective design.",
    ],
    sponsors: [
      {
        name: "Clarity Collective",
        description: "Simplify your designs with tools inspired by Max Bill.",
      },
    ],
    links: [{ label: "Max Bill’s portfolio", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Max Bill taught us that art and design can coexist beautifully...",
      },
    ],
  },
  {
    date: "2025-02-12",
    title: "The Role of base-light Space in Swiss Design",
    category: "Minimalism",
    duration: "01:20h",
    imagePath: seven,
    description:
      "An exploration of how Swiss designers use base-light space to emphasize clarity and simplicity in their work.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "What is base-light space, and why does it matter?",
      "How Swiss design masters incorporated base-light space into their layouts.",
      "Balancing base-light space with content density.",
    ],
    sponsors: [
      {
        name: "base-lightspace Studio",
        description: "Tools for mastering the art of minimalism in design.",
      },
    ],
    links: [{ label: "Learn more about base-light space in design", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "base-light space is often misunderstood but vital in design...",
      },
    ],
  },
  {
    date: "2025-02-19",
    title: "Grid-Based Typography: Practical Techniques",
    category: "Typography",
    duration: "01:40h",
    imagePath: eight,
    description:
      "Learn how to use grid systems to create visually stunning and readable typography.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Combining typography and grids for better communication.",
      "Best practices for setting typographic hierarchy.",
      "Examples of effective grid-based typographic designs.",
    ],
    sponsors: [
      {
        name: "FontGrid Pro",
        description: "Grids tailored for typographic design.",
      },
    ],
    links: [{ label: "Typography and grid systems", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Grids are an essential tool in achieving typographic clarity...",
      },
    ],
  },
  {
    date: "2025-02-26",
    title: "Swiss Design in Branding",
    category: "Branding",
    duration: "01:50h",
    imagePath: nine,
    description:
      "Discover how Swiss design principles can create impactful and timeless brands.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Why Swiss design is the gold standard in branding.",
      "Case studies of brands inspired by Swiss design.",
      "How to apply Swiss design concepts to your brand identity.",
    ],
    sponsors: [
      {
        name: "BrandSwiss",
        description: "Elevate your brand with Swiss-inspired design tools.",
      },
    ],
    links: [{ label: "Swiss design and branding", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Branding is one of the key areas where Swiss design thrives...",
      },
    ],
  },
  {
    date: "2025-03-11",
    title: "Swiss Poster Design — Bold and Beautiful",
    category: "Graphic Design",
    duration: "01:35h",
    imagePath: ten,
    description:
      "Explore the striking visual style of Swiss posters and how they combine bold typography with clean layouts.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Key features of Swiss poster design.",
      "How to create a visually impactful poster using Swiss principles.",
      "Famous poster designs that defined the era.",
    ],
    sponsors: [
      {
        name: "PosterCraft",
        description:
          "Tools for creating striking posters inspired by Swiss design.",
      },
    ],
    links: [{ label: "Swiss poster design history", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss poster design is the epitome of clarity and boldness...",
      },
    ],
  },
  {
    date: "2025-03-18",
    title: "Adrian Frutiger — Type for the Future",
    category: "Typography",
    duration: "01:45h",
    imagePath: eleven,
    description:
      "Learn about Adrian Frutiger’s groundbreaking work in typography and how it shaped modern type design.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Adrian Frutiger's contributions to typeface design.",
      "How Univers revolutionized typography.",
      "The impact of Frutiger on digital and web typography.",
    ],
    sponsors: [
      {
        name: "TypeFuture",
        description: "Discover the tools inspired by Adrian Frutiger.",
      },
    ],
    links: [{ label: "Adrian Frutiger's legacy", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Adrian Frutiger’s name is synonymous with timeless typography...",
      },
    ],
  },
  {
    date: "2025-03-25",
    title: "Swiss Design in Architecture",
    category: "Architecture",
    duration: "02:10h",
    imagePath: twelve,
    description:
      "How Swiss design principles have influenced architectural forms and spaces.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "The intersection of design and architecture in Switzerland.",
      "Why simplicity and functionality matter in architectural design.",
      "Case studies of Swiss-inspired buildings worldwide.",
    ],
    sponsors: [
      {
        name: "SpaceSwiss",
        description: "Designing architectural spaces with precision.",
      },
    ],
    links: [{ label: "Swiss architectural design", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss design principles extend far beyond graphic design...",
      },
    ],
  },
  {
    date: "2025-04-01",
    title: "Photography and Swiss Minimalism",
    category: "Photography",
    duration: "01:25h",
    imagePath: thirteen,
    description:
      "How photographers incorporate Swiss minimalism to create striking visual narratives.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "What is Swiss minimalism in photography?",
      "Techniques for incorporating minimalism into your photography.",
      "Examples of minimalist photography inspired by Swiss design.",
    ],
    sponsors: [
      {
        name: "PhotoSimplicity",
        description: "Minimalist photography tools and guides.",
      },
    ],
    links: [{ label: "Minimalism in photography", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss minimalism has become a cornerneutral of visual storytelling...",
      },
    ],
  },
  {
    date: "2025-04-08",
    title: "Swiss Web Design — Function Meets Form",
    category: "Web Design",
    duration: "02:05h",
    imagePath: fourteen,
    description:
      "Applying Swiss design principles to web interfaces for better usability and aesthetics.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "How Swiss design principles influence web interfaces.",
      "Balancing usability and aesthetics in web design.",
      "The future of Swiss-inspired web design.",
    ],
    sponsors: [
      {
        name: "WebSwiss",
        description: "Building better websites with Swiss-inspired tools.",
      },
    ],
    links: [{ label: "Swiss web design principles", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Web design and Swiss design are a perfect match...",
      },
    ],
  },
  {
    date: "2025-04-15",
    title: "The Bauhaus and Swiss Design Connection",
    category: "Design History",
    duration: "01:40h",
    imagePath: fifteen,
    description:
      "How the Bauhaus influenced the development of Swiss design principles and modern minimalism.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Parallels between Bauhaus and Swiss design.",
      "The Bauhaus emphasis on function and its Swiss evolution.",
      "Why the Bauhaus legacy thrives in Swiss design.",
    ],
    sponsors: [
      {
        name: "Design Origins",
        description: "Tracing design history with tools inspired by legends.",
      },
    ],
    links: [{ label: "Explore Bauhaus and Swiss design", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss design owes much to the Bauhaus principles of functionality and simplicity...",
      },
    ],
  },
  {
    date: "2025-04-22",
    title: "The Art of neutrality in Swiss Design",
    category: "Philosophy",
    duration: "01:25h",
    imagePath: sixteen,
    description:
      "neutrality as a cornerneutral of Swiss design philosophy and its impact on global aesthetics.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "What does neutrality mean in design?",
      "How neutrality enhances clarity and universality.",
      "Examples of neutrality in Swiss design works.",
    ],
    sponsors: [
      {
        name: "neutralForm",
        description: "Creating designs that prioritize clarity above all.",
      },
    ],
    links: [{ label: "neutral design principles", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "neutrality is often seen as the foundation of Swiss design...",
      },
    ],
  },
  {
    date: "2025-04-29",
    title: "Swiss Design in Editorial Layouts",
    category: "Editorial Design",
    duration: "01:50h",
    imagePath: seventeen,
    description:
      "How Swiss design has revolutionized the world of magazines, newspapers, and digital publications.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Using grids to create harmonious editorial layouts.",
      "Why readability is key in Swiss editorial design.",
      "The evolution of editorial design in the digital age.",
    ],
    sponsors: [
      {
        name: "LayoutPro",
        description: "Advanced tools for editorial design.",
      },
    ],
    links: [{ label: "Learn about editorial grids", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Editorial design and Swiss principles go hand in hand...",
      },
    ],
  },
  {
    date: "2025-05-06",
    title: "Swiss Packaging Design — Form and Function",
    category: "Packaging Design",
    duration: "01:30h",
    imagePath: eighteen,
    description:
      "How Swiss design principles influence sustainable and visually striking packaging.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "The importance of simplicity in packaging.",
      "How Swiss design impacts eco-friendly packaging trends.",
      "Case studies of iconic Swiss packaging designs.",
    ],
    sponsors: [
      {
        name: "PackSwiss",
        description: "Sustainable packaging with Swiss aesthetics.",
      },
    ],
    links: [{ label: "Swiss packaging trends", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Packaging design reflects the core of Swiss principles: functionality and beauty...",
      },
    ],
  },
  {
    date: "2025-05-13",
    title: "Swiss Design in Motion Graphics",
    category: "Motion Design",
    duration: "01:45h",
    imagePath: nineteen,
    description:
      "Adapting Swiss design principles to the dynamic world of motion graphics.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Translating grid systems into motion.",
      "Why simplicity works best in animation.",
      "The evolution of Swiss design in digital media.",
    ],
    sponsors: [
      {
        name: "MotionGrid",
        description: "Tools for minimalist motion design.",
      },
    ],
    links: [{ label: "Swiss motion graphics", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss design principles extend seamlessly into motion graphics...",
      },
    ],
  },
  {
    date: "2025-05-20",
    title: "The Role of Color in Swiss Design",
    category: "Color Theory",
    duration: "01:20h",
    imagePath: twenty,
    description:
      "How Swiss designers use color intentionally to create harmony and focus in their work.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Minimalist approaches to color in Swiss design.",
      "Balancing neutrality with impactful accent colors.",
      "Color theory essentials for modern designers.",
    ],
    sponsors: [
      {
        name: "ColorGrid",
        description: "Color palettes inspired by Swiss minimalism.",
      },
    ],
    links: [{ label: "Color theory and design", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Color plays a subtle yet powerful role in Swiss design...",
      },
    ],
  },
  {
    date: "2025-05-27",
    title: "Swiss Design in Wayfinding Systems",
    category: "Environmental Design",
    duration: "02:00h",
    imagePath: twentyOne,
    description:
      "Learn how Swiss design principles shape intuitive and effective wayfinding systems worldwide.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "The importance of clarity in wayfinding.",
      "Examples of Swiss-inspired wayfinding systems.",
      "How to design for user-centric navigation.",
    ],
    sponsors: [
      {
        name: "WayfindPro",
        description: "Simplify navigation with Swiss design principles.",
      },
    ],
    links: [{ label: "Explore wayfinding design", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss design is at the forefront of wayfinding systems...",
      },
    ],
  },
  {
    date: "2025-06-03",
    title: "Designing Accessible Interfaces with Swiss Principles",
    category: "Accessibility",
    duration: "01:35h",
    imagePath: twentyTwo,
    description:
      "How Swiss design principles align with accessibility standards to create inclusive digital experiences.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "How simplicity aids accessibility.",
      "Creating layouts for diverse user needs.",
      "Swiss design as a model for universal usability.",
    ],
    sponsors: [
      { name: "AccessDesign", description: "Inclusive design made simple." },
    ],
    links: [{ label: "Accessible design guidelines", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Accessibility and Swiss design share a common goal: universality...",
      },
    ],
  },
  {
    date: "2025-06-10",
    title: "The Helvetica Effect — Cultural Impact of a Typeface",
    category: "Typography",
    duration: "01:50h",
    imagePath: twentyThree,
    description:
      "An exploration of Helvetica’s influence on culture and design over decades.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "The global adoption of Helvetica.",
      "Why Helvetica became synonymous with clarity.",
      "Cultural mileneutrals influenced by Helvetica.",
    ],
    sponsors: [
      {
        name: "TypeCulture",
        description: "Celebrating iconic typefaces worldwide.",
      },
    ],
    links: [{ label: "Explore Helvetica’s history", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Helvetica transcends design—it’s a cultural phenomenon...",
      },
    ],
  },
  {
    date: "2025-06-17",
    title: "Swiss Aesthetics in Data Visualization",
    category: "Data Design",
    duration: "01:40h",
    imagePath: twentyFour,
    description:
      "How Swiss design principles create effective and aesthetically pleasing data visualizations.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Using grids to structure data visualizations.",
      "The role of simplicity in presenting complex data.",
      "Why Swiss design principles improve comprehension.",
    ],
    sponsors: [
      {
        name: "DataSwiss",
        description: "Better data visualization tools for modern designers.",
      },
    ],
    links: [{ label: "Swiss data design techniques", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss design offers a unique approach to visualizing data effectively...",
      },
    ],
  },
  {
    date: "2025-06-24",
    title: "The International Style — Swiss Design Goes Global",
    category: "Design History",
    duration: "02:05h",
    imagePath: twentyFive,
    description:
      "A discussion on how the International Typographic Style brought Swiss design to the world stage.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "What defines the International Typographic Style?",
      "Key designers who spread Swiss design globally.",
      "How the style evolved beyond Switzerland.",
    ],
    sponsors: [
      {
        name: "DesignHistory",
        description: "Uncover the past to inspire the future.",
      },
    ],
    links: [{ label: "Learn about International Typographic Style", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "The International Typographic Style is a testament to Swiss design’s impact worldwide...",
      },
    ],
  },
  {
    date: "2025-07-01",
    title: "Swiss Design for Startups — Building a Strong Visual Identity",
    category: "Business Design",
    duration: "01:30h",
    imagePath: twentySix,
    description:
      "How startups can use Swiss design principles to establish impactful and professional branding.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "Applying Swiss design principles to brand building.",
      "How simplicity builds trust in startup branding.",
      "Case studies of startups using Swiss design.",
    ],
    sponsors: [
      {
        name: "BrandStarter",
        description: "Helping startups create timeless branding.",
      },
    ],
    links: [{ label: "Swiss branding for startups", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Swiss design is a powerful tool for creating strong visual identities...",
      },
    ],
  },
  {
    date: "2025-03-04",
    title: "The Evolution of Helvetica",
    category: "Typography",
    duration: "02:00h",
    imagePath: twentySeven,
    description:
      "A journey through the history of Helvetica, the world’s most famous typeface.",
    listenOn: [
      { name: "Spotify", url: "#" },
      { name: "Apple Podcast", url: "#" },
    ],
    topics: [
      "The origins of Helvetica and its initial design goals.",
      "How Helvetica has adapted to different mediums.",
      "Why Helvetica remains relevant in modern design.",
    ],
    sponsors: [
      {
        name: "TypeHistory",
        description: "Explore the legacy of iconic typefaces.",
      },
    ],
    links: [{ label: "History of Helvetica", url: "#" }],
    transcript: [
      {
        speaker: "Host",
        text: "Helvetica is more than just a typeface—it’s a cultural icon...",
      },
    ],
  },
];

interface PodcastType {
  date: string;
  title: string;
  category: string;
  duration: string;
  imagePath: StaticImageData;
  description: string;
  listenOn: { name: string; url: string }[];
  topics: string[];
  sponsors: { name: string; description: string }[];
  links: { label: string; url: string }[];
  transcript: { speaker: string; text: string }[];
}

export default function PodcastList() {
  const selected = useRef(-1);
  const listO = useRef<HTMLDivElement>(null);

  const togglePodcastDetails = (index: number) => {
    if (!listO.current) return;

    const currentSelected = selected.current;
    const currentElement = listO.current.children[currentSelected];
    const newElement = listO.current.children[index];

    // Close open podcast row
    if (currentSelected > -1) {
      currentElement.classList.remove("active");
      (currentElement.children[1] as HTMLElement).style.maxHeight = "0px";
    }

    if (currentSelected === index) {
      selected.current = -1;
    } else {
      // Open new podcast row
      selected.current = index;
      newElement.classList.add("active");
      (newElement.children[1] as HTMLElement).style.maxHeight = `${
        (newElement.children[1] as HTMLElement).scrollHeight
      }px`;
    }
  };

  return (
    <Wrapper variant="standard">
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 py-4 text-sm border-b border-neutral-200 dark:border-neutral-900 text-black dark:text-neutral-400 font-serif">
        <div className="">Date</div>
        <div className="md:col-span-3">Archive</div>
        <div className="hidden md:block">Type</div>
        <div className="text-right hidden md:block text-neutral-500">
          Duration
        </div>
      </div>
      <div
        ref={listO}
        className="project-list divide-y divide-neutral-200 dark:divide-neutral-900"
      >
        {/* Project rows  */}
        {podcastData.map((podcast, index) => (
          <PodcastItem
            key={index}
            index={index}
            togglePodcastDetails={togglePodcastDetails}
            podcast={podcast}
          />
        ))}
      </div>
    </Wrapper>
  );
}

function PodcastItem({
  index,
  togglePodcastDetails,
  podcast,
}: {
  index: number;
  togglePodcastDetails: (index: number) => void;
  podcast: PodcastType;
}) {
  return (
    <div key={index} className="group">
      <div
        onClick={() => togglePodcastDetails(index)}
        className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 font-serif py-4 cursor-pointer items-center text-black dark:text-neutral-400"
      >
        <div>
          <Text tag="p" variant="textBase" className="italic text-neutral-500 ">
            {podcast.date}
          </Text>
        </div>
        <div className="col-span-3">
          <Text tag="p" variant="textBase" className="  tracking-wide">
            {podcast.title}
          </Text>
        </div>
        <div className="hidden md:block">
          <Text tag="p" variant="textBase" className="italic">
            {podcast.category}
          </Text>
        </div>
        <div className="text-right text-neutral-500 hidden md:block italic">
          <Text tag="p" variant="textBase">
            {podcast.duration}
          </Text>
        </div>
      </div>
      <div className="overflow-hidden max-h-0 transition-[max-height] duration-500 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-4 md:py-8">
          <div className="md:col-span-2">
            <Text
              tag="p"
              variant="textBase"
              className="text-neutral-500 text-balance"
            >
              {podcast.description}
            </Text>
            <div className="mt-8">
              <div className="flex">
                <NotesAndTranscripts index={index} podcast={podcast}>
                  <Button
                    id={`openModal-${index}`}
                    className="text-xs h-10 cursor-pointer bg-base-medium hover:bg-base-medium/80 dark:bg-neutral-900 dark:text-white flex items-center gap-4 text-black rounded-full px-6"
                  >
                    Read notes and Transcript <span>→</span>
                  </Button>
                </NotesAndTranscripts>
              </div>
              <div className="mt-12">
                <Text
                  tag="p"
                  variant="textBase"
                  className="text-black italic font-serif"
                >
                  Listen on
                </Text>
                <Wrapper variant="prose">
                  <ul role="list">
                    {podcast.listenOn.map((platform) => (
                      <li key={platform.name}>
                        <Text
                          tag="a"
                          variant="textSM"
                          href={platform.url}
                          className="hover:underline"
                        >
                          {platform.name}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Wrapper>
              </div>
            </div>
          </div>
          <div className=" md:col-start-3">
            <Image
              src={podcast.imagePath}
              alt={podcast.title}
              className=" w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NotesAndTranscripts({
  index,
  podcast,
  children,
}: {
  index: number;
  podcast: PodcastType;
  children: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side={"bottom"}
        className="h-[calc(100%-3rem)] md:top-12 overflow-y-scroll max-w-3xl mx-auto bg-base-medium dark:bg-neutral-900 shadow ring ring-neutral-200 dark:ring-neutral-800 transition-all duration-300 ease-in-out transform"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>{podcast.title}</SheetTitle>
          <SheetDescription>{podcast.title}</SheetDescription>
        </SheetHeader>
        <div className=" bg-base-medium dark:bg-neutral-900 shadow ring ring-neutral-200 dark:ring-neutral-800">
          <SheetClose asChild>
            <button
              id={`closeModal-${index}`}
              className="absolute cursor-pointer top-8 right-8 text-xs text-black dark:text-neutral-400"
            >
              Close
            </button>
          </SheetClose>
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-2 texrt-black dark:text-neutral-400">
              <Text tag="p" variant="textBase" className="font-serif italic">
                <span>{podcast.date}</span>
              </Text>
              <span>·</span>
              <Text tag="p" variant="textBase" className="font-serif ">
                <span>{podcast.title}</span>
              </Text>
              <span>·</span>
              <Text tag="p" variant="textBase" className="font-serif italic">
                <span>{podcast.category}</span>
              </Text>
              <span>·</span>
              <Text tag="p" variant="textBase" className="font-serif italic">
                <span>{podcast.duration}</span>
              </Text>
            </div>
            <div className="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-12">
              <Wrapper variant="prose">
                <div>
                  <h3>Topics</h3>
                  <ul>
                    {podcast.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Sponsors</h3>
                  <ul>
                    {podcast.sponsors.map((sponsor) => (
                      <li key={sponsor.name}>
                        <strong>{sponsor.name}</strong> —{sponsor.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Links</h3>
                  <ul>
                    {podcast.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.url} className="hover:underline">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Wrapper>
              <Wrapper variant="prose">
                <h3>Transcript</h3>
                <ul>
                  {podcast.transcript.map((entry) => (
                    <li key={entry.speaker + entry.text}>
                      <strong>{entry.speaker}:</strong> {entry.text}
                    </li>
                  ))}
                </ul>
              </Wrapper>
            </div>
          </div>
        </div>

        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
