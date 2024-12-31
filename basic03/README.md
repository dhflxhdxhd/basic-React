# Counter App

📖 프로젝트 개요 <br>
간단한 Counter App을 구현하여 버튼을 클릭함으로써 숫자를 증가시키거나 감소시키는 기능을 제공합니다. React를 사용하여 상태 관리와 컴포넌트 기반 개발의 기본적인 개념을 학습하기 위한 프로젝트입니다.

<br>

## 🔧 주요 기능

1. **숫자 증가 및 감소**

- 버튼을 눌러 숫자를 증가시키거나 감소시킬 수 있습니다.
- 특정 버튼을 통해 숫자를 여러 단위(예: `+1`, `-10`)로 변경할 수 있습니다.

2. **상태 관리**

- React의 `useState`를 활용해 현재 숫자 상태를 관리합니다.

3. **컴포넌트 구조화**

- 숫자 표시 영역과 컨트롤 버튼 영역을 컴포넌트로 분리하여 재사용성을 높였습니다.

<br>

## 🛠️ 기술 스택

- **React**: 컴포넌트 기반 UI 개발.
- **CSS**: 간단한 스타일링 적용.

<br>

## 📂 프로젝트 구조

```
/src
├── components
│   ├── Viewer.js    # 숫자 표시 컴포넌트
│   ├── Controller.js        # 컨트롤 버튼 컴포넌트
│   └── Button.js            # 재사용 가능한 버튼
├── App.js                   # 메인 컴포넌트
├── index.js                 # React 렌더링 시작점
└── App.css                  # 스타일링
```

<br>

## 🚀 실행 방법

1. **프로젝트 클론**:

   ```bash
   git clone https://github.com/dhflxhdxhd/basic-react.git
   cd basic02
   ```

2. **패키지 설치**:

   ```bash
   npm install
   ```

3. **개발 서버 실행**:
   ```bash
   npm run dev
   ```

<br>

## 📋 코드 설명

### 1. **`Viewer` 컴포넌트**

숫자를 화면에 표시하는 역할을 합니다.

<!-- ```jsx
const Viewer = ({ count }) => {
  return <h1>Current Count: {count}</h1>;
}; -->

<!-- ```` -->

### 2. **`Controller` 컴포넌트**

여러 개의 버튼을 동적으로 생성하여 숫자를 증가/감소시키는 역할을 합니다.

```jsx
const Controller = ({ onClickButton }) => {
  const buttons = [
    { text: "-100", value: -100 },
    { text: "-10", value: -10 },
    { text: "-1", value: -1 },
    { text: "+1", value: 1 },
    { text: "+10", value: 10 },
    { text: "+100", value: 100 },
  ];

  return (
    <div className="controller">
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          onClickButton={() => onClickButton(button.value)}
        />
      ))}
    </div>
  );
};
```

### 3. **`Button` 컴포넌트**

재사용 가능한 버튼 컴포넌트입니다.

```jsx
const Button = ({ text, onClickButton }) => {
  return <button onClick={onClickButton}>{text}</button>;
};
```

<br>

## 🌟 학습 포인트

- React의 **상태 관리(`useState`)**를 활용한 상태 변화 감지.
- 컴포넌트 **재사용성**을 고려한 설계.
- React의 **Props**를 통해 부모-자식 간 데이터 전달.

<br>

## 🖼 프로젝트 미리보기

![counterApp](https://github.com/user-attachments/assets/fd05e4d3-be75-4f91-b3db-e1d963c49f5e)
