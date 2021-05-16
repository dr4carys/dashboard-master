$("#form-mapsbaru11").submit(async (e) => {
  e.preventDefault();
  await readKecamatan();
});
const active_status_badges = [
  "<label class='badge badge-primary-red'>Nonaktif</label>",
  "<label class='badge badge-success'>Aktif</label>",
];

$(document).ready(async () => {
  const req = await fetch(
    "https://api.sipandu-beradat.id/kabupaten/?active_status=true"
  );
  const { status_code, data } = await req.json();

  if (status_code === 200) {
    data.map((obj) => {
      const option = `<option value="${obj.id}">${obj.name}</option>`;
      $("#tambah-kabupaten1").append(option);
      $("#tambah-kabupaten").append(option);
      $("#edit-kabupaten").append(option);
      $("#edit-kabupaten-baru").append(option);
    });
  }

  readKecamatan();
});

const readKecamatan = async () => {
  var link;
  startLoading();
  const namaKabupaten = $("#tambah-kabupaten1 option:selected").text();
  const statusAktif = $("#status_aktif").val();
  if (statusAktif == 1) {
    link = "https://api.sipandu-beradat.id/kecamatan/?active_status=true";
  } else if (statusAktif == 0) {
    link = "https://api.sipandu-beradat.id/kecamatan/?active_status=false";
  } else if (statusAktif == 2) {
    link = "https://api.sipandu-beradat.id/kecamatan/";
  }
  const req = await fetch(link);
  const { status_code, data, message } = await req.json();
  if (namaKabupaten === "Pilih Kabupaten") {
    var data1 = data;
  } else {
    var data1 = data.filter(function filterss(data) {
      return data.kabupaten.name == namaKabupaten;
    });
  }

  if (status_code === 200) {
    const datatab = $(".table-datatable").DataTable({
      destroy: true,
      fixedHeader: {
        header: true,
        footer: true,
      },
      columnDefs: [{ orderable: false, targets: [4] }],
      data: data1.map((obj, i) => [
        i + 1,
        obj.kabupaten.name,
        obj.name,
        active_status_badges[Number(obj.active_status)],
        `<div class="container-crud">
        <a href="#" class="btn btn-inverse-primary btn-rounded btn-icon btn-action mr-2 btn-edit" title="Edit" data-toggle="modal"
        data-target="#modal-edit-kecamatan" data-id="${obj.id}" data-kabupaten-id="${obj.kabupaten.id}" data-name="${obj.name}" data-status="${obj.active_status}">
          <i class="mdi mdi-pencil"></i>
        </a>
        <a href="#" class="btn btn-inverse-primary-red btn-rounded btn-icon btn-action mr-2 btn-delete" title="Delete" data-toggle="modal"
            data-target="#modal-hapus-kecamatan" data-id="${obj.id}">
            <i class="mdi mdi-delete"></i>
        </a>
    </div>`,
      ]),
    });
    $("tbody").on("click", ".btn-edit", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      const kabupaten_id = $(e.currentTarget).attr("data-kabupaten-id");
      const name = $(e.currentTarget).attr("data-name");
      const status = $(e.currentTarget).attr("data-status");

      $("#edit-id").val(id);
      $("#edit-kabupaten").val(kabupaten_id);
      $("#edit-kecamatan").val(name);
      $("#edit-active-status").val(status);
    });

    $("tbody").on("click", ".btn-delete", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      $("#hapus-id").val(id);
    });
    stopLoading();
  }
};
