$("#btn-hapus-jenis-pelaporan").click(async () => {
  await removeJenisPelaporan();
});

const removeJenisPelaporan = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const idJenisPelaporan = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", idJenisPelaporan);

  const req = await fetch(
    "https://api.sipandu-beradat.id/jenis-pelaporan/delete/",
    {
      method: "POST",
      body: fd,
    }
  );

  const { status_code, data, message } = await req.json();
  swal1(status_code,"jenis-pelaporan.html",removeJenisPelaporan,refreshToken(),message);

};
