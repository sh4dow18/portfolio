// Projects Metadata Requirements
import { ROUTES_MAP } from "@/shared/config/routes";
import type { Metadata } from "next";
// Projects Metadata
export const PROJECTS_METADATA: Metadata = {
  title: ROUTES_MAP["projects"].title,
};
