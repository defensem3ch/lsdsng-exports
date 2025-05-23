// lots of info on unpacking and sav structure taken from LSDJ wiki
// https://littlesounddj.fandom.com/wiki/.sav_structure
// https://littlesounddj.fandom.com/wiki/File_Management_Structure
export const BLOCKSIZE = 0x200;

export const DEFAULT_INSTRUMENT = [
    0xa8,
    0x0,
    0x0,
    0xff,
    0x0,
    0x0,
    0x3,
    0x0,
    0x0,
    0xd0,
    0x0,
    0x0,
    0x0,
    0xf3,
    0x0,
    0x0
];

export const DEFAULT_WAV = [
    0x8e,
    0xcd,
    0xcc,
    0xbb,
    0xaa,
    0xa9,
    0x99,
    0x88,
    0x87,
    0x76,
    0x66,
    0x55,
    0x54,
    0x43,
    0x32,
    0x31
];

export const NOTES = [
    "---",
    "C 3",
    "C#3",
    "D 3",
    "D#3",
    "E 3",
    "F 3",
    "F#3",
    "G 3",
    "G#3",
    "A 3",
    "A#3",
    "B 3",
    "C 4",
    "C#4",
    "D 4",
    "D#4",
    "E 4",
    "F 4",
    "F#4",
    "G 4",
    "G#4",
    "A 4",
    "A#4",
    "B 4",
    "C 5",
    "C#5",
    "D 5",
    "D#5",
    "E 5",
    "F 5",
    "F#5",
    "G 5",
    "G#5",
    "A 5",
    "A#5",
    "B 5",
    "C 6",
    "C#6",
    "D 6",
    "D#6",
    "E 6",
    "F 6",
    "F#6",
    "G 6",
    "G#6",
    "A 6",
    "A#6",
    "B 6",
    "C 7",
    "C#7",
    "D 7",
    "D#7",
    "E 7",
    "F 7",
    "F#7",
    "G 7",
    "G#7",
    "A 7",
    "A#7",
    "B 7",
    "C 8",
    "C#8",
    "D 8",
    "D#8",
    "E 8",
    "F 8",
    "F#8",
    "G 8",
    "G#8",
    "A 8",
    "A#8",
    "B 8",
    "C 9",
    "C#9",
    "D 9",
    "D#9",
    "E 9",
    "F 9",
    "F#9",
    "G 9",
    "G#9",
    "A 9",
    "A#9",
    "B 9",
    "C A",
    "C#A",
    "D A",
    "D#A",
    "E A",
    "F A",
    "F#A",
    "G A",
    "G#A",
    "A A",
    "A#A",
    "B A",
    "C B",
    "C#B",
    "D B",
    "D#B",
    "E B",
    "F B",
    "F#B",
    "G B",
    "G#B",
    "A B",
    "A#B",
    "B B"
];
export const TRANSPOSE = [
    "B 3",
    "C 3",
    "C#3",
    "D 3",
    "D#3",
    "E 3",
    "F 3",
    "F#3",
    "G 3",
    "G#3",
    "A 3",
    "A#3"
];
export const CHANS = ["pu1", "pu2", "wav", "noi"];
export const MIDIOFFSET = 35;

export const LSDSNG_HTML_STYLES = `
body {
  font-family: monospace;
}
.dt {
    display: table;
}
.dr {
    display: table-row;
}
.dr2 {
    display: table-row;
}
.dc, .divTableHead {
  border: 1px solid #999999;
	display: table-cell;
	padding: 1px 1px;
}
.dc1 {
	background-color: #CCC;
	border: 1px solid #999999;
	display: table-cell;
	padding: 1px 1px;
  width: 143px;
}
.dc2 {
	border: 1px solid #999999;
	display: table-cell;
	padding: 1px 1px;
}
.dc2:first-letter {
	background-color: #CCC;  
}
.dc3 {
  display: table-cell;
}
.dc4 {
	background-color: #EEE;
	border: 1px solid #999999;
	display: table-cell;
	padding: 1px 1px;  
}
.divTableBody {
	display: table-row-group;
}
`
