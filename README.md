# 2차과제 : 포켓몬 도감 만들기

이 프로젝트는 카카오테크캠퍼스 프론트엔드 코스 2차 과제 수행을 위한 프로젝트 입니다. react 기반으로 제작됐으며 상태관리는 Prop Drilling 방식을 사용했습니다.
context branch에서 Context Api 방식으로 리팩토링 했습니다.

## 필수기능

- Git 브랜치 전략을 사용해서 prop-drilling 브랜치에서 작업됐습니다.
- react-router-dom을 통해 Home->Dex로 이동가능합니다. useNavigate컴포넌트를 이용했습니다.
- 도감페이지는 Dashboard.jsx, PokemonCard.jsx, PokemonList.jsx로 구성돼있습니다.
- 포켓몬 선택은 6개가 최대이며, 같은 포켓몬을 두개이상 선택할 수 없습니다.
- 포켓몬 카드(선택된 포켓몬 포함)를 클릭하면 해당 포켓몬의 디테일 페이지를 볼 수 있습니다.
- 컴포넌트들은 styled-components를 통해 스타일링 됐습니다.
- mock.js의 데이터 객체 키를 원래 짰던 키의 이름에 맞추어서 변경했습니다.
- prop-drilling 상태관리 방식을 사용하던 코드들을 Context API를 통한 전역상태관리 방식으로 리팩토링했습니다.
- context를 통한 전역상태관리로 포켓몬 디테일 페이지를 들어갔다가 나와도 선택된 포켓몬 목록이 유지됩니다.

## 브랜치전략

- prop-drilling : props 기반 상태관리
- context : context api 기반 상태관리 (전역상태관리)
