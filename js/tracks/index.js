// Track registry — metadata for the main menu. The actual point data is
// imported statically in main.js (small enough to bundle) and selected by id.
export const TRACKS = [
  { id: 'nordschleife', name: 'Đường đua kỳ diệu',        loc: 'Đức',     km: 20.7, spawn: 3550 },
  { id: 'spa',          name: 'Spa-Francorchamps',         loc: 'Bỉ',     km: 7.0,  spawn: 40 },
  { id: 'everland',     name: 'Everland Speedway',         loc: 'Hàn Quốc', km: 4.4,  spawn: 20 },
  { id: 'practice',     name: 'Đường đua tập luyện',            loc: 'Sân thử nghiệm', km: 2.4, spawn: 20 },
  { id: 'random',       name: 'Ngẫu nhiên',                    loc: 'Tự sinh',    km: 0,   spawn: 0, random: true },
  { id: 'kart',         name: 'Đường Kart',              loc: 'Đường Kart',  km: 1.5, spawn: 15, hidden: true },
];

export function trackMeta(id) {
  return TRACKS.find(t => t.id === id) || TRACKS[0];
}
