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
 */
window.UPDATED = "2026-11-16";
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
  }
];
