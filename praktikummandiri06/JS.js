const Nama = "Hanif Al Ghifari";
const tugas = 80;
const uts = 70;
const uas = 90;
const akhir = tugas * 0.3 + uts * 0.3 + uas * 0.4;
let kelulusan;
if (akhir >= 60) {
  kelulusan = "LULUS";
} else {
  akhir = "TIDAK LULUS";
}
console.log("Nama Mahasiswa: ", Nama);
console.log("Nilai Akhir:", akhir);
console.log("Satus:", kelulusan);
