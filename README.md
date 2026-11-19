# TEDDY 소개 사이트

`index.html`을 브라우저로 열면 로컬에서 페이지, 쪽지 예시, 소개 영상과 설치 파일 다운로드를 확인할 수 있습니다.

- 설치 파일은 저장소에 넣지 않고(100 MiB 상한) 이 저장소의 GitHub 릴리스(`v<버전>`)에 `TEDDY-Setup-<버전>.exe`로 올립니다.
- `media/banner.webp`는 상단 배너이며, `consult.webp`, `briefing.webp`, `meeting.webp`는 일정별 교사 장면입니다.
- `media/teddy-promo.mp4`는 홈페이지용 소개 영상입니다. 엔딩은 TEDDY 로고와 제품 소개 문구로 마무리합니다.

## 버전 변경

1. 프로그램에서 `npm run dist`로 `dist/TEDDY-Setup-<버전>.exe`를 만듭니다.
2. 이 저장소에 릴리스를 만들고 설치 파일을 올립니다: `gh release create v<버전> <설치 파일> --title "TEDDY <버전>"`
3. `download.html`의 설치 파일 주소·이름·크기와 `index.html`의 버전·크기 표시를 갱신합니다. 소개 페이지와 개인정보 처리방침의 다운로드 버튼은 `download.html#start`로 연결됩니다.
4. `version.json`의 `version`, `download`, `sha256`(설치 파일의 SHA-256), `size`(바이트)를 바꿉니다. 프로그램은 이 파일을 보고 새 버전을 알리고, 내려받은 파일의 SHA-256과 크기가 맞을 때만 설치합니다.
