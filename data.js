/* 독후감 공모전 목록
 * 새 공모전은 아래 형식 그대로 한 묶음 { ... } 를 추가하면 됩니다.
 *
 *  name      공모전 이름
 *  org       주최
 *  scope     "전국" 또는 지역 이름 (그 지역 주민만 낼 수 있으면 지역 이름)
 *  targets   대상 — "초등", "청소년", "일반", "청년", "여성" 중에서
 *  start/end 접수 기간 (YYYY-MM-DD)
 *  book      "지정" = 정해진 책 중에서 / "자유" = 아무 책이나 / "주제" = 주제에 맞는 책
 *  books     지정도서 이름 (짧게)
 *  prize     상금 요약
 *  top       1등 상금 (만원, 정렬용, 모르면 0)
 *  url       원문 링크
 *  cycle     "매년" / "연 4회" 등
 *  note      덧붙일 말
 *  kind      종류 — 없으면 "독후감". "신춘문예" / "문학상" / "수필·에세이" / "칼럼·논술"
 *  genre     (글쓰기 공모전) 모집 분야. 이때 book 은 비워 둡니다
 *  start 가 없으면 마감일만 알고 있는 공모전이에요
 */
window.UPDATED = "2026-11-23";
window.CONTESTS = [
  {
    name: "광명시 올해의 책 독후감 공모전", org: "광명시도서관", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-10-14", end: "2026-11-22",
    book: "지정", books: "2026 광명시 올해의 책 3권 중 1권", prize: "부문별 최우수·우수·장려 각 1명, 시장상 + 광명사랑화폐/상품권", top: 0,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=6085", cycle: "매년",
    note: "이메일(gmgm22@korea.kr)·방문·우편 접수"
  },
  {
    name: "세종의 나라 국민 참여 독서감상문 대회", org: "세종대왕기념사업회", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-03-03", end: "2026-09-20",
    book: "지정", books: "『세종의 나라』 1·2권 (김진명)", prize: "총상금 2억 원, 약 600명. 일반부 대상 3,000만 원", top: 3000,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5565", cycle: "매년",
    note: "문화체육관광부·교육부 후원. 상금 규모가 가장 큰 편"
  },
  {
    name: "협성독서왕 독후감 공모전", org: "협성문화재단", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-07-01", end: "2026-07-31",
    book: "지정", books: "부문별 지정도서 5권 중 1권", prize: "총상금 약 1억 1천만 원. 대상 500만 원, 장려 100명 각 30만 원", top: 500,
    url: "https://www.hscf.co.kr/kor/sub6_01.php", cycle: "매년",
    note: "초등 4학년 이상(만 11세 이상). 이메일 접수. 학교 단위 시상도 있음"
  },
  {
    name: "청년재단 청년 독후감 공모전", org: "청년재단", scope: "전국",
    targets: ["청년", "청소년"], start: "2026-01-26", end: "2026-02-20",
    book: "지정", books: "회차마다 지정 (1회차: 『행복의 기원』)", prize: "회차당 총 1,000만 원. 대상 200만 원", top: 200,
    url: "https://www.twig24.com/news/2026/01/26/20260126500218", cycle: "연 4회",
    note: "청년부 1998~2007년생, 청소년부 2008~2010년생. 1년에 4번 열려서 다른 회차도 확인해 보세요"
  },
  {
    name: "대한어머니회 전국여성독후감대회", org: "대한어머니회중앙회", scope: "전국",
    targets: ["여성"], start: "2026-07-01", end: "2026-08-31",
    book: "자유", books: "자유 (2000년 이후 초판, 아동도서 제외)", prize: "장관상 50만 원 등, 약 10명", top: 50,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5650", cycle: "매년",
    note: "만 18세 이상 여성, 기성 작가 제외. AI 작성 금지"
  },
  {
    name: "전국 독후감 공모 및 독서콘서트", org: "한국예총 천안지회", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-05-11", end: "2026-06-14",
    book: "자유", books: "자유", prize: "총상금 300만 원, 대상 30만 원", top: 30,
    url: "https://contestkorea.com/sub/view.php?Txt_gbn=1&Txt_bcode=030110001&str_no=202605140039", cycle: "매년",
    note: ""
  },
  {
    name: "용인특례시 전국 독서감상문 대회", org: "용인특례시", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-08-10", end: "2026-09-20",
    book: "지정", books: "용인 올해의 책 10권 중 1권", prize: "총 22명, 대상 100만 원", top: 100,
    url: "https://lib.yongin.go.kr/intro/menu/10079/program/30080/bookReportCompetition.do", cycle: "매년",
    note: "군인·지식정보취약계층 부문도 있음. 33년째 열리는 대회"
  },
  {
    name: "정읍시 한 권의 책 전국 독후감 공모전", org: "정읍시립도서관", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-08-24", end: "2026-10-30",
    book: "지정", books: "부문별 1권", prize: "총 290만 원, 18명. 일반 최고 50만 원", top: 50,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5927", cycle: "매년",
    note: ""
  },
  {
    name: "창원의 책 독후감 전국 공모전", org: "창원시도서관사업소", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-04-01", end: "2026-09-13",
    book: "지정", books: "창원의 책 중 1권", prize: "총 약 450만 원, 40명. 최고 50만 원", top: 50,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5247", cycle: "매년",
    note: "유아~초3은 독후화(그림) 부문"
  },
  {
    name: "경남의 책 독후감 공모전", org: "경남대표도서관", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-09-10", end: "2026-10-22",
    book: "지정", books: "2026 경남의 책 3권", prize: "총 360만 원, 21명. 대상 40만 원 + 도지사상", top: 40,
    url: "https://www.kclassicnews.com/news/article.html?no=225967", cycle: "매년",
    note: ""
  },
  {
    name: "경주시 전국 독후감 공모전 「경주를 읽다」", org: "경주시립도서관", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-07-07", end: "2026-08-14",
    book: "주제", books: "경주·신라 관련 책이면 무엇이든", prize: "부문별 대상 100만 원", top: 100,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5721", cycle: "매년",
    note: "상금은 경주 지역화폐로 지급"
  },
  {
    name: "원북 원포항 올해의 책 독후감 공모전", org: "포항시립포은중앙도서관", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-06-15", end: "2026-08-17",
    book: "지정", books: "부문별 1권", prize: "총 약 300만 원, 32명. 대상 30만 원", top: 30,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5651", cycle: "매년",
    note: "독후화(그림) 부문도 있음"
  },
  {
    name: "음성의 책 독후감 공모전", org: "음성군", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-08-01", end: "2026-09-30",
    book: "지정", books: "부문별 1권", prize: "일반부 대상 50만 원", top: 50,
    url: "https://gcontest.co.kr/front/m/comp/view/36086", cycle: "매년",
    note: "음성행복페이로 지급, 시상식 참석"
  },
  {
    name: "영암군 올해의 책 전국 공모전", org: "영암군", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-09-14", end: "2026-10-16",
    book: "지정", books: "부문별 1~2권", prize: "총 24명, 부문별 대상 20만 원", top: 20,
    url: "https://www.gnnnews.kr/195687", cycle: "매년",
    note: "초1~3은 독후화. 12월 1일 시상식 참석 필수"
  },
  {
    name: "충청북도지 독후감 공모전", org: "충청북도", scope: "전국",
    targets: ["청소년", "일반"], start: "2026-07-06", end: "2026-10-16",
    book: "지정", books: "『충청북도지』 1~12권 중 한 분야", prize: "부문별 대상 50만 원", top: 50,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5756", cycle: "매년",
    note: "온라인(충북 아카이브)으로 책을 읽을 수 있음"
  },
  {
    name: "양산시 올해의 책 전국 어린이 독후감 공모전", org: "양산시립도서관", scope: "전국",
    targets: ["초등"], start: "2026-07-01", end: "2026-08-31",
    book: "지정", books: "양산시 올해의 책", prize: "총 300만 원, 18명. 최우수 30만 원", top: 30,
    url: "https://www.contestkorea.com/sub/view.php?Txt_gbn=1&Txt_bcode=030110001&str_no=202607280048", cycle: "매년",
    note: "초등 3~6학년. 영상 부문도 있음"
  },
  {
    name: "전국 어린이 독후감 대회", org: "한국어린이출판연합", scope: "전국",
    targets: ["초등"], start: "2026-05-01", end: "2026-08-31",
    book: "지정", books: "지정도서 40권 중 1권", prize: "책 최대 300권", top: 0,
    url: "https://chaekdam.kr/promotion/CYfM2ENWux1dKcH7tFYno", cycle: "매년",
    note: "800자 정도. 여러 편 응모 가능"
  },
  {
    name: "전국 고전읽기 백일장 대회", org: "국민독서문화진흥회", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-08-01", end: "2026-09-28",
    book: "지정", books: "고전 지정도서", prize: "대통령상", top: 0,
    url: "https://readingnet.or.kr/%EB%8F%85%EC%84%9C%EB%8C%80%ED%9A%8C", cycle: "매년",
    note: "원고지에 손글씨, 우편 접수. 시작일은 공지 기준 추정"
  },
  {
    name: "전국청소년 독서감상문 발표대회", org: "국민독서문화진흥회", scope: "전국",
    targets: ["초등", "청소년", "일반"], start: "2026-08-01", end: "2026-10-02",
    book: "지정", books: "지정도서", prize: "문화체육관광부장관상", top: 0,
    url: "https://readingnet.or.kr/%EB%8F%85%EC%84%9C%EB%8C%80%ED%9A%8C", cycle: "매년",
    note: "원고지에 손글씨, 우편 접수. 시작일은 공지 기준 추정"
  },
  {
    name: "가족사랑 독서감상문 대회", org: "국민독서문화진흥회", scope: "전국",
    targets: ["초등", "청소년"], start: "2026-08-01", end: "2026-10-23",
    book: "지정", books: "지정도서", prize: "", top: 0,
    url: "https://readingnet.or.kr/%EB%8F%85%EC%84%9C%EB%8C%80%ED%9A%8C", cycle: "매년",
    note: "유아·초등·중등. 시작일은 공지 기준 추정"
  },
  {
    name: "제주도서관 독서공모전", org: "제주도서관", scope: "제주",
    targets: ["초등", "청소년", "일반"], start: "2026-07-01", end: "2026-09-30",
    book: "지정", books: "부문별 12권 중 1권", prize: "총 54명, 대상 약 20만 원 상당", top: 20,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5723", cycle: "매년",
    note: "제주도민만"
  },
  {
    name: "남동구립도서관 독후감·독후화 공모전", org: "인천 남동구립도서관", scope: "인천",
    targets: ["초등", "청소년", "일반"], start: "2026-07-14", end: "2026-08-16",
    book: "지정", books: "부문별 3권 중 1권", prize: "구청장상", top: 0,
    url: "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=5781", cycle: "매년",
    note: "인천 시민만"
  },

  /* ---- 글쓰기 공모전 (kind: 신춘문예 / 문학상 / 수필·에세이 / 칼럼·논술) ---- */
  {"kind": "신춘문예", "name": "2027 불교신문 신춘문예", "org": "불교신문", "scope": "전국", "targets": ["일반"], "end": "2026-11-27", "genre": "시, 시조, 소설, 동화, 평론", "prize": "", "top": 0, "url": "https://www.typetak.com/ko/blog/sinchunmunye", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "농민신문 제31회 신춘문예", "org": "농민신문", "scope": "전국", "targets": ["일반"], "end": "2026-11-27", "genre": "시, 시조, 소설", "prize": "", "top": 0, "url": "https://www.typetak.com/ko/blog/sinchunmunye", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 동아신춘문예", "org": "동아일보", "scope": "전국", "targets": ["일반"], "end": "2026-11-27", "genre": "시, 시조, 소설, 동화, 희곡, 시나리오, 평론", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": "AI로 쓴 작품은 당선 취소"},
  {"kind": "신춘문예", "name": "2027 경남도민신문 신춘문예", "org": "경남도민신문", "scope": "전국", "targets": ["일반"], "end": "2026-11-30", "genre": "시, 디카시, 수필", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 현대경제신문 신춘문예", "org": "현대경제신문", "scope": "전국", "targets": ["일반"], "end": "2026-11-30", "genre": "시, 소설", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "제5회 중부광역신문 신춘문예", "org": "중부광역신문", "scope": "전국", "targets": ["일반"], "end": "2026-11-30", "genre": "시", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 영주신문 신춘문예", "org": "영주신문", "scope": "전국", "targets": ["청소년", "일반"], "end": "2026-11-30", "genre": "시 (학생 백일장 함께)", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 서울신문 신춘문예", "org": "서울신문", "scope": "전국", "targets": ["일반"], "end": "2026-12-01", "genre": "시, 시조, 소설, 동화, 희곡, 평론", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": "AI 사용 가능, 대신 사용 내역 제출"},
  {"kind": "신춘문예", "name": "2027 경남신문 신춘문예", "org": "경남신문", "scope": "전국", "targets": ["일반"], "end": "2026-12-01", "genre": "시, 시조, 소설, 수필, 동화", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 조선일보 신춘문예", "org": "조선일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-02", "genre": "시, 시조, 소설, 동화, 동시, 희곡, 평론", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": "AI 사용 가능, 대신 사용 내역 제출"},
  {"kind": "신춘문예", "name": "2027 한국일보 신춘문예", "org": "한국일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-02", "genre": "시, 소설, 동화, 동시, 희곡", "prize": "", "top": 0, "url": "https://ilovecontest.com/curation.php?p=2027shinchun", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 문화일보 신춘문예", "org": "문화일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-02", "genre": "시, 소설, 동화, 평론", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 세계일보 신춘문예", "org": "세계일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-02", "genre": "시, 소설, 평론", "prize": "", "top": 0, "url": "https://ilovecontest.com/curation.php?p=2027shinchun", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 경인일보 신춘문예", "org": "경인일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-02", "genre": "시(3편 이상), 단편소설(원고지 80~100매)", "prize": "", "top": 0, "url": "https://www.kyeongin.com/article/1775200", "cycle": "매년", "note": "순수 신인만. 당일 우편 도착분까지"},
  {"kind": "신춘문예", "name": "2027 경상일보 신춘문예", "org": "경상일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-02", "genre": "시, 시조, 소설, 동화, 동시, 희곡", "prize": "단편소설 500만 원, 시·시조·희곡 각 300만 원", "top": 500, "url": "https://linkareer.com/activity/356303", "cycle": "매년", "note": "당일 우편 도착분까지", "start": "2026-10-13"},
  {"kind": "신춘문예", "name": "2027 국제신문 신춘문예", "org": "국제신문", "scope": "전국", "targets": ["일반"], "end": "2026-12-03", "genre": "시, 시조, 소설, 동화", "prize": "단편소설 700만 원, 시·시조·동화 각 400만 원", "top": 700, "url": "https://www.wevity.com/index_university.php?c=find&s=_university&gbn=viewok&gp=4&ix=111860", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 부산일보 신춘문예", "org": "부산일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-03", "genre": "시, 시조, 소설, 동화, 동시, 희곡, 시나리오, 평론", "prize": "", "top": 0, "url": "https://ilovecontest.com/curation.php?p=2027shinchun", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 영남일보 신춘문예", "org": "영남일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-03", "genre": "시, 소설", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 경향신문 신춘문예", "org": "경향신문", "scope": "전국", "targets": ["일반"], "end": "2026-12-04", "genre": "시, 단편소설, 문학평론", "prize": "단편소설 500만 원, 시 300만 원", "top": 500, "url": "https://www.khan.co.kr/article/202611060600061", "cycle": "매년", "note": "온라인 접수만(오후 6시 마감). AI 사용 시 내역 명시"},
  {"kind": "신춘문예", "name": "2027 전북일보 신춘문예", "org": "전북일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-04", "genre": "시, 소설, 수필, 동화", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "제39회 무등일보 신춘문예", "org": "무등일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-07", "genre": "시, 소설, 동화", "prize": "", "top": 0, "url": "https://www.typetak.com/ko/blog/sinchunmunye", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 매일신춘문예", "org": "매일신문", "scope": "전국", "targets": ["일반"], "end": "2026-12-08", "genre": "시, 시조, 소설, 수필, 동화, 동시, 희곡, 시나리오", "prize": "", "top": 0, "url": "https://www.imaeil.com/page/view/2026102614510994469", "cycle": "매년", "note": "오후 6시 본사 도착분까지(우편 소인 아님)"},
  {"kind": "신춘문예", "name": "2027 광주일보 신춘문예", "org": "광주일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-10", "genre": "시, 소설, 동화", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 강원일보 신춘문예", "org": "강원일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-11", "genre": "시, 시조, 소설, 동화, 동시, 희곡", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 전북도민일보 신춘문예", "org": "전북도민일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-12", "genre": "시, 소설, 수필", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 광남일보 신춘문예", "org": "광남일보", "scope": "전국", "targets": ["일반"], "end": "2026-12-17", "genre": "시, 소설, 동화, 평론", "prize": "", "top": 0, "url": "https://ilovecontest.com/curation.php?p=2027shinchun", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 전라매일 신춘문예", "org": "전라매일", "scope": "전국", "targets": ["일반"], "end": "2026-12-17", "genre": "시, 소설, 수필", "prize": "", "top": 0, "url": "https://www.jejusotong.today/news/articleView.html?idxno=48670", "cycle": "매년", "note": ""},
  {"kind": "신춘문예", "name": "2027 상상인 신춘문예", "org": "상상인", "scope": "전국", "targets": ["일반"], "end": "2027-01-05", "genre": "시 5편, 수필 2편", "prize": "부문별 200만 원", "top": 200, "url": "https://linkareer.com/activity/314746", "cycle": "매년", "note": "미등단자. 이메일·콘테스트코리아 접수", "start": "2026-12-01"},
  {"kind": "신춘문예", "name": "2027 시산맥 신춘문예", "org": "시산맥", "scope": "전국", "targets": ["일반"], "end": "2027-01-20", "genre": "시", "prize": "", "top": 0, "url": "https://ilovecontest.com/bbs/board.php?bo_table=contest&wr_id=6116", "cycle": "매년", "note": ""},
  {"kind": "문학상", "name": "2027 웹진 엄브렐라 신인상", "org": "웹진 엄브렐라", "scope": "전국", "targets": ["일반"], "end": "2027-01-10", "genre": "문학", "prize": "", "top": 0, "url": "https://cafe.daum.net/_c21_/home?grpid=Vwwa", "cycle": "매년", "note": ""},
  {"kind": "문학상", "name": "제4회 현대문학x미래엔 청소년문학상", "org": "현대문학·미래엔", "scope": "전국", "targets": ["일반"], "end": "2027-01-31", "genre": "청소년소설", "prize": "", "top": 0, "url": "https://www.wevity.com/index.php?c=find&cidx=23&gub=1", "cycle": "매년", "note": ""},
  {"kind": "문학상", "name": "제17회 천강문학상", "org": "천강문학상", "scope": "전국", "targets": ["일반"], "end": "2027-01-31", "genre": "문학", "prize": "", "top": 0, "url": "https://cafe.daum.net/_c21_/home?grpid=Vwwa", "cycle": "매년", "note": ""},
  {"kind": "문학상", "name": "제3회 소원청소년문학상", "org": "소원", "scope": "전국", "targets": ["일반"], "end": "2027-01-31", "genre": "청소년문학", "prize": "", "top": 0, "url": "https://cafe.daum.net/_c21_/home?grpid=Vwwa", "cycle": "매년", "note": ""},
  {"kind": "문학상", "name": "제3회 소원어린이문학상", "org": "소원", "scope": "전국", "targets": ["일반"], "end": "2027-01-31", "genre": "어린이문학", "prize": "", "top": 0, "url": "https://cafe.daum.net/_c21_/home?grpid=Vwwa", "cycle": "매년", "note": ""},
  {"kind": "문학상", "name": "제1회 자갈치문학상", "org": "자갈치문학상", "scope": "전국", "targets": ["일반"], "end": "2027-05-31", "genre": "문학", "prize": "", "top": 0, "url": "https://cafe.daum.net/_c21_/home?grpid=Vwwa", "cycle": "매년", "note": ""},
  {"kind": "수필·에세이", "name": "좋은생각 생활문예대상", "org": "월간 좋은생각", "scope": "전국", "targets": ["일반"], "end": "2026-02-15", "genre": "생활 수필 (자유 주제)", "prize": "", "top": 0, "url": "https://thinkyou.co.kr/mobile/contest/60358/", "cycle": "매년", "note": "", "start": "2026-01-01"},
  {"kind": "수필·에세이", "name": "오뚜기 푸드에세이 공모전", "org": "오뚜기", "scope": "전국", "targets": ["일반"], "end": "2026-09-11", "genre": "음식 에세이", "prize": "총 88명, 1등 300만 원", "top": 300, "url": "https://www.superookie.com/activities/6a7448821a84e42b4175c8f2", "cycle": "매년", "note": "국민 누구나(등단 작가도 가능)", "start": "2026-08-08"},
  {"kind": "칼럼·논술", "name": "시장경제칼럼 공모전 (상반기)", "org": "자유기업원", "scope": "전국", "targets": ["청년", "일반"], "end": "2026-04-29", "genre": "칼럼 (원고지 10매, 약 2,000자)", "prize": "대상 30만 원 등", "top": 30, "url": "https://thinkyou.co.kr/mobile/contest/61784/", "cycle": "연 2회", "note": "1년에 2번(4월·11월) 열려요", "start": "2026-04-20"},
  {"kind": "칼럼·논술", "name": "시장경제칼럼 공모전 (하반기)", "org": "자유기업원", "scope": "전국", "targets": ["청년", "일반"], "end": "2026-11-18", "genre": "칼럼 (원고지 10매, 약 2,000자)", "prize": "대상 30만 원 등", "top": 30, "url": "https://linkareer.com/activity/354420", "cycle": "연 2회", "note": "1년에 2번(4월·11월) 열려요", "start": "2026-11-09"},
  {"kind": "칼럼·논술", "name": "전국 논증적 글쓰기 대회", "org": "국립국어원", "scope": "전국", "targets": ["청소년", "일반"], "end": "2026-07-31", "genre": "논증적 글 (1,200자 내외)", "prize": "", "top": 0, "url": "https://linkareer.com/activity/327572", "cycle": "매년", "note": "사회 쟁점에 대한 내 생각을 쓰는 대회"}
];
