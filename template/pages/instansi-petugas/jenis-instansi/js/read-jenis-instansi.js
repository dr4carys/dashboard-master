$("#form-jenis-instansi").submit(async (e) => {
  e.preventDefault();
  startLoading();
  await readJenisInstansi();
});
const active_status_badges = [
  "<label class='badge badge-primary-red'>Nonaktif</label>",
  "<label class='badge badge-success'>Aktif</label>",
];

$(document).ready(() => {
  readJenisInstansi();
});

const readJenisInstansi = async () => {
  var link = "";
  startLoading();
  const statusAktif = $("#status_aktif").val();
  // console.log(namaKabupaten)
  if (statusAktif == 1) {
    link =
      "https://api.sipandu-beradat.id/jenis-instansi-petugas/?active_status=true";
  } else if (statusAktif == 0) {
    link =
      "https://api.sipandu-beradat.id/jenis-instansi-petugas/?active_status=false";
  } else if (statusAktif == 2) {
    link = "https://api.sipandu-beradat.id/jenis-instansi-petugas/";
  }

  const req = await fetch(link);
  const { status_code, data, message } = await req.json();
  console.log(data);

  if (status_code === 200) {
    $(".table-datatable").DataTable({
      fixedHeader: {
        header: true,
        footer: true,
      },
      columnDefs: [{ orderable: false, targets: [3] }],
      data: data.map((obj, i) => [
        i + 1,
        obj.name,
        active_status_badges[Number(obj.active_status)],
        `<div class="container-crud">
        <a href="#" class="btn btn-inverse-primary btn-rounded btn-icon btn-action mr-2 btn-edit" title="Edit" data-toggle="modal"
                data-target="#modal-edit-jenis-instansi" data-id="${obj.id}" data-name="${obj.name}" data-status="${obj.active_status}">
<i class="mdi mdi-pencil"></i>
            </a>
            <a href="#" class="btn btn-inverse-primary-red btn-rounded btn-icon btn-action mr-2 btn-delete" title="Delete" data-toggle="modal"
            data-target="#modal-hapus-jenis-instansi" data-id="${obj.id}">
            <i class="mdi mdi-delete"></i>
            </a>
        </div>`,
      ]),
    });

    $("tbody").on("click", ".btn-edit", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      const name = $(e.currentTarget).attr("data-name");
      const status = $(e.currentTarget).attr("data-status");

      $("#edit-id").val(id);
      $("#edit-jenis-instansi").val(name);
      $("#edit-active-status").val(status);
    });
    stopLoading();
    $("tbody").on("click", ".btn-delete", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      $("#hapus-id").val(id);
    });
  }
};
