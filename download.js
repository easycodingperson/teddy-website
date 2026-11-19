// A direct visit, refresh, or Back navigation should only show the instructions.
if (location.hash === "#start") {
  history.replaceState(history.state, "", location.href.split("#")[0]);
  const installer = document.getElementById("installer");
  document.getElementById("download-help").textContent =
    "브라우저의 다운로드 목록을 확인해 주세요. 파일이 보이지 않으면 아래 버튼으로 다시 받을 수 있어요.";
  installer.textContent = "TEDDY 다시 다운로드";

  // Keep the guide in this tab while the release server returns the attachment.
  const transfer = document.createElement("iframe");
  transfer.hidden = true;
  transfer.title = "TEDDY 설치 파일 다운로드";
  transfer.src = installer.href;
  document.body.append(transfer);
}
