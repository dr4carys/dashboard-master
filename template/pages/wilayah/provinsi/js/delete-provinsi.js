$("#btn-hapus-provinsi").click(async () => {
  await removeProvinsi();
});

const removeProvinsi = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const idProvinsiHapus = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", idProvinsiHapus);

  const req = await fetch("https://api.sipandu-beradat.id/provinsi/delete/", {
    method: "POST",
    body: fd,
  });

  const { status_code, data, message } = await req.json();
  swal1(status_code, "provinsi.html", removeProvinsi, refreshToken(), message);
};
