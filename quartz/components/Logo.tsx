import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/logo.scss"

const Logo: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`logo-container ${displayClass ?? ""}`}>
      <a href="/">
        <img 
          src="/static/logo.png" 
          alt="TTD Clarity Logo" 
          class="logo-image"
          width="320"
        />
      </a>
    </div>
  )
}

Logo.css = style

export default (() => Logo) satisfies QuartzComponentConstructor

