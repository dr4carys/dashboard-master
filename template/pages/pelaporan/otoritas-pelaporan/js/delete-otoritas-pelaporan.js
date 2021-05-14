$("#btn-hapus-otoritas-pelaporan").click(async () => {
  await removeOtoritasPelaporan();
});

const removeOtoritasPelaporan = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const idOtoritasPelaporan = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", idOtoritasPelaporan);

  const req = await fetch(
    "https://api.sipandu-beradat.id/otoritas-pelaporan-instansi/delete/",
    {
      method: "POST",
      body: fd,
    }
  );

  const { status_code, data, message } = await req.json();
  swal1(status_code,"jenis-pelaporan.html",removeJenisPelaporan,refreshToken(),message);

};
