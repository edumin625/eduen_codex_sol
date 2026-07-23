# Lesson 5 Sentence Learning Design System

## 1. Atmosphere & Identity

친숙하고 가벼운 모바일 학습 도구다. 원본의 듀오링고형 녹색 진행 상태, 눌리는 카드와 버튼, 한 화면에 하나의 문장이라는 집중 구조를 유지한다. 시그니처는 영어 음성을 듣고 한국어 조각을 손으로 조립하는 즉각적인 피드백 루프다.

## 2. Color

| Role | Token | Value | Usage |
|---|---|---:|---|
| Surface/base | `--surface-base` | `#f7f8fc` | 전체 배경 |
| Surface/card | `--surface-card` | `#ffffff` | 카드, 칩, 타일 |
| Surface/muted | `--surface-muted` | `#eef0f4` | 사용된 타일, 보조 버튼 |
| Text/primary | `--text-primary` | `#2b2f3a` | 제목, 본문 |
| Text/secondary | `--text-secondary` | `#6b7280` | 설명, 보조 정보 |
| Border/default | `--border-default` | `#7b8494` | 카드와 진행 트랙 |
| Border/tile | `--border-tile` | `#737c8d` | 단어 타일 |
| Accent/primary | `--accent-primary` | `#3f7d00` | 진행, 정답, 주요 버튼 |
| Accent/pressed | `--accent-pressed` | `#285400` | 눌림 깊이와 작은 글자의 명도 대비 |
| Accent/soft | `--accent-soft` | `#e9f7d3` | 성공 배경, 문장 수 |
| Audio/primary | `--audio-primary` | `#0077b3` | 일반 속도 듣기 |
| Audio/pressed | `--audio-pressed` | `#005b8a` | 듣기 버튼 눌림 |
| Status/error | `--status-error` | `#c61f2b` | 오답, 재시도 |
| Status/error-pressed | `--status-error-pressed` | `#861520` | 재시도 버튼 눌림 깊이 |
| Status/error-soft | `--status-error-soft` | `#fdeaea` | 오답 피드백 배경 |
| Status/gold | `--status-gold` | `#8a5a00` | 점수, 최고 기록 |
| Focus | `--focus-ring` | `#0b74c9` | 키보드 포커스 |

색은 위 토큰만 사용한다. 상태색은 의미 전달에만 사용하며 장식용으로 확장하지 않는다.

## 3. Typography

| Level | Size | Weight | Line height | Usage |
|---|---:|---:|---:|---|
| H1 | `--font-h1` · `1.625rem` | 800 | 1.25 | 홈 제목 |
| H2 | `--font-h2` · `1.4375rem` | 800 | 1.3 | 결과 제목 |
| Body/lg | `--font-body-lg` · `1.125rem` | 600 | 1.45 | 영어 문장 |
| Stat | `--font-stat` · `1.375rem` | 800 | 1.2 | 결과 통계 숫자 |
| Body | `--font-body` · `1rem` | 600–800 | 1.5 | 타일, 버튼 |
| Body/sm | `--font-body-sm` · `0.9375rem` | 400–700 | 1.5 | 홈 설명 |
| Label | `--font-label` · `0.875rem` | 700–800 | 1.45 | 점수 칩, 최고 기록 |
| Caption | `--font-caption` · `0.8125rem` | 700–800 | 1.45 | 프롬프트, 배지 |
| Fine | `--font-fine` · `0.75rem` | 500–800 | 1.45 | 통계 라벨, 팁 |

- Primary: `"Apple SD Gothic Neo", "Malgun Gothic", system-ui, -apple-system, sans-serif`
- Weight tokens: `--weight-semibold: 600`, `--weight-bold: 700`, `--weight-extrabold: 800`
- Leading tokens: `--leading-tight: 1.25`, `--leading-title: 1.3`, `--leading-copy: 1.45`, `--leading-body: 1.5`
- 본문은 12px 아래로 내려가지 않는다.
- 한국어 문구는 의미 단위 줄바꿈을 우선하며 한 글자 고아 줄을 만들지 않는다.

## 4. Spacing & Layout

기본 단위는 4px이다.

| Token | Value | Usage |
|---|---:|---|
| `--space-1` | 4px | 아이콘과 숫자 |
| `--space-2` | 8px | 타일 간격 |
| `--space-3` | 12px | 컴팩트 패딩 |
| `--space-4` | 16px | 기본 화면 패딩 |
| `--space-5` | 20px | 홈 좌우 여백 |
| `--space-6` | 24px | 주요 블록 간격 |
| `--space-7` | 28px | 결과 화면 패딩 |
| `--space-8` | 32px | 큰 구획 |

- 최대 콘텐츠 폭: 560px
- 문서 셸: `min-height: 100dvh`, 중앙 정렬
- 검증 폭: 375px, 768px, 1280px
- iOS safe-area inset을 상단과 하단에 반영한다.
- 주 콘텐츠에는 가로 스크롤이 생기지 않아야 한다.

| Radius token | Value | Usage |
|---|---:|---|
| `--radius-sm` | 12px | 타일, 구획 제목 |
| `--radius-md` | 16px | 듣기·행동 버튼, 피드백 |
| `--radius-lg` | 20px | 지문 카드, 쇼케이스 구획 |
| `--radius-pill` | 999px | 배지, 점수 칩, 진행 막대 |

## 5. Components

### Passage Card

- **Structure**: `<button>` 안에 아이콘, 제목/설명, 문장 수, 최고 점수
- **Variants**: Reading 1, Reading 2
- **States**: default, hover, active, focus-visible
- **Accessibility**: 네이티브 버튼, 전체 카드가 하나의 접근 가능한 이름을 가진다.
- **Motion**: active에서 `transform`만 사용
- **Layout**: cluster

### Audio Button

- **Structure**: 네이티브 버튼 + SVG 아이콘/속도 라벨
- **Variants**: normal, slow
- **States**: default, active, focus-visible, loading
- **Accessibility**: `aria-label`, 재생 실패 문구를 `aria-live`로 전달
- **Motion**: active에서 `transform`만 사용
- **Layout**: cluster

### Word Tile

- **Structure**: 네이티브 버튼
- **Variants**: bank, answer
- **States**: default, active, focus-visible, disabled
- **Accessibility**: 키보드 Enter/Space 지원, 사용된 원본 타일은 disabled
- **Motion**: active에서 `transform`만 사용
- **Layout**: wrapping cluster

### Primary Action

- **Structure**: 전체 폭 네이티브 버튼
- **Variants**: check, next, retry, secondary
- **States**: default, active, focus-visible, disabled
- **Accessibility**: 상태 변화 후 버튼 이름이 현재 행동을 설명한다.
- **Motion**: active에서 `transform`만 사용
- **Layout**: stack

### Feedback Panel

- **Structure**: 제목, 정답, 획득 점수
- **Variants**: success, error
- **States**: hidden, visible
- **Accessibility**: `role="status"`와 `aria-live="polite"`
- **Motion**: 없음
- **Layout**: stack

음성 오류는 패널과 별도의 짧은 `audio-status` 라이브 영역으로 전달해 학습 피드백과 섞이지 않게 한다.

### Progress

- **Structure**: 트랙과 진행 막대
- **States**: 0–100%
- **Accessibility**: `role="progressbar"`, 현재/최소/최대 값
- **Motion**: 너비 변경은 원본 동작 보존을 위한 허용된 설계 부채
- **Layout**: cluster

## 6. Motion & Interaction

| Type | Token | Duration | Easing | Usage |
|---|---|---:|---|---|
| Micro | `--motion-micro` | 100ms | ease-out | 버튼 눌림 |
| Standard | `--motion-standard` | 300ms | ease-in-out | 진행 막대 |
| Emphasis | `--motion-emphasis` | 350ms | ease-out | 점수 팝 |
| Loading | `--motion-loading` | 800ms | ease-in-out | 듣기 준비 중 1.0→`--loading-scale`(0.96) 배율 반복 |

- 점수 팝과 버튼 눌림은 결과 또는 조작 상태를 전달한다.
- 지속되는 듣기 준비 상태는 고대비 링과 `aria-busy`로도 전달되어 움직임을 꺼도 식별할 수 있다.
- `prefers-reduced-motion: reduce`에서는 모든 전환과 애니메이션을 제거한다.
- 오디오는 사용자의 Reading 선택 또는 다음 문장 버튼 클릭 안에서 재생을 시작한다.

## 7. Depth & Surface

전략은 `mixed`다.

- 카드와 타일: 2px 테두리
- 주요 버튼: 하단 4px 단색 깊이
- 오버레이와 장식용 그림자는 사용하지 않는다.
- 깊이는 상호작용 가능성과 눌림 상태를 전달하는 데만 사용한다.

## 8. Accessibility Constraints & Accepted Debt

### Constraints

- 목표: WCAG 2.2 AA
- 모든 조작 요소는 키보드와 터치로 접근 가능해야 한다.
- 포커스 링을 제거하지 않는다.
- 터치 대상은 최소 44×44px을 유지한다.
- 확대를 막는 viewport 옵션을 사용하지 않는다.
- 음성 실패는 조용히 무시하지 않고 화면 읽기 프로그램과 화면에 전달한다.
- 시스템 TTS, Siri, 설치된 음성에 의존하지 않는다.

### Accepted Debt

| Item | Location | Why accepted | Owner / Exit |
|---|---|---|---|
| 진행 막대의 `width` 전환 | 학습 상단 | 원본 상호작용과 시각 피드백 보존 | 향후 `transform: scaleX()`로 교체 |
| 정적 WAV 파일 용량 | `audio/` | 모바일 무설정 재생의 핵심 요구 | 추후 Opus 병행 제공 검토 |
