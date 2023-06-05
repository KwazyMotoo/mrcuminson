var Red = Red || {};

Red.BitmapText2 = (function ()
{
    function BitmapText()
    {
        PIXI.extras.BitmapText.call( this, arguments[0], arguments[1] );
        this.infos = null;
        this.dontWordMode = true;
    }

    BitmapText.prototype = new PIXI.extras.BitmapText();
    BitmapText.prototype.constructor = BitmapText;

    BitmapText.prototype.updateText = function ()
    {

        if( this.infos )
        {
            this._updateText_infos();
        }
        else
        {
            this._updateText();
        }
    };

    BitmapText.prototype._updateText_infos = function ()
    {
        var data = PIXI.extras.BitmapText.fonts[this._font.name];
        if(!data) return;
        var scale = this._font.size / data.size;
        var pos = new PIXI.Point();
        var chars = [];
        var lineWidths = [];

        var prevCharCode = null;
        var lastLineWidth = 0;
        var maxLineWidth = 0;
        var line = 0;
        var lastSpace = -1;
        var lastSpaceWidth = 0;
        var spacesRemoved = 0;
        var maxLineHeight = 0;
        //var crtMaxScale = 0;   //현재 줄에서 가장 큰 스케일
        var lineHeight = (this.lineHeight || data.lineHeight);
        var halfLineHeight = lineHeight / 2;

        //Red modify
        if( this.dontWordMode  )
        {
            for (var i = 0; i < this.text.length; i++) {
                var charCode = this.text.charCodeAt(i);

                lastSpace = i;
                lastSpaceWidth = lastLineWidth;

                if (/(?:\r\n|\n)/.test(this.text.charAt(i))) {
                    //if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
                    lineWidths.push(lastLineWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
                    line++;

                    pos.x = 0;
                    pos.y += lineHeight
                    //crtMaxScale = 0;
                    prevCharCode = null;
                    continue;
                }

                if (lastSpace !== -1 && this._maxWidth > 0 && pos.x * scale > this._maxWidth) {
                    PIXI.utils.removeItems(chars, lastSpace - spacesRemoved, i - lastSpace);
                    i = lastSpace;
                    lastSpace = -1;
                    ++spacesRemoved;

                    lineWidths.push(lastSpaceWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastSpaceWidth);
                    line++;

                    pos.x = 0;
                    pos.y += lineHeight;  //Red modify
                    //crtMaxScale = 0;
                    prevCharCode = null;
                    //continue;
                }

                var charData = data.chars[charCode];
                var info = this.infos[i];

                if (!charData) {
                    continue;
                }

                if (prevCharCode && charData.kerning[prevCharCode]) {
                    pos.x += charData.kerning[prevCharCode];
                }

                info.scale = info.scale || 1;
                chars.push({
                    texture: charData.texture,
                    line: line,
                    charCode: charCode,
                    position: new PIXI.Point(pos.x + charData.xOffset*info.scale,
                        pos.y + charData.yOffset * info.scale
                        + halfLineHeight - (halfLineHeight * info.scale)),
                    color : info.color,
                    scale : info.scale
                });
                lastLineWidth = pos.x + (charData.texture.width + charData.xOffset) * info.scale;
                pos.x += charData.xAdvance * info.scale;
                maxLineHeight = Math.max(maxLineHeight, (charData.yOffset + charData.texture.height));
                //crtMaxScale = Math.max(crtMaxScale, info.scale );
                prevCharCode = charCode;
            }
        }
        else {
            for (var i = 0; i < this.text.length; i++) {
                var charCode = this.text.charCodeAt(i);

                if (/(\s)/.test(this.text.charAt(i))) {
                    lastSpace = i;
                    lastSpaceWidth = lastLineWidth;
                }
                //if (/(?:\r\n|\n)/.test(this.text.charAt(i))) {
                if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
                    lineWidths.push(lastLineWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
                    line++;

                    pos.x = 0;
                    pos.y += lineHeight;
                    prevCharCode = null;
                    //crtMaxScale = 0;
                    continue;
                }

                if (lastSpace !== -1 && this._maxWidth > 0 && pos.x * scale > this._maxWidth) {
                    PIXI.utils.removeItems(chars, lastSpace - spacesRemoved, i - lastSpace);
                    i = lastSpace;
                    lastSpace = -1;
                    ++spacesRemoved;

                    lineWidths.push(lastSpaceWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastSpaceWidth);
                    line++;

                    pos.x = 0;
                    pos.y += lineHeight; //Red modify
                    prevCharCode = null;
                    //crtMaxScale = 0;
                    continue;
                }

                var charData = data.chars[charCode];
                var info = this.infos[i];

                if (!charData) {
                    continue;
                }

                if (prevCharCode && charData.kerning[prevCharCode]) {
                    pos.x += charData.kerning[prevCharCode];
                }

                info.scale = info.scale || 1;
                chars.push({
                    texture: charData.texture,
                    line: line,
                    charCode: charCode,
                    position: new PIXI.Point(pos.x + charData.xOffset*info.scale,
                        pos.y + charData.yOffset * info.scale
                        + halfLineHeight - (halfLineHeight * info.scale)),
                    color : info.color,
                    scale : info.scale
                });
                lastLineWidth = pos.x + (charData.texture.width + charData.xOffset) * info.scale;
                pos.x += charData.xAdvance * info.scale;
                maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height);
                //crtMaxScale = Math.max(crtMaxScale,  info.scale );
                prevCharCode = charCode;
            }
        }

        lineWidths.push(lastLineWidth);
        maxLineWidth = Math.max(maxLineWidth, lastLineWidth);

        var lineAlignOffsets = [];

        for (var _i = 0; _i <= line; _i++) {
            var alignOffset = 0;

            if (this._font.align === 'right') {
                alignOffset = maxLineWidth - lineWidths[_i];
            } else if (this._font.align === 'center') {
                alignOffset = (maxLineWidth - lineWidths[_i]) / 2;
            }

            lineAlignOffsets.push(alignOffset);
        }

        var lenChars = chars.length;
        var tint = this.tint;

        for (var _i2 = 0; _i2 < lenChars; _i2++) {
            var c = this._glyphs[_i2]; // get the next glyph sprite

            if (c) {
                c.texture = chars[_i2].texture;
            } else {
                c = new PIXI.Sprite(chars[_i2].texture);
                this._glyphs.push(c);
            }

            var _scale = chars[_i2].scale || 1;

            c.position.x = (chars[_i2].position.x + lineAlignOffsets[chars[_i2].line]) * scale;
            c.position.y = chars[_i2].position.y * scale;
            c.scale.x = c.scale.y = scale * _scale;
            c.tint = chars[_i2].color || tint;

            if (!c.parent) {
                this.addChild(c);
            }
        }



        // remove unnecessary children.
        for (var _i3 = lenChars; _i3 < this._glyphs.length; ++_i3) {
            this.removeChild(this._glyphs[_i3]);
        }

        this._textWidth = maxLineWidth * scale;
        this._textHeight = (pos.y + this.lineHeight || data.lineHeight) * scale;

        // apply anchor
        if (this.anchor.x !== 0 || this.anchor.y !== 0) {
            for (var _i4 = 0; _i4 < lenChars; _i4++) {
                this._glyphs[_i4].x -= this._textWidth * this.anchor.x;
                this._glyphs[_i4].y -= this._textHeight * this.anchor.y;
            }
        }
        this._maxLineHeight = maxLineHeight * scale;

        this.infos = null;
    };

    BitmapText.prototype._updateText = function ()
    {
        var data = PIXI.extras.BitmapText.fonts[this._font.name];
        if(!data) return;
        var scale = this._font.size / data.size;
        var pos = new PIXI.Point();
        var chars = [];
        var lineWidths = [];

        var prevCharCode = null;
        var lastLineWidth = 0;
        var maxLineWidth = 0;
        var line = 0;
        var lastSpace = -1;
        var lastSpaceWidth = 0;
        var spacesRemoved = 0;
        var maxLineHeight = 0;

        //Red modify
        if( this.dontWordMode  )
        {
            for (var i = 0; i < this.text.length; i++) {
                var charCode = this.text.charCodeAt(i);

                lastSpace = i;
                lastSpaceWidth = lastLineWidth;

                if (/(?:\r\n|\n)/.test(this.text.charAt(i))) {
                    //if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
                    lineWidths.push(lastLineWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
                    line++;

                    pos.x = 0;
                    pos.y += this.lineHeight || data.lineHeight;
                    prevCharCode = null;
                    continue;
                }

                if (lastSpace !== -1 && this._maxWidth > 0 && pos.x * scale > this._maxWidth) {
                    PIXI.utils.removeItems(chars, lastSpace - spacesRemoved, i - lastSpace);
                    i = lastSpace;
                    lastSpace = -1;
                    ++spacesRemoved;

                    lineWidths.push(lastSpaceWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastSpaceWidth);
                    line++;

                    pos.x = 0;
                    pos.y += this.lineHeight || data.lineHeight;    //Red modify
                    prevCharCode = null;
                    //continue;
                }


                var charData = data.chars[charCode];

                if (!charData) {
                    continue;
                }

                if (prevCharCode && charData.kerning[prevCharCode]) {
                    pos.x += charData.kerning[prevCharCode];
                }

                chars.push({
                    texture: charData.texture,
                    line: line,
                    charCode: charCode,
                    position: new PIXI.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)
                });
                lastLineWidth = pos.x + (charData.texture.width + charData.xOffset);
                pos.x += charData.xAdvance;
                maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height);
                prevCharCode = charCode;
            }
        }
        else {
            for (var i = 0; i < this.text.length; i++) {
                var charCode = this.text.charCodeAt(i);

                if (/(\s)/.test(this.text.charAt(i))) {
                    lastSpace = i;
                    lastSpaceWidth = lastLineWidth;
                }
                //if (/(?:\r\n|\n)/.test(this.text.charAt(i))) {
                if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
                    lineWidths.push(lastLineWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
                    line++;

                    pos.x = 0;
                    pos.y += this.lineHeight ||data.lineHeight;
                    prevCharCode = null;
                    continue;
                }

                if (lastSpace !== -1 && this._maxWidth > 0 && pos.x * scale > this._maxWidth) {
                    PIXI.utils.removeItems(chars, lastSpace - spacesRemoved, i - lastSpace);
                    i = lastSpace;
                    lastSpace = -1;
                    ++spacesRemoved;

                    lineWidths.push(lastSpaceWidth);
                    maxLineWidth = Math.max(maxLineWidth, lastSpaceWidth);
                    line++;

                    pos.x = 0;
                    pos.y += this.lineHeight ||data.lineHeight; //Red modify
                    prevCharCode = null;
                    continue;
                }

                var charData = data.chars[charCode];

                if (!charData) {
                    continue;
                }

                if (prevCharCode && charData.kerning[prevCharCode]) {
                    pos.x += charData.kerning[prevCharCode];
                }

                chars.push({
                    texture: charData.texture,
                    line: line,
                    charCode: charCode,
                    position: new PIXI.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)
                });

                lastLineWidth = pos.x + (charData.texture.width + charData.xOffset);
                pos.x += charData.xAdvance;
                maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height);
                prevCharCode = charCode;
            }
        }



        lineWidths.push(lastLineWidth);
        maxLineWidth = Math.max(maxLineWidth, lastLineWidth);

        var lineAlignOffsets = [];

        for (var _i = 0; _i <= line; _i++) {
            var alignOffset = 0;

            if (this._font.align === 'right') {
                alignOffset = maxLineWidth - lineWidths[_i];
            } else if (this._font.align === 'center') {
                alignOffset = (maxLineWidth - lineWidths[_i]) / 2;
            }

            lineAlignOffsets.push(alignOffset);
        }

        var lenChars = chars.length;
        var tint = this.tint;

        for (var _i2 = 0; _i2 < lenChars; _i2++) {
            var c = this._glyphs[_i2]; // get the next glyph sprite

            if (c) {
                c.texture = chars[_i2].texture;
            } else {
                c = new PIXI.Sprite(chars[_i2].texture);
                this._glyphs.push(c);
            }

            c.position.x = (chars[_i2].position.x + lineAlignOffsets[chars[_i2].line]) * scale;
            c.position.y = chars[_i2].position.y * scale;
            c.scale.x = c.scale.y = scale;
            c.tint = tint;

            if (!c.parent) {
                this.addChild(c);
            }
        }

        // remove unnecessary children.
        for (var _i3 = lenChars; _i3 < this._glyphs.length; ++_i3) {
            this.removeChild(this._glyphs[_i3]);
        }

        this._textWidth = maxLineWidth * scale;
        this._textHeight = (pos.y + this.lineHeight || data.lineHeight) * scale;

        // apply anchor
        if (this.anchor.x !== 0 || this.anchor.y !== 0) {
            for (var _i4 = 0; _i4 < lenChars; _i4++) {
                this._glyphs[_i4].x -= this._textWidth * this.anchor.x;
                this._glyphs[_i4].y -= this._textHeight * this.anchor.y;
            }
        }
        this._maxLineHeight = maxLineHeight * scale;
    };



    return BitmapText;
})();