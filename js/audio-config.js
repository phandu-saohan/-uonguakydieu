// Audio layer registry — every distinct sound is a named layer that can be
// toggled and gain-trimmed independently, at runtime, persisted to localStorage.
// audio.js gates every sound through cfg[key]; main.js / the HUD panel flip them.
//
// group is only for grouping in the toggle UI. `on` and `gain` are the live
// state. Add a layer here + gate it in audio.js with this._g('key', value).

export const AUDIO_LAYER_DEFS = [
  // powertrain
  { key: 'engine',      label: 'Động cơ',        group: 'Hệ truyền động' },
  { key: 'exhaust',     label: 'Âm pô',  group: 'Hệ truyền động' },
  { key: 'shift',       label: 'Đổi số',    group: 'Hệ truyền động' },
  { key: 'limiter',     label: 'Giới hạn vòng tua',   group: 'Hệ truyền động' },
  { key: 'turbo',       label: 'Turbô',         group: 'Hệ truyền động' },
  // tires
  { key: 'tireSqueal',  label: 'Lốp rít',   group: 'Lốp xe' },
  { key: 'tireScrub',   label: 'Lốp trượt ngang',    group: 'Lốp xe' },
  { key: 'lockup',      label: 'Kẹt bánh phanh',  group: 'Lốp xe' },
  // road / chassis
  { key: 'roar',        label: 'Tiếng đường',        group: 'Đường' },
  { key: 'seams',       label: 'Khe đường',    group: 'Đường' },
  { key: 'curb',        label: 'Đâm lên vỉa hè',  group: 'Đường' },
  { key: 'grass',       label: 'Ra ngoài đường',     group: 'Đường' },
  { key: 'scrape',      label: 'Bỏi gầm xe',  group: 'Đường' },
  { key: 'landing',     label: 'Té / tiếp đất', group: 'Khung xe' },
  // brakes
  { key: 'brakeRub',    label: 'Ma sát phanh',group: 'Phanh' },
  { key: 'brakeSqueal', label: 'Phanh rít',  group: 'Phanh' },
  // ambient
  { key: 'wind',        label: 'Gió',          group: 'Nền' },
  { key: 'rain',        label: 'Mưa',          group: 'Nền' },
];

export function defaultAudioCfg() {
  const c = {};
  for (const d of AUDIO_LAYER_DEFS) c[d.key] = { on: true, gain: 1 };
  return c;
}

const LS_KEY = 'ns-audio-cfg';

// merge persisted overrides onto the defaults (so new layers appear enabled
// even for users with an older saved config).
export function loadAudioCfg() {
  const c = defaultAudioCfg();
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    for (const k in c) if (saved[k]) {
      if (typeof saved[k].on === 'boolean') c[k].on = saved[k].on;
      if (typeof saved[k].gain === 'number') c[k].gain = saved[k].gain;
    }
  } catch (e) {}
  return c;
}

export function saveAudioCfg(cfg) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(cfg)); } catch (e) {}
}
