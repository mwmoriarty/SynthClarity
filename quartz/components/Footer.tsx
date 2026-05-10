import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          &copy; {year} <a href="https://github.com/mwmoriarty/SynthClarity">Synth Clarity</a>&nbsp;|&nbsp;Built with <a href="https://obsidian.md">Obsidian</a> &amp; <a href="https://quartz.jzhao.xyz/">Quartz 4</a>&nbsp;|&nbsp;Hosted on <a href="https://github.com">GitHub</a> &amp; <a href="https://www.hostinger.com?REFERRALCODE=RWJMWMORI1KL">Hostinger</a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
