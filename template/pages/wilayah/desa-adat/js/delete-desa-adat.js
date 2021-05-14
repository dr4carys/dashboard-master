$("#btn-hapus-desa-adat").click(async () => {
  await removeDesaAdat();
});

const removeDesaAdat = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const idDesaAdatHapus = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", idDesaAdatHapus);

  const req = await fetch("https://api.sipandu-beradat.id/desa-adat/delete/", {
    method: "POST",
    body: fd,
  });

  const { status_code, data, message } = await req.json();
  swal1(status_code,"desa-adat.html",removeDesaAdat,refreshToken(),message);
 
};
