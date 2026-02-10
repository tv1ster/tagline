import { type CSSProperties, type FC } from "react";
import { taglineStore } from "../tagline.store.ts";
import { observer } from "mobx-react-lite";
import { Align, Radius, Size, Style, Styles } from "../types.ts";
import styles from './taglines.module.scss';

export const Taglines: FC = observer(() => {
  return (
    <div className={styles.taglines} style={inlineStylesFromStyles(taglineStore.styles)}>
      {taglineStore.items.map((tagline) => {
        return (
          <div key={tagline.id} className={styles.taglines__item}>
            {taglineStore.getItemLabel(tagline)}
          </div>);
      })}
    </div>
  )
})

function inlineStylesFromStyles(styles: Record<Styles, string>): CSSProperties {
  return {
    '--tagline-background-color': (s => ({
      [Style.LightGrey]: '#FFFFFF1A',
      [Style.DarkBlue]: '#157BDA33',
      [Style.LightBlue]: '#157BDAED',
      [Style.Transparent]: 'transparent',
    })[s])(styles[Styles.Style]),
    '--tagline-color': (s => ({
      [Style.LightGrey]: '#FFFFFF',
      [Style.DarkBlue]: '#56ADFF',
      [Style.LightBlue]: '#FFFFFF',
      [Style.Transparent]: '#FFFFFF',
    })[s])(styles[Styles.Style]),
    '--tagline-border-radius': (s => ({
      [Radius.Zero]: '0px',
      [Radius.Four]: '4px',
      [Radius.Eight]: '8px',
      [Radius.Twelve]: '12px',
      [Radius.Hundred]: '100%',
    })[s])(styles[Styles.Radius]),
    '--tagline-padding': (s => ({
      [Size.XL]: '16px 20px',
      [Size.L]: '14px 18px',
      [Size.M]: '12px 16px',
      [Size.S]: '10px 14px',
      [Size.XS]: '8px 12px',
    })[s])(styles[Styles.Size]),
    '--tagline-font-size': (s => ({
      [Size.XL]: '18px',
      [Size.L]: '16px',
      [Size.M]: '14px',
      [Size.S]: '12px',
      [Size.XS]: '10px',
    })[s])(styles[Styles.Size]),
    '--tagline-border': (s => ({
      [Style.Transparent]: '1px solid #FFFFFF40',
    })[s])(styles[Styles.Style]),
    '--tagline-justify-content': (s => ({
      [Align.Left]: 'start',
      [Align.Center]: 'center',
      [Align.Right]: 'end',
    })[s])(styles[Styles.Align]),
  } as CSSProperties;
}