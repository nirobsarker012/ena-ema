import PersonIcon from "../assets/icons/User.svg";
import EmailIcon from "../assets/icons/mail.svg";
import PhoneIconn from "../assets/icons/Phone.svg";
import SecureIcon from "../assets/icons/Lock-white.svg";
import CheckIcon from "../assets/icons/White-check.svg";
import StarIcon from "../assets/icons/whiteStar.svg";
import RocketIcon from "../assets/icons/RocketLaunch.svg";
import PaletteIcon from "../assets/icons/Palette.svg";
import LightIcon from "../assets/icons/Lightning.svg";
import DollarIcon from "../assets/icons/CurrencyDollar.svg";
import ClockWiseIcon from "../assets/icons/ArrowsClockwise.svg";
import TrophyIcon from "../assets/icons/Trophy.svg";
import Mac1 from "../assets/MacbookImg/MacBook Pro 16_ - 1.svg";
import Mac2 from "../assets/MacbookImg/MacBook Pro 16_ - 2.svg";
import Mac3 from "../assets/MacbookImg/MacBook Pro 16_ - 3.svg";
import Mac4 from "../assets/MacbookImg/Macbook Pro 16_-4.svg";
import GreenRightIcon from "../assets/icons/greenRight.svg";
import ArrowRightIcon from "../assets/icons/ArrowRight.svg";
export const heroFormItem = [
  {
    id: 1,
    title: "Your name",
    icon: PersonIcon,
  },
  {
    id: 2,
    title: "Email Address",
    icon: EmailIcon,
  },
  {
    id: 3,
    title: "Phone Number",
    icon: PhoneIconn,
  },
];

// Hero Staisfy Content
export const satisFaction = [
  {
    id: 1,
    title: "SSL secure",
    icon: SecureIcon,
  },
  {
    id: 2,
    title: "Money-back guaranteed",
    icon: CheckIcon,
  },
  {
    id: 3,
    title: "Satisfaction guaranteed",
    icon: StarIcon,
  },
];

// Business cart data
export const businessData = [
  {
    id: 1,
    title: "Proven Conversion Framework",
    desc: "Designs based on 100+ tested layouts that actually convert visitors into customers.",
    icon: RocketIcon,
  },
  {
    id: 2,
    title: "Agency Level Design",
    desc: "Modern, premium, and tailored for your brand - without the agency price tag.",
    icon: PaletteIcon,
  },
  {
    id: 3,
    title: "5-day Guaranteed Delivery",
    desc: "With a highly professional team, we deliver on time, everytime.",
    icon: LightIcon,
  },
  {
    id: 4,
    title: "Transparent Pricing",
    desc: "No hidden fees, just clear value. What you see is what you pay.",
    icon: DollarIcon,
  },
  {
    id: 5,
    title: "Revisions Until You're Happy",
    desc: "We keep working until it's right. Your satisfaction is guaranteed.",
    icon: ClockWiseIcon,
  },
  {
    id: 6,
    title: "Results That Speak",
    desc: "Our pages consistently outperform industry averages for conversions.",
    icon: TrophyIcon,
  },
];

// Studies Data
export const studiesData = [
  {
    id: 1,
    macImage: Mac1,
    title: "Flowpilot",
    desc1: "20% high conversion than average in first week",
    desc2: "Clean and modern design with clear CTA",
    icon: GreenRightIcon,
  },
  {
    id: 2,
    macImage: Mac2,
    title: "GrowthSummit",
    desc1: "20% high conversion than average in first week",
    desc2: "Clean and modern design with clear CTA",
    icon: GreenRightIcon,
  },
  {
    id: 3,
    title: "Flowpilot",
    macImage: Mac3,
    desc1: "20% high conversion than average in first week",
    desc2: "Clean and modern design with clear CTA",
    icon: GreenRightIcon,
  },
  {
    id: 4,
    macImage: Mac4,
    title: "GrowthSummit",
    desc1: "20% high conversion than average in first week",
    desc2: "Clean and modern design with clear CTA",
    icon: GreenRightIcon,
  },
];

// Price Data
export const priceCardData = [
  {
    id: 1,
    name: "Basic",
    desc: "Perfect for solopreneurs",
    price: 200,
    icon: ArrowRightIcon,
    btnTitle: "Start my project",
    priceLink: [
      {
        title: "1 Landing Page (Design + Development)",
      },
      {
        title: "Hosting Deployment",
      },
      {
        title: "5-Day Delivery",
      },
      {
        title: "Basic Support",
      },
    ],
  },
  {
    id: 2,
    name: "Standard",
    desc: "Best balance of value & features",
    price: 300,
    icon: ArrowRightIcon,
    btnTitle: "Start my project",
    priceLink: [
      {
        title: "Everything in Basic",
      },
      {
        title: "Extra Custom Section",
      },
      {
        title: "Free Hosting Setup",
      },
      {
        title: "Free Consultation Call",
      },
      {
        title: "Priority Support",
      },
    ],
  },
  {
    id: 3,
    name: "Premium",
    desc: "For brands & agencies",
    price: 500,
    icon: ArrowRightIcon,
    btnTitle: "Start my project",
    priceLink: [
      {
        title: "Everything in Standard",
      },
      {
        title: "Advanced Animations",
      },
      {
        title: "Priority Delivery (3 Days)",
      },
      {
        title: "6 Months Free Support",
      },
      {
        title: "Performance Optimization",
      },
    ],
  },
];
