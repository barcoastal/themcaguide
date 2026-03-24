import fs from "fs";
import path from "path";
import { GlossaryTerm } from "./types";

export function getGlossaryTerms(): GlossaryTerm[] {
  const filePath = path.join(process.cwd(), "content", "glossary.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return (data as GlossaryTerm[]).sort((a, b) => a.term.localeCompare(b.term));
}

export function getGlossaryLetters(terms: GlossaryTerm[]): string[] {
  const letters = new Set(terms.map((t) => t.term[0].toUpperCase()));
  return Array.from(letters).sort();
}
