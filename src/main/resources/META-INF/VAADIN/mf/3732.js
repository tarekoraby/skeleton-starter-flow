/*! For license information please see 3732.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[3732],{3732:(e,t,r)=>{"use strict";r.d(t,{e:()=>_});var n=r(2450),a=r(60),s=r(6426),i=r(1567),l=r(8995),o=r(8042);const d=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame(()=>{this._allCells.forEach(e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._findHostGrid()||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}constructor(){super(),this._templateObserver=new a.o(this,e=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){const r=new i.F;r._grid=this._grid,r.dataHost=this.dataHost,r._instanceProps=t||r._instanceProps,r.template=e,e.templatizer=r}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,r){const n=[t._content,this];r&&r.item&&n.push(r),e.apply(this,n)}__setColumnTemplateOrRenderer(e,t,r){if(e&&t)throw new Error("You should only use either a renderer or a template");r.forEach(r=>{const n=this._grid.__getRowModel(r.parentElement);if(t)r._renderer=t,(n.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,r,n);else if(r._template!==e){r._template=e,r._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;const t=e.templatizer.createInstance();r._content.appendChild(t.root),r._instance=t,n.item&&r._instance.setProperties(n)}})}_setBodyTemplateOrRenderer(e,t,r,n){(e||t)&&r&&this.__setColumnTemplateOrRenderer(e,t,r)}_setHeaderTemplateOrRenderer(e,t,r){(e||t)&&r&&this.__setColumnTemplateOrRenderer(e,t,[r])}_setFooterTemplateOrRenderer(e,t,r){(e||t)&&r&&(this.__setColumnTemplateOrRenderer(e,t,[r]),this._grid.__updateHeaderFooterRowVisibility(r.parentElement))}_selectFirstTemplate(e=!1,t=!1){return a.o.getFlattenedNodes(this).filter(r=>"template"===r.localName&&r.classList.contains("header")===e&&r.classList.contains("footer")===t)[0]}_findTemplate(e,t){const r=this._selectFirstTemplate(e,t);return r&&this.dataHost&&(r._rootDataHost=this.dataHost._rootDataHost||this.dataHost),r}_flexGrowChanged(e,t,r,n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>t.style.flexGrow=e)}_orderChanged(e,t,r,n){this._allCells.forEach(t=>t.style.order=e)}_widthChanged(e,t,r,n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>t.style.width=e),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e,t,r,n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>this._toggleAttribute("frozen",e,t)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>this._toggleAttribute("last-frozen",e,t)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,r,n,a,s,i,l,o){const d=void 0!==t;if(!i&&!o&&d&&r&&this.__setTextContent(r._content,t),e&&a.value){if(!s&&!l){const t=(t,r,{item:n})=>this.__setTextContent(t,this.get(e,n));this.__setColumnTemplateOrRenderer(void 0,t,a.value)}i||o||d||!r||null===t||this.__setTextContent(r._content,this._generateHeader(e))}r&&this._grid.__updateHeaderFooterRowVisibility(r.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,e=>e.toUpperCase())}_toggleAttribute(e,t,r){r.hasAttribute(e)===!t&&(t?r.setAttribute(e,""):r.removeAttribute(e))}_reorderStatusChanged(e,t,r,n){this._allCells.forEach(t=>t.setAttribute("reorder-status",e))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach(t=>{if(t){const r=t.querySelector('[part~="resize-handle"]');if(r&&t.removeChild(r),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}})}_textAlignChanged(e,t,r,n){if(void 0===e)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let a;"ltr"===getComputedStyle(this._grid).direction?"start"===e?a="left":"end"===e&&(a="right"):"start"===e?a="right":"end"===e&&(a="left"),this._allCells.forEach(t=>{t._content.style.textAlign=e,getComputedStyle(t._content).textAlign!==e&&(t._content.style.textAlign=a)})}_hiddenChanged(e,t,r,n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}),this._grid._debouncerHiddenChanged=l.dx.debounce(this._grid._debouncerHiddenChanged,o.rs,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class _ extends(d((0,s.U)(n.H3))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(_.is,_)},1567:(e,t,r)=>{"use strict";r.d(t,{F:()=>s});var n=r(2450),a=r(8201);class s extends class extends n.H3{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances)))}removeInstance(e){const t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=(0,a.Uv)(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach(r=>r.notifyPath(e,t))},notifyInstanceProp:function(e,t,r){if("index"===t||"item"===t)return;const n=`__${t}__`;if(e[n]===r)return;e[n]=r;const a=Array.from(this._grid.$.items.children).filter(t=>this._grid._itemsEqual(t._item,e.item))[0];a&&Array.from(a.children).forEach(e=>{e._instance&&(e._instance[n]=r,e._instance.notifyPath(t,r))});const s="item.";if(Array.isArray(this._grid.items)&&0===t.indexOf(s)){const n=this._grid.items.indexOf(e.item),a=t.slice(s.length);this._grid.notifyPath(`items.${n}.${a}`,r)}const i=`_${t}InstanceChangedCallback`;this._grid&&this._grid[i]&&this._grid[i](e,r)}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach(r=>r.notifyPath(e,t))}_templateInstancesChanged(e,t){let r,n;if("_templateInstances"===e.path)r=0,n=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;r=e.value.index,n=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach(e=>{for(var t=r;t<r+n;t++)this._templateInstances[t].set(e,this._parentPathValues[e])})}}customElements.define(s.is,s)}}]);