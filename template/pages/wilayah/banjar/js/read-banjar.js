$("#form-banjar").submit(async (e) => {
  e.preventDefault();
  startLoading();
  await readBanjar();
});
const active_status_badges = [
  "<label class='badge badge-primary-red'>Nonaktif</label>",
  "<label class='badge badge-success'>Aktif</label>",
];

$(document).ready(async () => {
  $("#tambah-desa-adat").attr("disabled", "disabled");
  $("#tambah-desa-adat1").attr("disabled", "disabled");
  const kecamatans = await readKecamatan();
  const desaAdats = await readDesaAdat();
  await readBanjar();

  kecamatans.map((obj) => {
    const option = `<option value="${obj.id}">${obj.name}</option>`;
    $("#tambah-kecamatan").append(option);
    const option1 = `<option value="${obj.id}">${obj.name}</option>`;
    $("#tambah-kecamatan1").append(option1);
    $("#edit-kecamatan").append(option);
  });

  $("#tambah-kecamatan").change((e) => {
    if (e.target.value) {
      $("#tambah-desa-adat").removeAttr("disabled");
      $("#tambah-desa-adat").html("");
      desaAdats
        .filter((obj) => obj.kecamatan.id === Number(e.target.value))
        .map((obj) => {
          const option = `<option value="${obj.id}">${obj.name}</option>`;
          $("#tambah-desa-adat").append(option);
        });
    } else {
      $("#tambah-desa-adat").attr("disabled", "disabled");
    }
  });
  $("#tambah-kecamatan1").change((e) => {
    if (e.target.value) {
      $("#tambah-desa-adat1").removeAttr("disabled");
      $("#tambah-desa-adat1").html("");
      desaAdats
        .filter((obj) => obj.kecamatan.id === Number(e.target.value))
        .map((obj) => {
          const option = `<option value="${obj.id}">${obj.name}</option>`;
          $("#tambah-desa-adat1").append(option);
        });
    } else {
      $("#tambah-desa-adat1").attr("disabled", "disabled");
    }
  });

  $("#edit-kecamatan").change((e) => {
    if (e.target.value) {
      $("#edit-desa-adat").removeAttr("disabled");
      $("#edit-desa-adat").html("");
      desaAdats
        .filter((obj) => obj.kecamatan.id === Number(e.target.value))
        .map((obj) => {
          const option = `<option value="${obj.id}">${obj.name}</option>`;
          $("#edit-desa-adat").append(option);
        });
    } else {
      $("#edit-desa-adat").attr("disabled", "disabled");
    }
  });
});

const readKecamatan = async () => {
  const req = await fetch(
    "https://api.sipandu-beradat.id/kecamatan/?active_status=true"
  );
  const { status_code, data } = await req.json();

  if (status_code === 200) {
    return data;
  } else {
    readKecamatan();
  }
};

const readDesaAdat = async () => {
  const req = await fetch(
    "https://api.sipandu-beradat.id/desa-adat/?active_status=true"
  );
  const { status_code, data } = await req.json();

  if (status_code === 200) {
    return data;
  } else {
    readDesaAdat();
  }
};

const readBanjar = async () => {
  startLoading();
  const namaKecamatan = $("#tambah-kecamatan1 option:selected").text();
  // console.log(namaKabupaten)
  const namaDesaAdat = $("#tambah-desa-adat1 option:selected").text();
  // console.log(namaKecamatan)
  const statusAktif = $("#status_aktif").val();
  if (statusAktif == 1) {
    link = "https://api.sipandu-beradat.id/banjar/?active_status=true";
  } else if (statusAktif == 0) {
    link = "https://api.sipandu-beradat.id/banjar/?active_status=false";
  } else if (statusAktif == 2) {
    link = "https://api.sipandu-beradat.id/banjar/";
  }
  const req = await fetch(link);
  const { status_code, data, message } = await req.json();
  // console.log(data)
  if (namaKecamatan === "Pilih Kecamatan") {
    var data1 = data;
  } else if (namaDesaAdat != "Pilih Desa Adat") {
    var data1 = data.filter(function filterss(data) {
      return data.desa_adat.name == namaDesaAdat;
    });
  } else {
    var data1 = data.filter(function filterss(data) {
      return data.desa_adat.kecamatan.name == namaKecamatan;
    });
  }

  if (status_code === 200) {
    $(".table-datatable").DataTable({
      destroy: true,
      fixedHeader: {
        header: true,
        footer: true,
      },
      columnDefs: [{ orderable: false, targets: [5] }],
      data: data1.map((obj, i) => [
        i + 1,
        obj.desa_adat.kecamatan.name,
        obj.desa_adat.name,
        obj.name,
        active_status_badges[Number(obj.active_status)],
        `<div class="container-crud">
        <a href="#" class="btn btn-inverse-primary btn-rounded btn-icon btn-action mr-2 btn-edit" title="Edit" data-toggle="modal"
        data-target="#modal-edit-banjar" data-id="${obj.id}" data-id-kecamatan="${obj.desa_adat.kecamatan.id}" data-id-desa-adat="${obj.desa_adat.id}" data-name="${obj.name}"
               data-status="${obj.active_status}">
               <i class="mdi mdi-pencil"></i>
        </a>
        <a href="#" class="btn btn-inverse-primary-red
         btn-rounded btn-icon btn-action mr-2 btn-delete" title="Delete" data-toggle="modal"
        data-target="#modal-hapus-banjar" data-id="${obj.id}">
        <i class="mdi mdi-delete"></i>
        </a>
    </div>`,
      ]),
    });

    $("tbody").on("click", ".btn-edit", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      const id_kecamatan = $(e.currentTarget).attr("data-id-kecamatan");
      const id_desa_adat = $(e.currentTarget).attr("data-id-desa-adat");
      const name = $(e.currentTarget).attr("data-name");
      const status = $(e.currentTarget).attr("data-status");

      $("#edit-id").val(id);
      $("#edit-kecamatan").val(id_kecamatan).change();
      $("#edit-desa-adat").val(id_desa_adat);
      $("#edit-banjar").val(name);
      $("#edit-active-status").val(status);
    });
    stopLoading();
    $("tbody").on("click", ".btn-delete", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      $("#hapus-id").val(id);
    });
  }
};
