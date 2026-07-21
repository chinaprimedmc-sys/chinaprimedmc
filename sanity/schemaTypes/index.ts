import { blogPostType } from "@/sanity/schemaTypes/blog-post";
import { destinationType } from "@/sanity/schemaTypes/destination";
import { destinationHubType } from "@/sanity/schemaTypes/destination-hub";
import { homePageType } from "@/sanity/schemaTypes/home-page";
import { journeyType } from "@/sanity/schemaTypes/journey";
import { r2ImageType } from "@/sanity/schemaTypes/r2-image";
import { siteSettingsType } from "@/sanity/schemaTypes/site-settings";

export const schemaTypes = [
  r2ImageType,
  journeyType,
  destinationType,
  destinationHubType,
  blogPostType,
  homePageType,
  siteSettingsType,
];
