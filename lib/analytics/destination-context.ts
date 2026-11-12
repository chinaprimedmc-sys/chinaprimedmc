import { publicRouteSlugs } from "@/config/public-route-slugs";
import { travelerContentContext } from "@/config/traveler-guide-routes";

/** Only public route identifiers enter analytics; never copy arbitrary query values. */
export function pageConversionContext(pathname: string, search = "") {
  const segments = pathname.split("/").filter(Boolean);
  const query = new URLSearchParams(search);
  const destination =
    segments.length === 2 && segments[0] === "destinations"
      ? segments[1]
      : (query.get("from_destination") ??
        (pathname === "/start-planning" ? query.get("destination") : null));
  const journey =
    segments.length === 2 && segments[0] === "tours"
      ? segments[1]
      : pathname === "/start-planning"
        ? query.get("journey")
        : null;
  return {
    ...travelerContentContext(pathname, search),
    ...(destination && (publicRouteSlugs.destinations as readonly string[]).includes(destination)
      ? { destination_slug: destination }
      : {}),
    ...(journey && (publicRouteSlugs.tours as readonly string[]).includes(journey)
      ? { journey_slug: journey }
      : {}),
  };
}
