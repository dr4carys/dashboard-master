$("#btn-hapus-fasilitas").click(async () => {
  await removeFasilitas();
});

const removeFasilitas = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const idFasilitas = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", idFasilitas);

  const req = await fetch("https://api.sipandu-beradat.id/fasilitas/delete/", {
    method: "POST",
    body: fd,
  });

  const { status_code, data, message } = await req.json();
  swal1(status_code,"fasilitas.html",removeFasilitas,refreshToken(),message);
};
