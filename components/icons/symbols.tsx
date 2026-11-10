/** One SSR-safe icon family for the entire site. Names preserve existing call sites. */
import {
  ArrowCounterClockwiseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  ArrowsClockwiseIcon,
  BedIcon,
  BellRingingIcon,
  BuildingsIcon,
  CalendarCheckIcon,
  CalendarDotsIcon,
  CaretDownIcon,
  ChatCircleIcon,
  CheckIcon,
  CheckCircleIcon,
  CircleNotchIcon,
  ClockIcon,
  CompassIcon,
  CookieIcon,
  CurrencyDollarSimpleIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  FileTextIcon,
  HandHeartIcon,
  HeartIcon,
  ImageBrokenIcon,
  InstagramLogoIcon,
  LightbulbIcon,
  ListIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MinusIcon,
  PathIcon,
  PlusIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  TrainIcon,
  TranslateIcon,
  TrashIcon,
  UsersThreeIcon,
  WalletIcon,
  WarningCircleIcon,
  WhatsappLogoIcon,
  XIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon, IconProps } from "@phosphor-icons/react";
import { forwardRef } from "react";

export type SiteIcon = Icon;

function defineIcon(Glyph: Icon): SiteIcon {
  const Component = forwardRef<SVGSVGElement, IconProps>(function SiteIcon(
    { size = 20, className, ...props },
    ref,
  ) {
    // Phosphor controls line weight internally; legacy stroke overrides must not distort it.
    const attributes = { ...props };
    delete attributes.strokeWidth;
    return (
      <Glyph
        aria-hidden="true"
        focusable="false"
        {...attributes}
        ref={ref}
        size={size}
        weight="regular"
        className={className ? `site-icon ${className}` : "site-icon"}
      />
    );
  });
  Component.displayName = `Site${Glyph.displayName ?? "Icon"}`;
  return Component;
}

export const AlertCircle = /* @__PURE__ */ defineIcon(WarningCircleIcon);
export const ArrowLeft = /* @__PURE__ */ defineIcon(ArrowLeftIcon);
export const ArrowRight = /* @__PURE__ */ defineIcon(ArrowRightIcon);
export const ArrowUpRight = /* @__PURE__ */ defineIcon(ArrowUpRightIcon);
export const BedDouble = /* @__PURE__ */ defineIcon(BedIcon);
export const BellRing = /* @__PURE__ */ defineIcon(BellRingingIcon);
export const Building2 = /* @__PURE__ */ defineIcon(BuildingsIcon);
export const CalendarClock = /* @__PURE__ */ defineIcon(CalendarCheckIcon);
export const CalendarDays = /* @__PURE__ */ defineIcon(CalendarDotsIcon);
export const Check = /* @__PURE__ */ defineIcon(CheckIcon);
export const CheckCircle2 = /* @__PURE__ */ defineIcon(CheckCircleIcon);
export const ChevronDown = /* @__PURE__ */ defineIcon(CaretDownIcon);
export const CircleCheck = /* @__PURE__ */ defineIcon(CheckCircleIcon);
export const CircleDollarSign = /* @__PURE__ */ defineIcon(CurrencyDollarSimpleIcon);
export const Clock3 = /* @__PURE__ */ defineIcon(ClockIcon);
export const Compass = /* @__PURE__ */ defineIcon(CompassIcon);
export const Cookie = /* @__PURE__ */ defineIcon(CookieIcon);
export const Facebook = /* @__PURE__ */ defineIcon(FacebookLogoIcon);
export const FileCheck2 = /* @__PURE__ */ defineIcon(FileTextIcon);
export const FileText = /* @__PURE__ */ defineIcon(FileTextIcon);
export const Heart = /* @__PURE__ */ defineIcon(HeartIcon);
export const HeartHandshake = /* @__PURE__ */ defineIcon(HandHeartIcon);
export const ImageOff = /* @__PURE__ */ defineIcon(ImageBrokenIcon);
export const Instagram = /* @__PURE__ */ defineIcon(InstagramLogoIcon);
export const Languages = /* @__PURE__ */ defineIcon(TranslateIcon);
export const Lightbulb = /* @__PURE__ */ defineIcon(LightbulbIcon);
export const List = /* @__PURE__ */ defineIcon(ListIcon);
export const Loader2 = /* @__PURE__ */ defineIcon(CircleNotchIcon);
export const Mail = /* @__PURE__ */ defineIcon(EnvelopeSimpleIcon);
export const MapPin = /* @__PURE__ */ defineIcon(MapPinIcon);
export const Menu = /* @__PURE__ */ defineIcon(ListIcon);
export const MessageCircle = /* @__PURE__ */ defineIcon(ChatCircleIcon);
export const Minus = /* @__PURE__ */ defineIcon(MinusIcon);
export const Plus = /* @__PURE__ */ defineIcon(PlusIcon);
export const ReceiptText = /* @__PURE__ */ defineIcon(ReceiptIcon);
export const RefreshCw = /* @__PURE__ */ defineIcon(ArrowsClockwiseIcon);
export const Route = /* @__PURE__ */ defineIcon(PathIcon);
export const Search = /* @__PURE__ */ defineIcon(MagnifyingGlassIcon);
export const Settings2 = /* @__PURE__ */ defineIcon(SlidersHorizontalIcon);
export const ShieldCheck = /* @__PURE__ */ defineIcon(ShieldCheckIcon);
export const SlidersHorizontal = /* @__PURE__ */ defineIcon(SlidersHorizontalIcon);
export const TrainFront = /* @__PURE__ */ defineIcon(TrainIcon);
export const Trash2 = /* @__PURE__ */ defineIcon(TrashIcon);
export const UsersRound = /* @__PURE__ */ defineIcon(UsersThreeIcon);
export const WalletCards = /* @__PURE__ */ defineIcon(WalletIcon);
export const X = /* @__PURE__ */ defineIcon(XIcon);
export const WhatsAppMark = /* @__PURE__ */ defineIcon(WhatsappLogoIcon);
export const ArrowCounterClockwise = /* @__PURE__ */ defineIcon(ArrowCounterClockwiseIcon);
