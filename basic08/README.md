# 감정일기장

감정 일기장은 사용자가 매일의 감정을 기록하고 저장할 수 있는 웹 애플리케이션입니다. 이 프로젝트는 React를 사용하여 개발되었습니다.

### ✨ 주요 기능

    1.	일기 작성: 사용자가 매일의 감정을 기록하고 저장할 수 있습니다.
    2.	감정 선택: 다양한 감정 이미지를 선택해 시각적으로 표현할 수 있습니다.
    3.	일기 목록 조회: 작성한 일기를 목록으로 확인할 수 있습니다.
    4.	일기 수정 및 삭제: 기록된 일기를 수정하거나 삭제할 수 있습니다.
    5.	페이지 라우팅: Home, Write, Edit, Diary, Notfound 페이지를 제공하며 사용자의 흐름을 관리합니다.

### 📂 프로젝트 구조

```
basic08
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ NanumPenScript-Regular.ttf
│  ├─ calendar.svg
│  └─ thumbnail.png
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ emotion
│  │     ├─ emotion1.png
│  │     ├─ emotion2.png
│  │     ├─ emotion3.png
│  │     ├─ emotion4.png
│  │     └─ emotion5.png
│  ├─ components
│  │  ├─ Button
│  │  │  ├─ Button.css
│  │  │  └─ Button.jsx
│  │  ├─ DiaryEditor
│  │  │  ├─ DiaryEditor.jsx
│  │  │  ├─ Editor.css
│  │  │  └─ EmotionItem.jsx
│  │  ├─ DiaryList
│  │  │  ├─ DiaryList.css
│  │  │  ├─ DiaryList.jsx
│  │  │  └─ DiaryListItem.jsx
│  │  ├─ DiaryViewer
│  │  │  ├─ Viewer.css
│  │  │  └─ Viewer.jsx
│  │  └─ Header
│  │     ├─ Header.css
│  │     └─ Header.jsx
│  ├─ contexts
│  │  ├─ DiaryDispatchContext.js
│  │  └─ DiaryStateContext.js
│  ├─ hooks
│  │  ├─ useCookieReducer.jsx
│  │  ├─ useCurrentDiary.jsx
│  │  └─ usePageTitle.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Diary.jsx
│  │  ├─ Edit.jsx
│  │  ├─ Home.jsx
│  │  ├─ Notfound.jsx
│  │  └─ Write.jsx
│  └─ utils
│     ├─ dateFormatter.js
│     ├─ getEmotionImage.js
│     └─ mockData.js
└─ vite.config.js

```

### 🖼 프로젝트 미리보기

![project_diary_1_1](https://github.com/user-attachments/assets/184dec2c-c90e-4eb7-91b7-285088885408)
![project_diary_1_2](https://github.com/user-attachments/assets/fd22ff8a-4baf-4aeb-a051-0e07e6e29415)
![project_diary2](https://github.com/user-attachments/assets/6cc97182-887e-4d96-a04c-1a9f148dbc0e)
