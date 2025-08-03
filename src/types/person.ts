export type ScienceField =
  | "филология"
  | "медицина"
  | "экономика"
  | "биология"
  | "физика"
  | "история"
  | "общественные науки"
  | "технические науки"
  | "юриспруденция"
  | "химия";

export interface Doctor {
  id: string;
  fullName: string;
  scienceField: ScienceField;
}
