$("#btn-hapus-instansi").click(async () => {
  await removeInstansi();
});

const removeInstansi = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const idInstansiHapus = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", idInstansiHapus);

  const req = await fetch(
    "https://api.sipandu-beradat.id/instansi-petugas/delete/",
    {
      method: "POST",
      body: fd,
    }
  );

  const { status_code, data, message } = await req.json();
  swal1(status_code,"instansi.html",removeInstansi,refreshToken(),message);
};
