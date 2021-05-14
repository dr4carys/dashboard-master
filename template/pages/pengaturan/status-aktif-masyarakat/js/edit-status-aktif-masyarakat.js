$("#form-edit-status-aktif-masyarakat").submit(async (e) => {
  e.preventDefault();
  await updateStatusMasyarakat();
});

const updateStatusMasyarakat = async () => {
  const id = $("#edit-id").val();
  const nama = $("#edit-nama-status").val();
  const status = $("#edit-status-masyarakat").val();
  const active_status = $("#edit-active-status").val();

  const fd = new FormData();
  fd.append("id", id);
  fd.append("name", nama);
  fd.append("status", JSON.parse(status));
  fd.append("active_status", JSON.parse(active_status));
  fd.append("XAT", `Bearer ${localStorage.getItem("access_token")}`);

  const req = await fetch(
    "https://api.sipandu-beradat.id/status-aktif-masyarakat/update/",
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
    refreshToken(updateStatusMasyarakat);
  }
};
