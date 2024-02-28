/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/list.css";
import axios from "axios";
import * as XLSX from 'xlsx';

function ListDataStructural() {
  const [namaPegawai, setNamaPegawai] = useState("");
  const [nipPegawai, setNipPegawai] = useState("");
  const [pngktAndGolRuangPegawai, setPngktAndGolRuangPegawai] = useState("");
  const [jabatanPegawai, setJabatanPegawai] = useState("");
  const [unitKerjaPegawai, setUnitKerjaPegawai] = useState("");
  const [namaPejabat, setNamaPejabat] = useState("");
  const [nipPejabat, setNipPejabat] = useState("");
  const [pngktAndGolRuangPejabat, setPngktAndGolRuangPejabat] = useState("");
  const [jabatanPejabat, setJabatanPejabat] = useState("");
  const [unitKerjaPejabat, setUnitKerjaPejabat] = useState("");
  const [rhk, setRhk] = useState([]);
  const [indikatorKinerja, setIndikatorKinerja] = useState([]);
  const [target, setTarget] = useState([]);
  const [perspektif, setPerspektif] = useState([]);
  const [rhkStructureArray, setRhkStructureArray] = useState([]);

  const [berorientasiPelayanan, setBerorientasiPelayanan] = useState([]);
  const [akuntabel, setAkuntabel] = useState([]);
  const [kompeten, setKompeten] = useState([]);
  const [harmonis, setHarmonis] = useState([]);
  const [loyal, setLoyal] = useState([]);
  const [adaptif, setAdaptif] = useState([]);
  const [kolaboratif, setKolaboratif] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getIdentitasStructureById();
  }, []);

  const getIdentitasStructureById = async () => {
    try {
      const response = await axios.get(`https://api-imigrasi.sucofindo-arsip.my.id/identitas-structure/${id}`);
      const {
        namaPegawai,
        nipPegawai,
        pngktAndGolRuangPegawai,
        jabatanPegawai,
        unitKerjaPegawai,
        namaPejabat,
        nipPejabat,
        pngktAndGolRuangPejabat,
        jabatanPejabat,
        unitKerjaPejabat,
        rhk_structures,
        prilaku_kerja_structures,
      } = response.data;

      setNamaPegawai(namaPegawai);
      setNipPegawai(nipPegawai);
      setPngktAndGolRuangPegawai(pngktAndGolRuangPegawai);
      setJabatanPegawai(jabatanPegawai);
      setUnitKerjaPegawai(unitKerjaPegawai);
      setNamaPejabat(namaPejabat);
      setNipPejabat(nipPejabat);
      setPngktAndGolRuangPejabat(pngktAndGolRuangPejabat);
      setJabatanPejabat(jabatanPejabat);
      setUnitKerjaPejabat(unitKerjaPejabat);

      if (rhk_structures.length > 0) {
        const rhkData = [];
        const indikatorKinerjaData = [];
        const targetData = [];
        const perspektifData = [];

        rhk_structures.forEach((item) => {
          const rhkValue = item.rhk;
          rhkData.push(rhkValue);

          item.indikator_kinerjas.forEach((indikatorKinerja) => {
            indikatorKinerjaData.push(indikatorKinerja.indikatorKinerja);
            targetData.push(indikatorKinerja.target);
            perspektifData.push(indikatorKinerja.perspektif);
          });
        });
        setRhkStructureArray(rhk_structures)
        setRhk(rhkData);
        setIndikatorKinerja(indikatorKinerjaData);
        setTarget(targetData);
        setPerspektif(perspektifData);
      } 
      
      if (prilaku_kerja_structures.length > 0) {
        const berorientasiPelayananData = [];
        const akuntabelData = [];
        const kompetenData = [];
        const harmonisData = [];
        const loyalData = [];
        const adaptifData = [];
        const kolaboratifData = [];

        prilaku_kerja_structures.forEach((item) => {
          const berorientasiPelayananValue = item.berorientasiPelayanan;
          const akuntabelValue = item.akuntabel;
          const kompetenValue = item.kompeten;
          const harmonisValue = item.harmonis;
          const loyalValue = item.loyal;
          const adaptifValue = item.adaptif;
          const kolaboratifValue = item.kolaboratif;
          berorientasiPelayananData.push(berorientasiPelayananValue);
          akuntabelData.push(akuntabelValue);
          kompetenData.push(kompetenValue);
          harmonisData.push(harmonisValue);
          loyalData.push(loyalValue);
          adaptifData.push(adaptifValue);
          kolaboratifData.push(kolaboratifValue);

          setBerorientasiPelayanan(berorientasiPelayananData);
          setAkuntabel(akuntabelData);
          setKompeten(kompetenData);
          setHarmonis(harmonisData);
          setLoyal(loyalData);
          setAdaptif(adaptifData);
          setKolaboratif(kolaboratifData);

        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const convertTableToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(document.getElementById("table-id"));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "skp_struktural.xlsx");
  };

  return (
    <div className="pt-2 min-height-content">
      <div className="container">
      <Button className="me-2" variant="success" onClick={convertTableToExcel}>Export to Excel</Button>
        <a href="https://storage.googleapis.com/skp-imigrasi.appspot.com/template%20skp%20pegawai%20struktur.xlsx" rel="noopener noreferrer" className="btn btn-primary" download>Download Template Excel</a>
        <div className="p-5 mt-5 rounded card section-padding custom-card">
          <div className="row">
            <div className="table-responsive text-center">
              <table id="table-id" className="table colors">
                <thead>
                <tr>
                    <th colSpan={8} style={{ verticalAlign: "middle" }}>
                      SASARAN KINERJA PEGAWAI
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={8} style={{ verticalAlign: "middle" }}>
                      PENDEKATAN HASIL KERJA KUANTITATIF
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={8} style={{ verticalAlign: "middle" }}>
                      PEJABAT PIMPINAN TINGGI PRATAMA
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
                  </tr>
                  <tr style={{ borderBottom: "1px solid black"}}>
                    <th style={{ flex: 1, textAlign: "left" }} colSpan={3}>KEMENTERIAN HUKUM DAN HAM</th>
                    <th></th>
                    <th style={{ textAlign: "right" }} colSpan={2}>PERIODE PENILAIAN:</th>
                    <th style={{ flex: 1, textAlign: "left" }}>1 Januari s.d. 31 Desember 2022</th>
                    <th></th>
                  </tr>
                  <tr>
                    <th style={{ verticalAlign: "middle" }} className="table-bordered">No</th>
                    <th style={{ verticalAlign: "middle" }} className="table-bordered" colSpan={3}>PEGAWAI YANG DINILAI</th>
                    <th className="table-bordered">No</th>
                    <th colSpan={3} className="table-bordered">PEJABAT PENILAI KINERJA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-bordered">1</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>NAMA</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{namaPegawai}</td>
                    <td className="table-bordered">1</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>NAMA</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{namaPejabat}</td>
                  </tr>
                  <tr>
                    <td className="table-bordered">2</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>NIP</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{nipPegawai}</td>
                    <td className="table-bordered">2</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>NIP</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{nipPejabat}</td>
                  </tr>
                  <tr>
                    <td className="table-bordered">3</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>PANGKAT/GOL. RUANG</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{pngktAndGolRuangPegawai}</td>
                    <td className="table-bordered">3</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>PANGKAT/GOL. RUANG</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{pngktAndGolRuangPejabat}</td>
                  </tr>
                  <tr>
                    <td className="table-bordered">4</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>JABATAN</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{jabatanPegawai}</td>
                    <td className="table-bordered">4</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>JABATAN</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{jabatanPejabat}</td>
                  </tr>
                  <tr>
                    <td className="table-bordered">5</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>UNIT KERJA</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{unitKerjaPegawai}</td>
                    <td className="table-bordered">5</td>
                    <td className="table-bordered" style={{ flex: 1, textAlign: "left" }}>UNIT KERJA</td>
                    <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{unitKerjaPejabat}</td>
                  </tr>
                  <tr>
                    <th className="table-bordered" colSpan={8} style={{ flex: 1, textAlign: "left" }}>HASIL KERJA</th>
                  </tr>
                  <tr>
                    <th className="table-bordered">NO.</th>
                    <th className="table-bordered" colSpan={2}>RENCANA HASIL KERJA</th>
                    <th className="table-bordered" colSpan={2}>INDIKATOR KINERJA INDIVIDU</th>
                    <th className="table-bordered" colSpan={2}>TARGET</th>
                    <th className="table-bordered">PERSPEKTIF</th>
                  </tr>
                  <tr>
                    <th className="table-bordered">(1)</th>
                    <th className="table-bordered" colSpan={2}>(2)</th>
                    <th className="table-bordered" colSpan={2}>(3)</th>
                    <th className="table-bordered" colSpan={2}>(4)</th>
                    <th className="table-bordered">(5)</th>
                  </tr>
                  <tr>
                    <th className="table-bordered" colSpan={8} style={{ flex: 1, textAlign: "left" }}>A. UTAMA</th>
                  </tr>
                        <tr>
                          <td className="table-bordered" rowSpan={2}>1</td>
                          <td className="table-bordered" colSpan={2} rowSpan={2} style={{ flex: 1, textAlign: "left" }}>{rhk[0]}</td>
                          <td className="table-bordered" colSpan={2} rowSpan={2} style={{ flex: 1, textAlign: "left" }}>{indikatorKinerja[0]}</td>
                          <td className="table-bordered" colSpan={2} rowSpan={2}>{target[0]}</td>
                          <td className="table-bordered" rowSpan={2}>{perspektif[0]}</td>
                        </tr>

                        <tr></tr>

                        <tr>
                          <td className="table-bordered" rowSpan={2}></td>
                          <td className="table-bordered" colSpan={2} rowSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2} rowSpan={2} style={{ flex: 1, textAlign: "left" }}>{indikatorKinerja[1]}</td>
                          <td className="table-bordered" colSpan={2} rowSpan={2}>{target[1]}</td>
                          <td className="table-bordered" rowSpan={2}>{perspektif[1]}</td>
                        </tr>

                        <tr></tr>

                        <tr>
                          <td className="table-bordered"></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{indikatorKinerja[2]}</td>
                          <td className="table-bordered" colSpan={2}>{target[2]}</td>
                          <td className="table-bordered">{perspektif[2]}</td>
                        </tr>

                        <tr>
                          <td className="table-bordered"></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{rhk[1]}</td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{indikatorKinerja[3]}</td>
                          <td className="table-bordered" colSpan={2}>{target[3]}</td>
                          <td className="table-bordered">{perspektif[3]}</td>
                        </tr>

                        <tr>
                          <td className="table-bordered"></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{indikatorKinerja[4]}</td>
                          <td className="table-bordered" colSpan={2}>{target[4]}</td>
                          <td className="table-bordered">{perspektif[4]}</td>
                        </tr>

                        <tr>
                          <td className="table-bordered"></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{indikatorKinerja[5]}</td>
                          <td className="table-bordered" colSpan={2}>{target[5]}</td>
                          <td className="table-bordered">{perspektif[5]}</td>
                        </tr>

                        <tr>
                          <td className="table-bordered"></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}>{indikatorKinerja[6]}</td>
                          <td className="table-bordered" colSpan={2}>{target[6]}</td>
                          <td className="table-bordered">{perspektif[6]}</td>
                        </tr>

                        <tr>
                          <td className="table-bordered"></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2}></td>
                          <td className="table-bordered"></td>
                        </tr>

                        <tr>
                          <td className="table-bordered"></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2}></td>
                          <td className="table-bordered"></td>
                        </tr>

                        <tr>
                          <td className="table-bordered"></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2} style={{ flex: 1, textAlign: "left" }}></td>
                          <td className="table-bordered" colSpan={2}></td>
                          <td className="table-bordered"></td>
                        </tr>

                    <tr>
                      <th className="table-bordered" colSpan={8} style={{ flex: 1, textAlign: "left" }}>B. TAMBAHAN</th>
                    </tr>
                    <tr>
                      <td className="table-bordered">1.1</td>
                      <td className="table-bordered" colSpan={2}></td>
                      <td className="table-bordered" colSpan={2}></td>
                      <td className="table-bordered" colSpan={2}></td>
                      <td className="table-bordered"></td>
                    </tr>

                    <tr>
                      <th className="table-bordered" colSpan={8} style={{ flex: 1, textAlign: "left" }}>-</th>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>1</td>
                      <td className="table-bordered" colSpan={7}>Berorientasi Pelayanan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Memahami dan memenuhi kebutuhan masyarakat</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Ramah, cekatan, solutif, dan dapat diandalkan</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>{berorientasiPelayanan}</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Melakukan perbaikan tiada henti</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>2</td>
                      <td className="table-bordered" colSpan={7}>Akuntabel</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Melaksanakan tugas dengan jujur, bertanggungjawab, cermat, disiplin dan berintegritas tinggi</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menggunakan kekayaan dan barang milik negara secara bertanggungjawab, efektif, dan efisien</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>{akuntabel}</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Tidak menyalahgunakan kewenangan jabatan</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>3</td>
                      <td className="table-bordered" colSpan={7}>Kompeten</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Meningkatkan kompetensi diri untuk menjawab tantangan yang selalu berubah</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Membantu orang lain belajar</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>{kompeten}</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Melaksanakan tugas dengan kualitas terbaik</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>4</td>
                      <td className="table-bordered" colSpan={7}>Harmonis</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menghargai setiap orang apapun latar belakangnya</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Suka menolong orang lain</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>{harmonis}</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Membangun lingkungan kerja yang kondusif</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>5</td>
                      <td className="table-bordered" colSpan={7}>Loyal</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Memegang teguh ideologi Pancasila, Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, setia kepada Negara Kesatuan Republik Indonesia serta pemerintahan yang sah</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menjaga nama baik sesama ASN, Pimpinan, Instansi, dan Negara</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>{loyal}</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menjaga rahasia jabatan dan negara</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>6</td>
                      <td className="table-bordered" colSpan={7}>Adaptif</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Cepat menyesuaikan diri menghadapi perubahan</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Terus berinovasi dan mengembangkan kreativitas</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>{adaptif}</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Bertindak proaktif</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}></td>
                    </tr>

                    <tr>
                      <td className="table-bordered" rowSpan={4}>7</td>
                      <td className="table-bordered" colSpan={7}>Kolaboratif</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Memberi kesempatan kepada berbagai pihak untuk berkontribusi</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>Ekspektasi Khusus Pimpinan</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Terbuka dalam bekerja sama untuk menghasilkan nilai tambah</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}>{kolaboratif}</td>
                    </tr>
                    <tr>
                      <td className="table-bordered" colSpan={3} style={{ flex: 1, textAlign: "left" }}>- Menggerakkan pemanfaatan berbagai sumberdaya untuk tujuan bersama</td>
                      <td className="table-bordered" colSpan={4} style={{ flex: 1, textAlign: "left" }}></td>
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
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td colSpan={4}>Lhokseumawe, 3 Januari 2022</td>
                    </tr>

                    <tr>
                      <td colSpan={3}>Pegawai Yang Dinilai</td>
                      <td></td>
                      <td colSpan={4}>Pejabat Penilai Kinerja</td>
                    </tr>

                    <tr>
                      <td colSpan={3}></td>
                      <td></td>
                      <td colSpan={4}></td>
                    </tr>

                    <tr>
                      <td colSpan={3}></td>
                      <td></td>
                      <td colSpan={4}></td>
                    </tr>

                    <tr>
                      <td colSpan={3}></td>
                      <td></td>
                      <td colSpan={4}></td>
                    </tr>

                    <tr>
                      <td colSpan={3}>{namaPegawai}</td>
                      <td></td>
                      <td colSpan={4}>{namaPejabat}</td>
                    </tr>

                    <tr>
                      <td colSpan={3}>{nipPegawai}</td>
                      <td></td>
                      <td colSpan={4}>{nipPejabat}</td>
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

export default ListDataStructural;
