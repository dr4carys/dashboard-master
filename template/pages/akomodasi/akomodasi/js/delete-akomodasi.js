$("#btn-hapus-akomodasi").click(async () => {
  await removeAkomodasi();
});

const removeAkomodasi = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const idAkomodasiHapus = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", idAkomodasiHapus);

  const req = await fetch("https://api.sipandu-beradat.id/akomodasi/delete/", {
    method: "POST",
    body: fd,
  });

  const { status_code, data, message } = await req.json();

  swal1(status_code,"akomodasi.html",removeAkomodasi,refreshToken(),message);
};
