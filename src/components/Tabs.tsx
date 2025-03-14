import {
  useState,
  type PropsWithChildren,
  createContext,
  useContext,
} from 'react';

type TabsContextType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  tabs: { label: string; content: React.ReactNode }[];
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components must be used within Tabs');
  }
  return context;
};

const Trigger = () => {
  const { tabs, activeIndex, setActiveIndex } = useTabs();

  return (
    <div className='flex border-b'>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`px-4 py-2 ${
            activeIndex === index ? 'border-b-2 border-blue-500 font-bold' : ''
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const Content = () => {
  const { tabs, activeIndex } = useTabs();

  return <div className='p-4'>{tabs[activeIndex].content}</div>;
};

export const Tabs = ({
  tabs,
  children,
}: {
  tabs: { label: string; content: React.ReactNode }[];
} & PropsWithChildren) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsContext.Provider value={{ tabs, activeIndex, setActiveIndex }}>
      <div className='w-full'>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.Trigger = Trigger;
Tabs.Content = Content;
