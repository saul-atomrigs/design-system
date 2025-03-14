import React, {
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
    <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0' }}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          style={{
            padding: '0.5rem 1rem',
            ...(activeIndex === index
              ? {
                  borderBottom: '2px solid #3b82f6',
                  fontWeight: 'bold',
                }
              : {}),
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const Content = () => {
  const { tabs, activeIndex } = useTabs();

  return <div style={{ padding: '1rem' }}>{tabs[activeIndex].content}</div>;
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
      <div style={{ width: '100%' }}>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.Trigger = Trigger;
Tabs.Content = Content;
