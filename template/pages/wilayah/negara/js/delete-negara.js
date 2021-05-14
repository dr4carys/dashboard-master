$("#btn-hapus-negara").click(async () => {
  await removeNegara();
});

const removeNegara = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const idNegaraHapus = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", idNegaraHapus);

  const req = await fetch("https://api.sipandu-beradat.id/negara/delete/", {
    method: "POST",
    body: fd,
  });

  const { status_code, data, message } = await req.json();
  swal1(status_code,"negara.html",removeNegara,refreshToken(),message);
 
};
