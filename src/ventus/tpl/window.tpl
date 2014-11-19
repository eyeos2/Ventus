<div class="wm-window {{classname}}" >
	<div class="wm-window-border top wm-resize"></div>
	<div class="wm-container">
	    <div class="wm-window-border left  wm-resize"></div>
        <div class="wm-window-box">
            <header class="wm-window-title" unselectable="on">
                {{#renderImg}}
                    <img src="{{imgUrl}}" width=16 height=16/>
                {{/renderImg}}
                <h1 unselectable="on">{{title}}</h1>
                <div class="wm-button-group">
                    {{#minimize}}
                    <button class="wm-minimize">&nbsp;</button>
                    {{/minimize}}
                    <button class="wm-maximize">&nbsp;</button>
                    <button class="wm-close">&nbsp;</button>
                </div>
            </header>

            <section class="wm-content"></section>

            <button class="wm-resize top-right">&nbsp;</button>
            <button class="wm-resize top-left">&nbsp;</button>
            <button class="wm-resize bottom-left">&nbsp;</button>
            <button class="wm-resize bottom-right">&nbsp;</button>
        </div>
	    <div class="wm-window-border right wm-resize"></div>
    </div>

	<div class="wm-window-border bottom wm-resize"></div>
	<div class="wm-window-overlay"></div>
</div>

