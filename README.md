# @saul-atomrigs/design-system

A simple, lightweight design system for React applications.

## Installation

```
npm i @saul-atomrigs/design-system
```

## Usage

### `Box`

```jsx
import { Box } from '@saul-atomrigs/design-system';

function App() {
  return (
    <Box bg='#f5f5f5' padding='2rem' align='center'>
      This is a simple box with custom background and padding
    </Box>
  );
}
```

#### Props

| Prop        | Type                          | Default   | Description                       |
| ----------- | ----------------------------- | --------- | --------------------------------- |
| children    | ReactNode                     | required  | Content to display inside the box |
| bg          | string                        | "white"   | Background color                  |
| padding     | string                        | "1rem"    | Padding value (CSS value)         |
| align       | 'center' \| 'left' \| 'right' | "left"    | Text alignment                    |
| onClick     | () => void                    | undefined | Click handler function            |
| onMouseOver | () => void                    | undefined | Mouse over handler function       |
| onMouseOut  | () => void                    | undefined | Mouse out handler function        |
| style       | CSSProperties                 | {}        | Additional CSS styles             |

### `Button`

```jsx
import { Button } from '@saul-atomrigs/design-system';

function App() {
  return (
    <Button variant='primary' onClick={() => alert('Button clicked!')}>
      Click me
    </Button>
  );
}
```

#### Props

| Prop        | Type                            | Default   | Description                      |
| ----------- | ------------------------------- | --------- | -------------------------------- |
| children    | ReactNode                       | required  | Content to display inside button |
| variant     | 'primary' \| 'secondary'        | "primary" | Button style variant             |
| fullWidth   | boolean                         | false     | Whether button takes full width  |
| disabled    | boolean                         | false     | Disables the button when true    |
| type        | 'button' \| 'submit' \| 'reset' | "button"  | HTML button type attribute       |
| onClick     | () => void                      | undefined | Click handler function           |
| onMouseOver | () => void                      | undefined | Mouse over handler function      |
| onMouseOut  | () => void                      | undefined | Mouse out handler function       |

### `Checkbox`

```jsx
import { Checkbox } from '@saul-atomrigs/design-system';

function App() {
  return (
    <Checkbox
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
      id='terms'
      name='terms'
    />
  );
}
```

#### Props

The Checkbox component accepts all standard HTML input attributes including:

| Prop      | Type                                           | Default   | Description                     |
| --------- | ---------------------------------------------- | --------- | ------------------------------- |
| checked   | boolean                                        | undefined | Whether the checkbox is checked |
| onChange  | (event: ChangeEvent<HTMLInputElement>) => void | undefined | Change handler function         |
| disabled  | boolean                                        | false     | Disables the checkbox when true |
| id        | string                                         | undefined | HTML id attribute               |
| name      | string                                         | undefined | HTML name attribute             |
| required  | boolean                                        | false     | Makes the checkbox required     |
| className | string                                         | undefined | Additional CSS class names      |

### `CTAButton`

```jsx
import { CTAButton } from '@saul-atomrigs/design-system';

function App() {
  return (
    <CTAButton onClick={() => console.log('CTA clicked')}>Continue</CTAButton>
  );
}
```

#### Props

| Prop     | Type                            | Default   | Description                      |
| -------- | ------------------------------- | --------- | -------------------------------- |
| children | ReactNode                       | required  | Content to display inside button |
| onClick  | () => void                      | undefined | Click handler function           |
| disabled | boolean                         | false     | Disables the button when true    |
| type     | 'button' \| 'submit' \| 'reset' | "button"  | HTML button type attribute       |

### `DualCTAButton`

```jsx
import { DualCTAButton } from '@saul-atomrigs/design-system';
import { Button } from '@saul-atomrigs/design-system';

function App() {
  return (
    <DualCTAButton>
      <Button variant='secondary' onClick={() => console.log('Cancel')}>
        Cancel
      </Button>
      <Button onClick={() => console.log('Confirm')}>Confirm</Button>
    </DualCTAButton>
  );
}
```

#### Props

| Prop     | Type                   | Default  | Description                                                |
| -------- | ---------------------- | -------- | ---------------------------------------------------------- |
| children | [ReactNode, ReactNode] | required | Exactly two children elements to be displayed side by side |

### `Error`

```jsx
import { Error } from '@saul-atomrigs/design-system';

function App() {
  return <Error message='Failed to load data' />;
}
```

#### Props

| Prop     | Type      | Default                | Description                       |
| -------- | --------- | ---------------------- | --------------------------------- |
| message  | string    | "Something went wrong" | Error message to display          |
| children | ReactNode | undefined              | Alternative content for the error |

### IntersectionObserver

A wrapper component designed for implementing features like infinite scrolling or lazy loading. It wraps the browser's IntersectionObserver API, allowing you to trigger specific actions when an element enters the viewport.

````jsx
import { IntersectionObserver } from '@saul-atomrigs/design-system'

function App() {
  return (
    <IntersectionObserver
      onIntersect={loadMore}
      disabled={!hasMore || isLoading}
    >
      {isLoading && <div>...</div>}
    </IntersectionObserver>
  )
}

#### Props

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `children` | ReactNode | 필수 | 컴포넌트 내부에 렌더링될 React 노드 |
| `onIntersect` | () => void | 필수 | 관찰 대상이 뷰포트와 교차할 때 호출되는 콜백 함수 |
| `threshold` | number | 0.5 | 관찰 대상이 뷰포트와 얼마나 교차해야 콜백을 실행할지를 나타내는 값 (0.0 ~ 1.0) |
| `rootMargin` | string | '200px' | Root 경계의 여백을 정의하는 문자열 (CSS 마진 형식) |
| `observerHeight` | string | '10px' | 관찰 대상 요소의 높이 |
| `disabled` | boolean | false | 관찰자를 비활성화할지 여부 |

### `List`

```jsx
import { List } from '@saul-atomrigs/design-system';

function App() {
  return (
    <List direction='vertical'>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </List>
  );
}
````

#### Props

| Prop      | Type                       | Default  | Description                        |
| --------- | -------------------------- | -------- | ---------------------------------- |
| children  | ReactNode                  | required | Content to display inside the list |
| direction | 'horizontal' \| 'vertical' | required | Direction of the list layout       |

### `Loading`

A simple loading spinner with an optional message.

```jsx
import { Loading } from '@saul-atomrigs/design-system';

function App() {
  return (
    <div>
      <Loading message='Please wait...' />
    </div>
  );
}
```

#### Props

| Prop     | Type      | Default      | Description                     |
| -------- | --------- | ------------ | ------------------------------- |
| message  | string    | "Loading..." | Message to display with spinner |
| children | ReactNode | undefined    | Alternative content to display  |

### `Modal`

The Modal component can be used in two ways: as a standard component or using compound components pattern.

#### Standard Usage

```jsx
import { Modal } from '@saul-atomrigs/design-system';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Example Modal'
      >
        <p>This is the modal content</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
}
```

#### Compound Components Pattern

```jsx
import { Modal } from '@saul-atomrigs/design-system';

function App() {
  return (
    <Modal.Provider title='Example Modal'>
      <Modal.Trigger>
        <button>Open Modal</button>
      </Modal.Trigger>

      <Modal.Content>
        <p>This is the modal content</p>
        <Modal.CTAButton>Confirm</Modal.CTAButton>
      </Modal.Content>
    </Modal.Provider>
  );
}
```

#### Props

##### Modal Component

| Prop     | Type       | Default   | Description                             |
| -------- | ---------- | --------- | --------------------------------------- |
| isOpen   | boolean    | required  | Controls whether the modal is visible   |
| onClose  | () => void | required  | Function called when modal should close |
| title    | string     | undefined | Title displayed in the modal header     |
| children | ReactNode  | required  | Content to display inside the modal     |
| trigger  | ReactNode  | undefined | Optional element that opens the modal   |

##### Modal.Provider

| Prop        | Type      | Default   | Description                               |
| ----------- | --------- | --------- | ----------------------------------------- |
| children    | ReactNode | required  | The Modal components to be contextualized |
| defaultOpen | boolean   | false     | Whether modal starts open or closed       |
| title       | string    | undefined | Title displayed in the modal header       |

##### Modal.Trigger

| Prop     | Type      | Default  | Description                                 |
| -------- | --------- | -------- | ------------------------------------------- |
| children | ReactNode | required | Element that will trigger the modal to open |
| disabled | boolean   | false    | Whether the trigger is disabled             |

##### Modal.Content

| Prop     | Type      | Default  | Description                         |
| -------- | --------- | -------- | ----------------------------------- |
| children | ReactNode | required | Content to display inside the modal |

##### Modal.CTAButton

| Prop     | Type       | Default   | Description                       |
| -------- | ---------- | --------- | --------------------------------- |
| children | ReactNode  | required  | Button label                      |
| onClick  | () => void | undefined | Additional click handler function |
| disabled | boolean    | false     | Whether button is disabled        |

### `Tabs`

A compound component for creating tabbed interfaces.

```jsx
import { Tabs } from '@saul-atomrigs/design-system';

function App() {
  const tabConfig = [
    { label: 'Tab 1', content: <div>Content for tab 1</div> },
    { label: 'Tab 2', content: <div>Content for tab 2</div> },
    { label: 'Tab 3', content: <div>Content for tab 3</div> },
  ];

  return (
    <Tabs tabs={tabConfig}>
      <Tabs.Trigger />
      <Tabs.Content />
    </Tabs>
  );
}
```

#### Props

##### Tabs Component

| Prop     | Type                                          | Default  | Description                              |
| -------- | --------------------------------------------- | -------- | ---------------------------------------- |
| tabs     | { label: string; content: React.ReactNode }[] | required | Configuration for tabs                   |
| children | ReactNode                                     | required | Tabs.Trigger and Tabs.Content components |

##### Tabs.Trigger and Tabs.Content

These components don't require props as they consume the context provided by the parent Tabs component.

### `TextInput`

A customizable input component with support for various input types including money formatting.

```jsx
import { TextInput } from '@saul-atomrigs/design-system';

function App() {
  const [value, setValue] = useState('');

  return (
    <TextInput
      name='username'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Enter your username'
      type='text'
    />
  );
}
```

#### Props

| Prop        | Type                                                             | Default   | Description                                  |
| ----------- | ---------------------------------------------------------------- | --------- | -------------------------------------------- |
| id          | string                                                           | undefined | Input ID attribute (name is used if omitted) |
| name        | string                                                           | required  | Input name attribute                         |
| value       | string                                                           | required  | Input value                                  |
| onChange    | (e: ChangeEvent<HTMLInputElement>) => void                       | required  | Change handler function                      |
| label       | string                                                           | undefined | Input label                                  |
| placeholder | string                                                           | undefined | Input placeholder text                       |
| type        | 'text' \| 'email' \| 'password' \| 'number' \| 'date' \| 'money' | "text"    | Input type                                   |
| error       | string                                                           | undefined | Error message to display                     |
| required    | boolean                                                          | false     | Whether input is required                    |
| disabled    | boolean                                                          | false     | Whether input is disabled                    |
| style       | CSSProperties                                                    | {}        | Additional CSS styles                        |
| autoFocus   | boolean                                                          | true      | Whether input should be autofocused          |

### `Txt`

A flexible text component for styling text content with configurable font weight, size, and color.

```jsx
import { Txt } from '@saul-atomrigs/design-system';

function App() {
  return (
    <Txt weight='bold' size='lg' color='primary'>
      This is a styled text
    </Txt>
  );
}
```

#### Props

| Prop     | Type                          | Default  | Description                                 |
| -------- | ----------------------------- | -------- | ------------------------------------------- |
| children | ReactNode                     | required | Text content to display                     |
| weight   | keyof typeof fontWeight       | "normal" | Font weight (from design tokens)            |
| size     | keyof typeof size             | "base"   | Font size (from design tokens)              |
| color    | keyof typeof colors \| string | "black"  | Text color - named token or CSS color value |
| style    | CSSProperties                 | {}       | Additional CSS styles                       |
