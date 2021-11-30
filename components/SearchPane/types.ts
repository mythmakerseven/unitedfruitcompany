export interface PaneProps {
  tags: string[],
  defaultTagDisplay: boolean,
  filter: string,
  setFilter: (arg: string) => void
}