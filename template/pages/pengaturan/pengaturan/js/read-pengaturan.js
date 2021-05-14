$(document).ready(() => {
  readPengaturan();
});

const readPengaturan = async () => {
  const req = await fetch("https://api.sipandu-beradat.id/pengaturan/");
  const { status_code, data, message } = await req.json();

  if (status_code === 200) {
    $(".table-datatable").DataTable({
      fixedHeader: {
        header: true,
        footer: true,
      },
      data: [[1, data.max_invalid_report]],
    });
  }
};
