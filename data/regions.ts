export interface Region {
  name: string;
  leadersTrained: number;
  programs: string[];
}

export const regions: Region[] = [
  { name: "Addis Ababa", leadersTrained: 1800, programs: ["TLFDP", "SLD", "YLD", "CML"] },
  { name: "Oromia", leadersTrained: 850, programs: ["TLFDP", "YLD"] },
  { name: "Amhara", leadersTrained: 620, programs: ["SLD", "CML"] },
  { name: "SNNPR", leadersTrained: 480, programs: ["TLFDP", "YLD"] },
  { name: "Tigray", leadersTrained: 310, programs: ["SLD"] },
  { name: "Dire Dawa", leadersTrained: 240, programs: ["YLD", "CML"] },
  { name: "Sidama", leadersTrained: 210, programs: ["TLFDP"] },
  { name: "Harari", leadersTrained: 150, programs: ["YLD"] },
  { name: "Somali", leadersTrained: 140, programs: ["SLD"] },
];
