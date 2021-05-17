const active_status_badges = [
  "<label class='badge badge-primary-red'>Nonaktif</label>",
  "<label class='badge badge-success'>Aktif</label>",
];

$(document).ready(() => {
  readFasilitas();

  $("#tambah-icon").change((e) => {
    if (e.currentTarget.files.length > 0) {
      $("#label-tambah-icon").text(e.currentTarget.files[0].name);
    } else {
      $("#label-tambah-icon").text("Select file");
    }
  });

  $("#edit-icon").change((e) => {
    if (e.currentTarget.files.length > 0) {
      $("#label-edit-icon").text(e.currentTarget.files[0].name);
    } else {
      $("#label-edit-icon").text("Select file");
    }
  });
  $("#form-fasilitas").submit(async (e) => {
    e.preventDefault();
    startLoading();
    await readFasilitas();
  });
  $("#status_aktif").change((e) => {
    readFasilitas();
  });
});

const readFasilitas = async () => {
  startLoading();
  const req = await fetch("https://api.sipandu-beradat.id/fasilitas/");
  const { status_code, data, message } = await req.json();
  if (status_code === 200) {
    setupFilterDataTable(
      "tabel-fasilitas",
      [2, 4],
      data.map((obj, i) => [
        i + 1,
        obj.name,
        `<img src="${obj.icon}"></img>`,
        active_status_badges[Number(obj.active_status)],
        `<div class="container-crud">
        <a href="#" class="btn btn-inverse-primary btn-rounded btn-icon btn-action mr-2 btn-edit" title="Edit" data-toggle="modal"
            data-target="#modal-edit-fasilitas" data-id="${obj.id}" data-name="${obj.name}" data-status="${obj.active_status}">
<i class="mdi mdi-pencil"></i>
        </a>
        <a href="#" class="btn btn-inverse-primary-red btn-rounded btn-icon btn-action mr-2 btn-delete" title="Delete" data-toggle="modal"
        data-target="#modal-hapus-fasilitas" data-id="${obj.id}">
        <i class="mdi mdi-delete"></i>
        </a>
    </div>`,
      ])
    );

    stopLoading();

    $("tbody").on("click", ".btn-edit", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      const name = $(e.currentTarget).attr("data-name");
      const status = $(e.currentTarget).attr("data-status");

      $("#edit-id").val(id);
      $("#edit-fasilitas").val(name);
      $("#edit-active-status").val(status);
    });

    $("tbody").on("click", ".btn-delete", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      $("#hapus-id").val(id);
    });
  }
};
