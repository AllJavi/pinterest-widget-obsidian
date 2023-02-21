import {
  Plugin,
  MarkdownRenderer,
  parseYaml,
  requestUrl
} from 'obsidian';

EventTarget.prototype._addEventListener = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function(a, b, c) {
  if (c==undefined) c=false;
  this._addEventListener(a,b,c);
  if (! this.eventListenerList) this.eventListenerList = {};
  if (! this.eventListenerList[a]) this.eventListenerList[a] = [];
  this.eventListenerList[a].push({listener:b,options:c});
};

EventTarget.prototype._getEventListeners = function(a) {
   if (! this.eventListenerList) this.eventListenerList = {};
   if (a==undefined)  { return this.eventListenerList; }
   return this.eventListenerList[a];
};

function removeListeners() {
  let listeners = document.body._getEventListeners();
  if (!listeners || !listeners.click)
    return;

  for (let clickListener of listeners.click)
    document.body.removeEventListener("click", clickListener.listener);
}

function renderError(error: any, el: HTMLElement) {
  const errorEl = el.createDiv({ cls: "pinterest-error" });
  errorEl.createEl("b", { text: "Couldn't render the widget:" });
  errorEl.createEl("pre").createEl("code", { text: error.toString?.() ?? error });
  errorEl.createEl("span").innerHTML = "You might also want to look for further Errors in the Console: Press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>I</kbd> to open it.";
}

export default class PinterestWidget extends Plugin {
  loading: Number;
  types: { [key:string]:string } = {
    'pin': 'embedPin',
    'board': 'embedBoard',
    'profile': 'embedUser'
  };

  async onload() {
    console.log("Pinterest Widgets: loading");
    this.loading = 0;
    this.registerMarkdownCodeBlockProcessor("pinterest", async (source, el, _) => {
      console.log(`Pinterest Widgets: Detected Pinterest Widget (${this.loading})`);
      try {
        const yaml = parseYaml(source);

        if (!yaml['type'] || !this.types[yaml['type'].toLowerCase()])
          throw Error("You must specify a valid widget type (pin | board | profile)");
        if (!yaml['url']) throw Error("You must specify an url");

        let container = el.createEl("div");
        container.className = "pinterest-container"
              if (yaml['hide-button']) container.className += " no-button"
        if (yaml['width']) container.style.width = yaml['width']

        let widget = container.createEl('a');
        widget.setAttribute('data-pin-do', this.types[yaml['type']]);
        if (yaml['height']) widget.setAttribute('data-pin-scale-height', yaml['height']);
        if (yaml['pinSize']) widget.setAttribute('data-pin-width', yaml['pinSize']);
        widget.href = yaml['url'];

        if (this.loading === 0) {
          this.loading = 1;
          let data = await requestUrl("https://assets.pinterest.com/js/pinit_main.js");
          let clearData = await data.text;

          console.log("Pinterest Widgets: Replacing Pinterest Widget")
          removeListeners();
          (0, eval)(clearData);
          this.loading = 0;
        }
      } catch (error) {
        renderError(error, el);
      }
    });
  }
}
