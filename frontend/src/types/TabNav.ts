export interface Tab {
  label: string,
  path: string,
};

export interface TabNavigationProps {
  tabs: Tab[],
};

export interface HamburgerNavigationProps extends TabNavigationProps{
  title: string,
}