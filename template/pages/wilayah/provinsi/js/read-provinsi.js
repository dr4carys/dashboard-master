$("#form-fasilitas").submit(async (e) => {
  e.preventDefault();
  $(".preloader").fadeIn(300);
  await readProvinsi();
});
const active_status_badges = [
  "<label class='badge badge-primary-red'>Nonaktif</label>",
  "<label class='badge badge-success'>Aktif</label>",
];

$(document).ready(() => {
  readProvinsi();
});

const readProvinsi = async () => {
  var link =""
  const statusAktif = $("#status_aktif").val()
  // console.log(namaKabupaten)
  if(statusAktif ==1){
    link= "https://api.sipandu-beradat.id/provinsi/?active_status=true"
  }else if(statusAktif == 0){
    link= "https://api.sipandu-beradat.id/provinsi/?active_status=false"
  }else if(statusAktif == 2){
    link= "https://api.sipandu-beradat.id/provinsi/"
  }
  
  const req = await fetch(link);
  const { status_code, data, message } = await req.json();


  if (status_code === 200) {
    $(".table-datatable").DataTable({
      destroy : true,
      fixedHeader: {
        header: true,
        footer: true,
      },
      columnDefs: [{ orderable: false, targets: [4] }],
      data: data.map((obj, i) => [
        i + 1,
        obj.negara.name,
        obj.name,
        active_status_badges[Number(obj.active_status)],
        `<div class="container-crud">
        <a href="#" class="btn btn-inverse-primary btn-rounded btn-icon btn-action mr-2 btn-edit" title="Edit" data-toggle="modal"
            data-target="#modal-edit-provinsi" data-id="${obj.id}" data-name="${obj.name}" data-status="${obj.active_status}">
            <i class="mdi mdi-pencil"></i>
        </a>
        <a href="#" class="btn btn-inverse-primary-red btn-rounded btn-icon btn-action mr-2 btn-delete" title="Delete" data-toggle="modal"
        data-target="#modal-hapus-provinsi" data-id="${obj.id}">
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
      $("#edit-provinsi").val(name);
      $("#edit-active-status").val(status);
    });
    $(".preloader").fadeOut(300);
    $(".preloader1").fadeOut(300);
    $("tbody").on("click", ".btn-delete", (e) => {
      const id = $(e.currentTarget).attr("data-id");
      $("#hapus-id").val(id);
    });
  }
};
