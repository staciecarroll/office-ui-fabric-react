import { ITheme, IStyle } from '../../Styling';

export interface IChicletXsmall {}

export interface IChicletXsmallStyles {
  /**
   * Style for the root element.
   */
  root?: IStyle;

  /**
   * Style for the icon that overlays the file preview image.
   */
  icon?: IStyle;

  /**
   * Style for url.
   */
  url?: IStyle;

  /**
   * Style for preview information about the file, such as title and link.
   */
  info?: IStyle;

  /**
   * Style for file preview image.
   */
  preview?: IStyle;

  /**
   * Style for the title of the file.
   */
  title?: IStyle;
}

export interface IChicletXsmallStyleProps {
  /**
   * Accept theme prop.
   */
  theme: ITheme;

  /**
   * Accept footer prop.
   */
  footerProvided?: boolean;

  /**
   * Accept custom classNames.
   */
  className?: string;
}
