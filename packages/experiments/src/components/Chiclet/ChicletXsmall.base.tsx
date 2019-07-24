import * as React from 'react';
import { classNamesFunction } from '../../Utilities';
import { IChicletCardStyles, IChicletCardStyleProps } from './ChicletCard.types';
import { IChicletCardProps } from './ChicletCard.types';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { mergeStyles } from '../../Styling';

const getClassNames = classNamesFunction<IChicletCardStyleProps, IChicletCardStyles>();

const PREVIEW_IMAGE_WIDTH = '61px';
const PREVIEW_IMAGE_HEIGHT = '59px';

const innerStyling = mergeStyles({
  maxWidth: '100%'
});

export class ChicletXsmallBase extends React.Component<IChicletCardProps, {}> {
  private _classNames: { [key in keyof IChicletCardStyles]: string };

  public render(): JSX.Element {
    const { onClick, title, className, footer, theme, styles, url } = this.props;

    const footerProvided = !!footer;

    this._classNames = getClassNames(styles, { theme: theme!, className, footerProvided });

    // if this element is actionable it should have an aria role
    const role = onClick ? 'button' : 'link';
    const tabIndex = onClick ? 0 : undefined;

    return (
      <div tabIndex={tabIndex} role={role} onClick={onClick} className={this._classNames.root}>
        {this._renderPreview()}
        <div className={this._classNames.info}>
          <div className={this._classNames.title}>{title ? title : null}</div>
          <div className={this._classNames.url}>{url}</div>
        </div>
        {footer}
      </div>
    );
  }

  private _renderPreview(): JSX.Element {
    const { image, imageAlt, preview: Preview } = this.props;

    return (
      <div className={this._classNames.preview}>
        {Preview ? (
          <Preview className={innerStyling} />
        ) : (
          <Image
            width={PREVIEW_IMAGE_WIDTH}
            height={PREVIEW_IMAGE_HEIGHT}
            src={image}
            role="presentation"
            alt={imageAlt ? imageAlt : undefined}
          />
        )}
      </div>
    );
  }
}
