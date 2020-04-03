export interface MenuItem {
  url?: string;
  externalUrl?: boolean;
  text?: string;
  hidden?: () => boolean;
  handle?: () => any;
}