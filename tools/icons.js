// 台北的陽光 插畫風圖示組（取代所有 emoji）
// 風格：扁平色塊、圓角線條、與網站標誌相同的色盤。viewBox 皆為 0 0 48 48。
const Y = '#FFC83D', O = '#F5A524', B = '#2F74B5', LB = '#9FD0F5', P = '#E2677E', G = '#2F8A57', LG = '#8FD19E',
  V = '#7A52B8', BR = '#7A4A12', C = '#FFF1D6', W = '#FFFFFF', SK = '#FFD8A8', R = '#D9534F', GR = '#9AA3AD';
const st = (c, w = 3.5) => `stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
const heartPath = (cx, cy, s, c) => `<path transform="translate(${cx - 12 * s} ${cy - 11 * s}) scale(${s})" d="M12 21s-8.5-5.2-8.5-11.2C3.5 6.6 5.9 4.5 8.4 4.5c1.7 0 3 .9 3.6 2.2.6-1.3 1.9-2.2 3.6-2.2 2.5 0 4.9 2.1 4.9 5.3C20.5 15.8 12 21 12 21z" fill="${c}"/>`;
const face = (cx, cy, r, skin, hair) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${skin}"/>${hair || ''}<circle cx="${cx - r * .38}" cy="${cy - r * .05}" r="${r * .13}" fill="${BR}"/><circle cx="${cx + r * .38}" cy="${cy - r * .05}" r="${r * .13}" fill="${BR}"/><path d="M${cx - r * .35} ${cy + r * .35} q${r * .35} ${r * .3} ${r * .7} 0" ${st(BR, r * .14)}/>`;
const sunRays = (cx, cy, r1, r2, c, w = 3.5) => [0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<line x1="${cx}" y1="${cy - r1}" x2="${cx}" y2="${cy - r2}" transform="rotate(${a} ${cx} ${cy})" ${st(c, w)}/>`).join('');

const I = {
  sun: `${sunRays(24, 24, 21, 17, O)}<circle cx="24" cy="24" r="12" fill="${Y}"/>${heartPath(24, 24.5, .55, P)}`,
  heart: `${heartPath(24, 25, 1.75, P)}<circle cx="31" cy="15" r="3" fill="#F7A9BA"/>`,
  tree: `<rect x="21" y="28" width="6" height="15" rx="3" fill="${BR}"/><circle cx="24" cy="19" r="14" fill="${G}"/><circle cx="18" cy="15" r="5" fill="${LG}"/>`,
  mountain: `<path d="M3 41 L18 14 L27 29 L32 22 L45 41Z" fill="${G}"/><path d="M18 14 L13 23 L17 21 L20 24 L23 21Z" fill="${W}"/><circle cx="36" cy="11" r="5" fill="${Y}"/>`,
  soccer: `<circle cx="24" cy="24" r="18" fill="${W}" stroke="${BR}" stroke-width="2.5"/><path d="M24 17l6.7 4.9-2.6 7.9h-8.2l-2.6-7.9z" fill="${BR}"/>${[0,72,144,216,288].map((r)=>`<path d="M24 6.5l3.5 2.5-1.3 4h-4.4l-1.3-4z" fill="${BR}" transform="rotate(${r} 24 24)"/><path d="M24 13v4" ${st(BR,2)} transform="rotate(${r} 24 24)"/>`).join("")}`,
  house: `<path d="M6 23 L24 7 L42 23" ${st(P, 4.5)}/><rect x="11" y="21" width="26" height="20" rx="3" fill="${C}" stroke="${O}" stroke-width="2.5"/><rect x="20" y="28" width="8" height="13" rx="2" fill="${B}"/>`,
  rocket: `<path d="M24 4c8 6 10 16 6 28H18C14 20 16 10 24 4z" fill="${C}" stroke="${B}" stroke-width="2.5"/><circle cx="24" cy="17" r="4.5" fill="${LB}" stroke="${B}" stroke-width="2"/><path d="M18 26l-7 8 7-1zM30 26l7 8-7-1z" fill="${P}"/><path d="M20 34c0 5 2 8 4 10 2-2 4-5 4-10z" fill="${O}"/>`,
  gift: `<rect x="7" y="18" width="34" height="24" rx="3" fill="${P}"/><rect x="5" y="13" width="38" height="8" rx="3" fill="#F08AA0"/><rect x="21" y="13" width="6" height="29" fill="${Y}"/><path d="M24 13c-4-8-12-6-9-1 1 1 5 1 9 1zM24 13c4-8 12-6 9-1-1 1-5 1-9 1z" fill="${Y}"/>`,
  robot: `<line x1="24" y1="6" x2="24" y2="12" ${st(GR, 3)}/><circle cx="24" cy="6" r="3" fill="${P}"/><rect x="9" y="12" width="30" height="24" rx="8" fill="${LB}"/><circle cx="18" cy="23" r="3.5" fill="${B}"/><circle cx="30" cy="23" r="3.5" fill="${B}"/><path d="M18 30h12" ${st(B, 3)}/><rect x="15" y="37" width="18" height="6" rx="3" fill="${B}"/>`,
  plane: `<path d="M5 26l38-14-12 30-7-11z" fill="${LB}" stroke="${B}" stroke-width="2.5" stroke-linejoin="round"/><path d="M24 31l19-19" ${st(B, 2.5)}/>`,
  ticket: `<path d="M6 15h36v6a4 4 0 0 0 0 8v6H6v-6a4 4 0 0 0 0-8z" fill="${Y}"/><path d="M30 16v18" stroke="${O}" stroke-width="2.5" stroke-dasharray="3 3"/>${heartPath(18, 25, .55, P)}`,
  phone: `<path d="M8 30c0-12 7-18 16-18s16 6 16 18" fill="${P}"/><rect x="10" y="27" width="28" height="15" rx="5" fill="#F08AA0"/><circle cx="24" cy="34" r="4" fill="${W}"/><path d="M6 20c6-9 30-9 36 0" ${st(P, 4)}/>`,
  grandma: `${face(24, 27, 13, SK, `<path d="M11 25c0-10 6-14 13-14s13 4 13 14c-3-5-8-7-13-7s-10 2-13 7z" fill="${GR}"/><circle cx="24" cy="9" r="5" fill="${GR}"/>`)}<circle cx="19" cy="26" r="3.5" fill="none" stroke="${BR}" stroke-width="1.5"/><circle cx="29" cy="26" r="3.5" fill="none" stroke="${BR}" stroke-width="1.5"/>`,
  syringe: `<g transform="rotate(45 24 24)"><rect x="18" y="10" width="12" height="22" rx="3" fill="${LB}" stroke="${B}" stroke-width="2.5"/><rect x="18" y="20" width="12" height="12" rx="2" fill="${P}" opacity=".8"/><path d="M24 32v10M19 10h10M24 10V4M20 4h8" ${st(B, 2.5)}/></g>`,
  crossing: `<path d="M24 4l20 20-20 20L4 24z" fill="${Y}" stroke="${O}" stroke-width="2.5" stroke-linejoin="round"/><circle cx="21" cy="16" r="3" fill="${BR}"/><path d="M21 20l-3 8m3-8l4 7m-4-7l-1 8-3 6m4-6l4 6" ${st(BR, 2.5)}/><circle cx="29" cy="20" r="2.4" fill="${BR}"/><path d="M29 23v6l-2 4m2-4l2 4" ${st(BR, 2.2)}/>`,
  battery: `<rect x="6" y="14" width="32" height="20" rx="4" fill="${W}" stroke="${G}" stroke-width="3"/><rect x="38" y="20" width="4" height="8" rx="1.5" fill="${G}"/><rect x="10" y="18" width="16" height="12" rx="2" fill="${LG}"/><path d="M27 17l-5 8h5l-4 7" ${st(O, 2.6)}/>`,
  teddy: `<circle cx="13" cy="13" r="6" fill="#C98A4B"/><circle cx="35" cy="13" r="6" fill="#C98A4B"/><circle cx="24" cy="23" r="14" fill="#D9A066"/><ellipse cx="24" cy="28" rx="6" ry="4.5" fill="${C}"/><circle cx="19" cy="20" r="2" fill="${BR}"/><circle cx="29" cy="20" r="2" fill="${BR}"/><circle cx="24" cy="26.5" r="2" fill="${BR}"/>${heartPath(24, 41, .5, P)}`,
  scooter: `<circle cx="12" cy="36" r="6" fill="${BR}"/><circle cx="36" cy="36" r="6" fill="${BR}"/><circle cx="12" cy="36" r="2.5" fill="${C}"/><circle cx="36" cy="36" r="2.5" fill="${C}"/><path d="M12 30h14l6-14h5" ${st(B, 4)}/><path d="M16 30c0-6 4-9 10-9h3l-3 9z" fill="${LB}"/><path d="M33 16l3 20" ${st(B, 4)}/>`,
  clock: `<circle cx="24" cy="26" r="17" fill="${C}" stroke="${O}" stroke-width="4"/><path d="M24 16v10l7 5" ${st(BR, 3.5)}/><circle cx="11" cy="9" r="4" fill="${O}"/><circle cx="37" cy="9" r="4" fill="${O}"/>`,
  shield: `<path d="M24 4l17 6v12c0 11-8 18-17 22C15 40 7 33 7 22V10z" fill="${B}"/><path d="M24 9l12 4v9c0 8-5 13-12 16z" fill="${LB}" opacity=".5"/>${heartPath(24, 24, .75, Y)}`,
  handshake: `<path d="M3 20l9-6 9 4 6-3 9 3 9 6-6 10-10 6-12-6z" fill="${Y}"/><path d="M21 18l-6 6c2 2 5 2 7 0l5-4 9 9" ${st(O, 3)}/><path d="M3 20l6 12M45 20l-6 12" ${st(O, 3)}/>${heartPath(24, 12, .45, P)}`,
  thought: `<path d="M12 30a8 8 0 0 1 1-16 10 10 0 0 1 19-3 8 8 0 0 1 4 15 7 7 0 0 1-8 6H15a6 6 0 0 1-3-2z" fill="${LB}"/><circle cx="12" cy="38" r="3.5" fill="${LB}"/><circle cx="6" cy="44" r="2" fill="${LB}"/><circle cx="18" cy="22" r="2.2" fill="${B}"/><circle cx="25" cy="22" r="2.2" fill="${B}"/><circle cx="32" cy="22" r="2.2" fill="${B}"/>`,
  speech: `<path d="M8 8h32a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H22l-9 8v-8H8a5 5 0 0 1-5-5V13a5 5 0 0 1 5-5z" fill="${LB}"/><path d="M13 18h22M13 25h14" ${st(B, 3.2)}/>`,
  megaphone: `<path d="M6 19h8l20-10v30L14 29H6z" fill="${O}"/><rect x="4" y="18" width="10" height="12" rx="3" fill="${Y}"/><path d="M14 29l3 11h6l-3-11" fill="${P}"/><path d="M39 17c3 2 3 12 0 14M42 13c5 5 5 17 0 22" ${st(B, 3)}/>`,
  question: `<path d="M8 8h32a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H22l-9 8v-8H8a5 5 0 0 1-5-5V13a5 5 0 0 1 5-5z" fill="${V}" opacity=".85"/><path d="M19 16a5 5 0 1 1 6 5c-1 .5-1 1.5-1 3" ${st(W, 3.4)}/><circle cx="24" cy="29" r="2" fill="${W}"/>`,
  scales: `<path d="M24 6v34M14 42h20M9 13h30" ${st(BR, 3.2)}/><circle cx="24" cy="7" r="3" fill="${O}"/><path d="M9 13L3 27h12zM39 13l-6 14h12z" fill="${LB}"/><path d="M3 27a6 4 0 0 0 12 0zM33 27a6 4 0 0 0 12 0z" fill="${B}"/>`,
  search: `<circle cx="20" cy="20" r="13" fill="${LB}" stroke="${B}" stroke-width="4.5"/><path d="M30 30l12 12" ${st(O, 6)}/><path d="M14 16a7 7 0 0 1 6-4" ${st(W, 3)}/>`,
  eyes: `<ellipse cx="15" cy="24" rx="10" ry="13" fill="${W}" stroke="${BR}" stroke-width="2.5"/><ellipse cx="33" cy="24" rx="10" ry="13" fill="${W}" stroke="${BR}" stroke-width="2.5"/><circle cx="18" cy="26" r="5" fill="${B}"/><circle cx="36" cy="26" r="5" fill="${B}"/><circle cx="19.5" cy="24.5" r="1.6" fill="${W}"/><circle cx="37.5" cy="24.5" r="1.6" fill="${W}"/>`,
  books: `<rect x="6" y="10" width="10" height="32" rx="2" fill="${G}"/><rect x="18" y="6" width="10" height="36" rx="2" fill="${B}"/><rect x="29" y="12" width="10" height="31" rx="2" transform="rotate(-12 34 27)" fill="${P}"/><path d="M8 17h6M20 13h6" ${st(W, 2.4)}/>`,
  book: `<path d="M24 12c-5-4-13-5-19-3v30c6-2 14-1 19 3 5-4 13-5 19-3V9c-6-2-14-1-19 3z" fill="${C}" stroke="${O}" stroke-width="2.5" stroke-linejoin="round"/><path d="M24 12v30" ${st(O, 2.5)}/><path d="M10 18c3-1 7-1 10 1M10 25c3-1 7-1 10 1M28 19c3-2 7-2 10-1M28 26c3-2 7-2 10-1" ${st(B, 2.2)}/>`,
  greenbook: `<rect x="9" y="5" width="30" height="38" rx="4" fill="${G}"/><rect x="9" y="5" width="7" height="38" rx="3" fill="#226b43"/><path d="M21 33c4-1 8-1 12 0" ${st(LB, 3)}/><path d="M21 38c4-1 8-1 12 0" ${st(LB, 3)}/><circle cx="28" cy="18" r="6" fill="${Y}"/>`,
  newspaper: `<rect x="5" y="8" width="34" height="34" rx="4" fill="${W}" stroke="${B}" stroke-width="2.5"/><path d="M39 16h4v22a4 4 0 0 1-4 4" fill="${LB}" stroke="${B}" stroke-width="2.5"/><rect x="10" y="14" width="12" height="10" rx="2" fill="${Y}"/><path d="M26 15h8M26 21h8M10 29h24M10 35h18" ${st(B, 2.6)}/>`,
  globe: `<circle cx="24" cy="24" r="19" fill="${LB}"/><path d="M12 14c5 1 7 5 5 9s3 7 1 11M30 8c-2 4 1 7 5 8s5 6 3 10M27 38c3-4 8-4 10-1" ${st(G, 4)}/><circle cx="24" cy="24" r="19" fill="none" stroke="${B}" stroke-width="2.5"/>`,
  paw: `<ellipse cx="24" cy="31" rx="10" ry="8" fill="${O}"/><ellipse cx="11" cy="21" rx="4" ry="5" fill="${O}"/><ellipse cx="19" cy="13" rx="4" ry="5" fill="${O}"/><ellipse cx="29" cy="13" rx="4" ry="5" fill="${O}"/><ellipse cx="37" cy="21" rx="4" ry="5" fill="${O}"/>`,
  island: `<path d="M2 40q6-4 11 0t11 0 11 0 11 0v6H2z" fill="${B}"/><ellipse cx="24" cy="38" rx="15" ry="5" fill="${Y}"/><path d="M24 37c0-9 2-16 6-22" ${st(BR, 3.2)}/><path d="M30 15c-6-4-13-2-15 2 5-1 10 0 15-2zM30 15c5-5 12-4 14 0-5 0-10-1-14 0zM30 15c-1-6 3-10 8-10-3 3-5 7-8 10z" fill="${G}"/><circle cx="12" cy="10" r="4" fill="${O}"/>`,
  clapper: `<rect x="5" y="18" width="38" height="24" rx="4" fill="${B}"/><path d="M5 12l36-6 1.5 8-36 6z" fill="${BR}"/><path d="M12 11l5 7M22 9l5 7M32 7l5 7" ${st(W, 2.6)}/><path d="M20 24v12l10-6z" fill="${Y}"/>`,
  tv: `<rect x="4" y="12" width="40" height="27" rx="6" fill="${B}"/><rect x="8" y="16" width="32" height="19" rx="3" fill="${LB}"/><path d="M17 5l7 7 7-7" ${st(O, 3)}/><circle cx="24" cy="25" r="5" fill="${Y}"/><path d="M8 33q4-3 8 0t8 0 8 0 8 0" ${st(B, 2.4)}/><path d="M14 43h20" ${st(BR, 3)}/>`,
  mobile: `<rect x="13" y="4" width="22" height="40" rx="5" fill="${B}"/><rect x="16" y="9" width="16" height="27" rx="2" fill="${LB}"/>${heartPath(24, 22, .55, P)}<circle cx="24" cy="40" r="1.8" fill="${W}"/>`,
  backpack: `<path d="M17 10a7 7 0 0 1 14 0" ${st(BR, 3)}/><rect x="9" y="10" width="30" height="33" rx="9" fill="${O}"/><rect x="14" y="27" width="20" height="12" rx="3" fill="${Y}"/><path d="M14 31h20" ${st(O, 2)}/><circle cx="24" cy="18" r="3" fill="${P}"/>`,
  muscle: `<path d="M10 40c-4-8 0-18 6-24 3-3 3-9 8-10 4-1 6 3 3 6-2 2-5 2-5 5 6-3 15-2 19 5 3 6-2 14-9 15-7 1-16 4-22 3z" fill="${SK}" stroke="${O}" stroke-width="2.5" stroke-linejoin="round"/><path d="M24 26c3-2 7-2 10 1" ${st(O, 2.5)}/>`,
  kid: `${face(24, 26, 14, SK, `<path d="M10 24c0-10 6-15 14-15s14 5 14 15c-4-6-9-8-14-8s-10 2-14 8z" fill="${BR}"/>`)}<path d="M36 7l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z" fill="${Y}"/>`,
  family: `${face(13, 22, 9, SK, `<path d="M4 21c0-7 4-10 9-10s9 3 9 10c-3-4-6-5-9-5s-6 1-9 5z" fill="${BR}"/>`)}${face(35, 22, 9, SK, `<path d="M26 22c0-8 4-11 9-11s9 3 9 11v6c-1-6-2-9-9-11-5 1-8 4-9 5z" fill="${BR}"/>`)}${face(24, 36, 7.5, SK, `<path d="M16.5 35c0-6 3-8 7.5-8s7.5 2 7.5 8c-2-3-5-4-7.5-4s-5.5 1-7.5 4z" fill="${O}"/>`)}`,
  dadkid: `${face(17, 22, 11, SK, `<path d="M6 21c0-8 5-12 11-12s11 4 11 12c-3-5-7-6-11-6s-8 1-11 6z" fill="${BR}"/>`)}${face(35, 31, 8, SK, `<path d="M27 30c0-6 3-9 8-9s8 3 8 9c-2-3-5-4-8-4s-6 1-8 4z" fill="${O}"/>`)}${heartPath(36, 12, .45, P)}`,
  lion: `${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => `<circle cx="24" cy="7" r="6" fill="${O}" transform="rotate(${a} 24 24)"/>`).join('')}<circle cx="24" cy="24" r="13" fill="${Y}"/><circle cx="19" cy="22" r="1.8" fill="${BR}"/><circle cx="29" cy="22" r="1.8" fill="${BR}"/><path d="M21 27h6l-3 3z" fill="${BR}"/><path d="M24 30q-2 3-5 2M24 30q2 3 5 2" ${st(BR, 1.8)}/>`,
  compass: `<circle cx="24" cy="24" r="19" fill="${C}" stroke="${G}" stroke-width="4"/><path d="M24 10l5 14-5 14-5-14z" fill="${LB}"/><path d="M24 10l5 14h-10z" fill="${P}"/><circle cx="24" cy="24" r="3" fill="${BR}"/>`,
  laugh: `<circle cx="24" cy="24" r="19" fill="${Y}"/><path d="M14 19l5 3-5 3M34 19l-5 3 5 3" ${st(BR, 2.8)}/><path d="M13 29h22c0 7-5 11-11 11s-11-4-11-11z" fill="${BR}"/><path d="M17 35c4 3 10 3 14 0" fill="${P}"/><circle cx="10" cy="28" r="3" fill="#FF9D7A" opacity=".7"/><circle cx="38" cy="28" r="3" fill="#FF9D7A" opacity=".7"/>`,
  smile: `<circle cx="24" cy="24" r="19" fill="${Y}"/><circle cx="17" cy="21" r="2.6" fill="${BR}"/><circle cx="31" cy="21" r="2.6" fill="${BR}"/><path d="M15 29q9 9 18 0" ${st(BR, 3)}/><circle cx="11" cy="28" r="3" fill="#FF9D7A" opacity=".7"/><circle cx="37" cy="28" r="3" fill="#FF9D7A" opacity=".7"/>`,
  sword: `<path d="M38 4l6 6-22 22-6-6z" fill="${LB}" stroke="${B}" stroke-width="2" stroke-linejoin="round"/><path d="M12 22l14 14" ${st(O, 5)}/><path d="M17 31l-9 9" ${st(BR, 5)}/><circle cx="7" cy="41" r="3.5" fill="${Y}"/>`,
  baseball: `<circle cx="24" cy="24" r="18" fill="${W}" stroke="${GR}" stroke-width="2"/><path d="M12 11c6 7 6 19 0 26M36 11c-6 7-6 19 0 26" ${st(R, 2.5)}/><path d="M12 17l3-1M13 23h3M12 29l3 1M36 17l-3-1M35 23h-3M36 29l-3 1" ${st(R, 2)}/>`,
  mic: `<rect x="17" y="4" width="14" height="24" rx="7" fill="${P}"/><path d="M21 10h6M21 15h6" ${st(W, 2)}/><path d="M11 22a13 13 0 0 0 26 0M24 35v8M17 43h14" ${st(B, 3.2)}/>`,
  shoe: `<path d="M5 30c0-6 3-15 8-15 3 0 4 4 8 5l10 3c7 2 12 5 12 9v4H5z" fill="${B}"/><path d="M5 36h38v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" fill="${W}" stroke="${B}" stroke-width="2"/><path d="M19 21l-2 4M24 22l-2 4M29 24l-2 4" ${st(W, 2.4)}/><path d="M3 14h7M1 20h6" ${st(O, 2.6)}/>`,
  brain: `<path d="M24 9c-3-4-11-3-12 3-6 0-8 7-4 11-3 4 0 10 5 10 1 5 8 7 11 3 3 4 10 2 11-3 5 0 8-6 5-10 4-4 2-11-4-11-1-6-9-7-12-3z" fill="#F7A9BA"/><path d="M24 9v27M16 17c3 0 5 2 5 5M32 17c-3 0-5 2-5 5M15 28c3-1 6 0 7 3M33 28c-3-1-6 0-7 3" ${st(P, 2.4)}/>`,
  ballot: `<rect x="6" y="22" width="36" height="21" rx="4" fill="${B}"/><rect x="14" y="20" width="20" height="4" rx="2" fill="#1d4f80"/><path d="M16 22V7h16v15" fill="${W}" stroke="${GR}" stroke-width="2"/><path d="M20 13l3 3 6-6" ${st(G, 3)}/>${heartPath(24, 33, .45, Y)}`,
  star: `<path d="M24 4l6 13 14 1.5-10.5 9.5 3 14L24 35l-12.5 7 3-14L4 18.5 18 17z" fill="${Y}" stroke="${O}" stroke-width="2.5" stroke-linejoin="round"/>`,
  sparkle: `<path d="M20 4c2 10 4 12 14 14-10 2-12 4-14 14-2-10-4-12-14-14 10-2 12-4 14-14z" fill="${Y}"/><path d="M37 28c1 5 2 6 7 7-5 1-6 2-7 7-1-5-2-6-7-7 5-1 6-2 7-7z" fill="${O}"/>`,
  warn: `<path d="M24 5l20 35H4z" fill="${Y}" stroke="${O}" stroke-width="3" stroke-linejoin="round"/><path d="M24 17v11" ${st(BR, 4)}/><circle cx="24" cy="34" r="2.4" fill="${BR}"/>`,
  play: `<circle cx="24" cy="24" r="20" fill="${O}"/><path d="M19 14v20l16-10z" fill="${W}"/>`,
  prev: `<path d="M31 10L15 24l16 14" ${st('currentColor', 5)}/>`,
  next: `<path d="M17 10l16 14-16 14" ${st('currentColor', 5)}/>`,
  pause: `<rect x="13" y="11" width="8" height="26" rx="3" fill="currentColor"/><rect x="27" y="11" width="8" height="26" rx="3" fill="currentColor"/>`,
  tri: `<path d="M15 9v30l25-15z" fill="currentColor"/>`,
};

// emoji → 圖示名稱
const EMOJI = {
  '☀️': 'sun', '❤️': 'heart', '🌳': 'tree', '⛰️': 'mountain', '⚽': 'soccer', '🏠': 'house', '🚀': 'rocket', '🎁': 'gift', '🤖': 'robot',
  '✈️': 'plane', '🎟️': 'ticket', '☎️': 'phone', '👵': 'grandma', '💉': 'syringe', '🚸': 'crossing', '🔋': 'battery', '🧸': 'teddy',
  '🛵': 'scooter', '⏰': 'clock', '🛡️': 'shield', '🤝': 'handshake', '💭': 'thought', '💬': 'speech', '🗣️': 'megaphone', '🤔': 'question',
  '⚖️': 'scales', '🔍': 'search', '🔎': 'search', '👀': 'eyes', '📚': 'books', '📖': 'book', '📗': 'greenbook', '📰': 'newspaper', '🗞️': 'newspaper',
  '🌐': 'globe', '🐾': 'paw', '🏝️': 'island', '🎬': 'clapper', '📺': 'tv', '📱': 'mobile', '🎒': 'backpack', '💪': 'muscle', '🧒': 'kid',
  '👨‍👩‍👧': 'family', '👨‍👧': 'dadkid', '🦁': 'lion', '🧭': 'compass', '😆': 'laugh', '😄': 'smile', '🗡️': 'sword', '⚾': 'baseball', '🎤': 'mic',
  '🏃': 'shoe', '🧠': 'brain', '🗳️': 'ballot', '⭐': 'star', '✨': 'sparkle', '⚠️': 'warn', '▶️': 'play',
};

const svg = (name, label) => `<svg class="ic" viewBox="0 0 48 48" ${label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"'} focusable="false">${I[name]}</svg>`;
// 把 HTML 文字中的 emoji 換成插畫圖示（只換文字節點，不動屬性）
function replaceEmoji(html) {
  const keys = Object.keys(EMOJI).sort((a, b) => b.length - a.length).map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(keys.join('|'), 'g');
  return html.replace(/(<[^>]*>)|([^<]+)/g, (m, tag, text) => tag ? tag : text.replace(re, (e) => svg(EMOJI[e])));
}
module.exports = { I, EMOJI, svg, replaceEmoji };
