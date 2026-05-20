export class UVLanguageSwitcher extends HTMLElement{
  constructor(){
    super();
    const s = this.attachShadow({mode:'open'});
    s.innerHTML = `<select><option>en</option><option>es</option></select>`;
  }
}
if (!customElements.get('uv-language-switcher')) {
  customElements.define('uv-language-switcher', UVLanguageSwitcher);
}
