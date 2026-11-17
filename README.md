# TEDDY 소개 사이트

TEDDY(경기도 교직원을 위한 업무 일정 비서)의 소개 페이지와 개인정보 처리방침입니다. 정적 HTML이라 어떤 웹 호스팅에도 그대로 올릴 수 있습니다.

- `index.html`: 소개 페이지
- `privacy.html`: 개인정보 처리방침 (구글 OAuth 검토용 주소로 씀)
- `site.css`: 화면 속 TEDDY 창 그림과 페이지 고유 스타일
- `assets/`: 레이아웃, 버튼, 움직임 등 공통 디자인 시스템
- `fonts/SUIT-Variable.woff2`: TEDDY 프로그램과 같은 글꼴 (SIL Open Font License)

바꿔야 할 것: Microsoft Store 앱 주소(지금은 검색 주소), 문의 이메일(지금은 `.example` 임시 주소), 도메인이 정해지면 canonical 주소.

## version.json (업데이트 확인)

TEDDY 프로그램의 [설정 → 업데이트 확인]이 이 파일을 읽습니다(`https://easycodingperson.github.io/teddy-website/version.json`).
새 버전을 내놓을 때마다 `version`을 그 버전으로 바꾸고, `download`에 받는 곳(스토어 앱 주소, https만)을 적습니다. `notes`에는 바뀐 점을 한두 줄로 적을 수 있습니다.
Microsoft Store로 설치한 TEDDY는 `download` 대신 스토어의 업데이트 화면을 엽니다.
