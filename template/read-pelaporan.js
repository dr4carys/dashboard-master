const masyarakat_badges = [
  "<label class='badge badge-dark'>Krama</label>",
  "<label class='badge badge-info'>Tamu</label>",
];
const emergency_status_badges = [
  "<label class='badge badge-info'>Keluhan</label>",
  "<label class='badge badge-primary-red'>Darurat</label>",
];
const status_texts = [
  "Tidak Valid",
  "Menunggu Validasi",
  "Sedang Diproses",
  "Selesai",
];
const status_badges = [
  "<label class='badge badge-primary-red'>Tidak Valid</label>",
  "<label class='badge badge-primary-orange'>Menunggu Validasi</label>",
  "<label class='badge badge-info'>Sedang Diproses</label>",
  "<label class='badge badge-success'>Selesai</label>",
];

$(document).ready(async () => {
  await readAllPelaporan();
});

const readPelaporanDarurat = async () => {
  const req = await fetch("https://api.sipandu-beradat.id/pelaporan-darurat/");
  const { status_code, data } = await req.json();

  if (status_code === 200) {
    return data;
  } else {
    readPelaporanDarurat();
  }
};

const readPelaporan = async () => {
  const req = await fetch("https://api.sipandu-beradat.id/pelaporan/");
  const { status_code, data } = await req.json();

  if (status_code === 200) {
    return data;
  } else {
    readPelaporan();
  }
};

const readPelaporanTamu = async () => {
  const req = await fetch("https://api.sipandu-beradat.id/pelaporan-tamu/");
  const { status_code, data } = await req.json();

  if (status_code === 200) {
    return data;
  } else {
    readPelaporanTamu();
  }
};

const readPelaporanDaruratTamu = async () => {
  const req = await fetch(
    "https://api.sipandu-beradat.id/pelaporan-darurat-tamu/"
  );
  const { status_code, data } = await req.json();

  if (status_code === 200) {
    return data;
  } else {
    readPelaporanDaruratTamu();
  }
};

const readAllPelaporan = async () => {
  const darurats = await readPelaporanDarurat();
  const keluhans = await readPelaporan();
  const keluhanTamus = await readPelaporanTamu();
  const daruratTamus = await readPelaporanDaruratTamu();
  const data = [...darurats, ...keluhans, ...keluhanTamus, ...daruratTamus];

  $(".table-datatable").DataTable({
    fixedHeader: {
      header: true,
      footer: true,
    },
    columnDefs: [{ orderable: false, targets: [8] }],
    data: data.map((obj, i) => [
      i + 1,
      obj.masyarakat ? obj.masyarakat.name : obj.tamu.name,
      masyarakat_badges[obj.masyarakat ? 0 : 1],
      obj.jenis_pelaporan.name,
      emergency_status_badges[Number(obj.jenis_pelaporan.emergency_status)],
      obj.desa_adat.name,
      status_badges[obj.status + 1],
      obj.time,
      `<div class="container-crud">
      <a href="detail-pelaporan.html?title=${obj.title}&name=${
        obj.masyarakat ? obj.masyarakat.name : obj.tamu.name
      }&gender=${
        obj.masyarakat
          ? obj.masyarakat.gender === "l"
            ? "Laki-laki"
            : "Perempuan"
          : obj.tamu.gender === "l"
          ? "Laki-laki"
          : "Perempuan"
      }&phone=${
        obj.masyarakat ? obj.masyarakat.phone : obj.tamu.phone
      }&avatar=${
        obj.masyarakat ? obj.masyarakat.avatar : obj.tamu.avatar
      }&status=${obj.status}&jenis-pelaporan=${
        obj.jenis_pelaporan.name
      }&category=${obj.masyarakat ? "Krama" : "Tamu"}&description=${
        obj.description
      }&photo=${obj.photo}&desa-adat=${obj.desa_adat.name}&kecamatan=${
        obj.desa_adat.kecamatan.name
      }&kabupaten=${obj.desa_adat.kecamatan.kabupaten.name}&time=${
        obj.time
      }&emergency-status=${obj.jenis_pelaporan.emergency_status}&latitude=${
        obj.latitude
      }&longitude=${
        obj.longitude
      }" class="btn btn-inverse-success btn-rounded btn-icon btn-action mr-2 btn-detail" title="Detail" >
<i class="mdi mdi-dots-horizontal"></i>
      </a>
  </div>`,
    ]),
  });
};
