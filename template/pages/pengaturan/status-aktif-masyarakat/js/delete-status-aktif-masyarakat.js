$("#btn-hapus-status-aktif-masyarakat").click(async () => {
  await removeStatusMasyarakat();
});

const removeStatusMasyarakat = async () => {
  const XAT = `Bearer ${localStorage.getItem("access_token")}`;
  const fd = new FormData();
  const id = $("#hapus-id").val();
  fd.append("XAT", XAT);
  fd.append("id", id);

  const req = await fetch(
    "https://api.sipandu-beradat.id/status-aktif-masyarakat/delete/",
    {
      method: "POST",
      body: fd,
    }
  );

  const { status_code, data, message } = await req.json();

  if (status_code === 200) {
    alert(message);
    readStatusMasyarakat();
  } else if (status_code === 400) {
    alert(message);
  } else if (status_code === 401) {
    refreshToken(removeStatusMasyarakat);
  }
};
