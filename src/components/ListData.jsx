/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/list.css";
import * as XLSX from 'xlsx';

function ListAllData() {

  const convertTableToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(document.getElementById("table-id"));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  return (
    <div className="pt-2 min-height-content">
      <div className="container">
      <button onClick={convertTableToExcel}>Export to Excel</button>
        <div className="p-5 mt-5 rounded card section-padding custom-card">
          <div className="row">
            <div className="table-responsive text-center">
              <table id="table-id" className="table colors">
                <thead>
                  <tr>
                    <th colSpan={9} style={{ verticalAlign: "middle" }}>
                      SASARAN KINERJA PEGAWAI
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={9} style={{ verticalAlign: "middle" }}>
                      PENDEKATAN HASIL KERJA KUANTITATIF
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={9} style={{ verticalAlign: "middle" }}>
                      BAGI PEJABAT ADMINISTRASI DAN PEJABAT FUNGSIONAL
                    </th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr style={{ borderBottom: "1px solid black"}}>
                    <th style={{ flex: 1, textAlign: "left" }} colSpan={4}>RUTAN KELAS IIB SABANG</th>
                    <th style={{ textAlign: "right" }} colSpan={2}>PERIODE PENILAIAN:</th>
                    <th style={{ flex: 1, textAlign: "left" }}>1 Januari s.d. 31 Desember 2022</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr className="table-bordered">
                    <th style={{ verticalAlign: "middle" }} className="table-bordered">No</th>
                    <th style={{ verticalAlign: "middle" }} className="table-bordered"></th>
                    <th colSpan={2} style={{ verticalAlign: "middle" }}>
                      Pegawai yang dinilai
                    </th>
                    <th style={{ width: "25px", verticalAlign: "middle" }} className="table-bordered">No</th>
                    <th colSpan={4} className="table-bordered">Pejabat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-bordered">1</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>NAMA</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>ikramullah</td>
                    <td className="table-bordered">1</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>NAMA</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>Eddi, S.H.</td>
                  </tr>
                  <tr>
                    <td className="table-bordered">2</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>NIP</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>19980410 201901 1 001</td>
                    <td className="table-bordered">2</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>NIP</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>19721220 199403 1 001</td>
                  </tr>
                  <tr>
                    <td className="table-bordered">3</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>PANGKAT/GOL. RUANG</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>Pengatur Muda, II/a</td>
                    <td className="table-bordered">3</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>PANGKAT/GOL. RUANG</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>Penata Tk.I, III/d</td>
                  </tr>
                  <tr>
                    <td className="table-bordered">4</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>JABATAN</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>Satuan Pengamanan Tahanan/Narapidana</td>
                    <td className="table-bordered">4</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>JABATAN</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>Kepala Pengamanan Rutan </td>
                  </tr>
                  <tr>
                    <td className="table-bordered">5</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>UNIT KERJA</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>Rutan Kelas IIB Sabang</td>
                    <td className="table-bordered">5</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>UNIT KERJA</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>Rutan Kelas IIB Sabang</td>
                  </tr>
                  <tr>
                    <th className="table-bordered" colSpan={9} style={{ flex: 1, textAlign: "left" }}>HASIL KERJA</th>
                  </tr>
                  <tr>
                    <th className="table-bordered">NO.</th>
                    <th className="table-bordered">RENCANA HASIL KERJA ATASAN YANG DIINTERVENSI</th>
                    <th className="table-bordered" colSpan={3}>RENCANA HASIL KERJA</th>
                    <th className="table-bordered">ASPEK</th>
                    <th className="table-bordered" colSpan={2}>INDIKATOR KINERJA INDIVIDU</th>
                    <th className="table-bordered">TARGET</th>
                  </tr>
                  <tr>
                    <th className="table-bordered">(1)</th>
                    <th className="table-bordered">(2)</th>
                    <th className="table-bordered" colSpan={3}>(3)</th>
                    <th className="table-bordered">(4)</th>
                    <th className="table-bordered" colSpan={2}>(5)</th>
                    <th className="table-bordered">(6)</th>
                  </tr>
                  <tr>
                    <th className="table-bordered" colSpan={9} style={{ flex: 1, textAlign: "left" }}>A. UTAMA</th>
                  </tr>
                  </tbody>
                  <tbody>
                  <tr>
                    <td className="table-bordered" rowSpan={3}>1</td>
                    <td className="table-bordered" rowSpan={3} style={{ flex: 1, textAlign: "left" }}>Meningkatnya Kualitas penyelenggaraan pemasyarakatan dibidang keamanan dan ketertiban</td>
                    <td className="table-bordered" rowSpan={3} colSpan={3} style={{ flex: 1, textAlign: "left" }}>Terlaksananya Apel Narapidana dan Tahanan</td>
                    <td className="table-bordered">Kuantitas</td>
                    <td className="table-bordered" colSpan={2}>Jumlah pelaksanaan kegiatan dalam satu tahun</td>
                    <td className="table-bordered">276 kegiatan</td>
                  </tr>

                  <tr>
                    <td className="table-bordered">Kualitas</td>
                    <td className="table-bordered" colSpan={2}>Tingkat kesesuaian dengan pelaksanaan kegiatan</td>
                    <td className="table-bordered">100%</td>
                  </tr>

                  <tr>
                    <td className="table-bordered">Waktu</td>
                    <td className="table-bordered" colSpan={2}>Ketetapan Waktu Penyelesaian kegiatan</td>
                    <td className="table-bordered">1 hari</td>
                  </tr>
                  </tbody>

                  <tbody>
                  <tr>
                    <td className="table-bordered" rowSpan={3}>1</td>
                    <td className="table-bordered" rowSpan={3} style={{ flex: 1, textAlign: "left" }}>Meningkatnya Kualitas penyelenggaraan pemasyarakatan dibidang keamanan dan ketertiban</td>
                    <td className="table-bordered" rowSpan={3} colSpan={3} style={{ flex: 1, textAlign: "left" }}>Terlaksananya Apel Narapidana dan Tahanan</td>
                    <td className="table-bordered">Kuantitas</td>
                    <td className="table-bordered" colSpan={2}>Jumlah pelaksanaan kegiatan dalam satu tahun</td>
                    <td className="table-bordered">276 kegiatan</td>
                  </tr>

                  <tr>
                    <td className="table-bordered">Kualitas</td>
                    <td className="table-bordered" colSpan={2}>Tingkat kesesuaian dengan pelaksanaan kegiatan</td>
                    <td className="table-bordered">100%</td>
                  </tr>

                  <tr>
                    <td className="table-bordered">Waktu</td>
                    <td className="table-bordered" colSpan={2}>Ketetapan Waktu Penyelesaian kegiatan</td>
                    <td className="table-bordered">1 hari</td>
                  </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th className="table-bordered" colSpan={9} style={{ flex: 1, textAlign: "left" }}>B. TAMBAHAN</th>
                    </tr>
                    <tr>
                      <td className="table-bordered" rowSpan={4}>1</td>
                      <td className="table-bordered" rowSpan={4}>-</td>
                      <td className="table-bordered" rowSpan={4} colSpan={3}>-</td>
                      <td className="table-bordered">Kuantitas/ Kualitas/ Waktu/ Biaya</td>
                      <td className="table-bordered" colSpan={2}>-</td>
                      <td className="table-bordered">-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered">Kuantitas/ Kualitas/ Waktu/ Biaya</td>
                      <td className="table-bordered" colSpan={2}>-</td>
                      <td className="table-bordered">-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered">Kuantitas/ Kualitas/ Waktu/ Biaya</td>
                      <td className="table-bordered" colSpan={2}>-</td>
                      <td className="table-bordered">-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered">Kuantitas/ Kualitas/ Waktu/ Biaya</td>
                      <td className="table-bordered" colSpan={2}>-</td>
                      <td className="table-bordered">-</td>
                    </tr>
                    <tr>
                      <th className="table-bordered" colSpan={9} style={{ flex: 1, textAlign: "left" }}>PRILAKU KERJA</th>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>1</td>
                      <td className="table-bordered" colSpan={8}>Berorientasi Pelayanan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Memahami dan memenuhi kebutuhan masyarakat</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Ramah, cekatan, solutif, dan dapat diandalkan</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Melakukan perbaikan tiada henti</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>2</td>
                      <td className="table-bordered" colSpan={8}>Akuntabel</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Melaksanakan tugas dengan jujur, bertanggungjawab, cermat, disiplin dan berintegritas tinggi</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menggunakan kekayaan dan barang milik negara secara bertanggungjawab, efektif, dan efisien</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Tidak menyalahgunakan kewenangan jabatan</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>3</td>
                      <td className="table-bordered" colSpan={8}>Kompeten</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Membantu orang lain belajar</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>Kemampuan public speaking</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Melaksanakan tugas dengan kualitas terbaik</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>4</td>
                      <td className="table-bordered" colSpan={8}>Harmonis</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menghargai setiap orang apapun latar belakangnya</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Suka menolong orang lain</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Membangun lingkungan kerja yang kondusif</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>5</td>
                      <td className="table-bordered" colSpan={8}>Loyal</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Memegang teguh ideologi Pancasila, Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menjaga nama baik sesama ASN, Pimpinan, Instansi, dan Negara</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menjaga rahasia jabatan dan negara</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>6</td>
                      <td className="table-bordered" colSpan={8}>Adaptif</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Cepat menyesuaikan diri menghadapi perubahan</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Terus berinovasi dan mengembangkan kreativitas</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Bertindak proaktif</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>7</td>
                      <td className="table-bordered" colSpan={8}>Kolaboratif</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Memberi kesempatan kepada berbagai pihak untuk berkontribusi</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Terbuka dalam bekerja sama untuk menghasilkan nilai tambah</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}>-</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama</td>
                      <td className="table-bordered" colSpan={5} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan={3}>Banda Aceh, 3 Januari 2022</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td>Pegawai Yang Dinilai</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan={3}>Pejabat Penilai Kinerja</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan={3}></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan={3}></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan={3}></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td>Ikramullah</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan={3}>Eddi, S.H.</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td>19980410 201901 1 001</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan={3}>19721220 199403 1 001</td>
                    </tr>

                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListAllData;
