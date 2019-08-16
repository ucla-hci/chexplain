import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import React, { PureComponent } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".magnifier {\n  position: relative;\n display: inline-block;\n  line-height: 0; }\n\n.magnifier-image {\n  cursor: none; }\n\n.magnifying-glass {\n  position: absolute;\n  z-index: 1;\n  background: #e5e5e5 no-repeat;\n  border: solid #ebebeb;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s;\n  pointer-events: none; }\n  .magnifying-glass.circle {\n    border-radius: 50%; }\n  .magnifying-glass.visible {\n    opacity: 1; }\n";
styleInject(css);

class Magnifier extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showZoom: false,
            mgOffsetX: 0,
            mgOffsetY: 0,
            relX: 0,
            relY: 0,
            scTop: '',
            scLeft: '',
            sc: false,
            scBackgroundPosition: ''
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseMove = throttle(this.onMouseMove.bind(this), 20, { trailing: false });
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = throttle(this.onTouchMove.bind(this), 20, { trailing: false });
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.calcImgBounds = this.calcImgBounds.bind(this);
        this.calcImgBoundsDebounced = debounce(this.calcImgBounds, 200);
    }
    componentDidMount() {
        this.img.addEventListener("mouseenter", this.onMouseEnter, { passive: false });
        this.img.addEventListener("mousemove", this.onMouseMove, { passive: false });
        this.img.addEventListener("mouseout", this.onMouseOut, { passive: false });
        this.img.addEventListener("touchstart", this.onTouchStart, { passive: false });
        this.img.addEventListener("touchmove", this.onTouchMove, { passive: false });
        this.img.addEventListener("touchend", this.onTouchEnd, { passive: false });
        window.addEventListener("resize", this.calcImgBoundsDebounced);
        window.addEventListener("scroll", this.calcImgBoundsDebounced, true);
    }
    componentWillUnmount() {
        this.img.removeEventListener("mouseenter", this.onMouseEnter);
        this.img.removeEventListener("mousemove", this.onMouseMove);
        this.img.removeEventListener("mouseout", this.onMouseOut);
        this.img.removeEventListener("touchstart", this.onTouchStart);
        this.img.removeEventListener("touchmove", this.onTouchMove);
        this.img.removeEventListener("touchend", this.onTouchEnd);
        window.removeEventListener("resize", this.calcImgBoundsDebounced);
        window.removeEventListener("scroll", this.calcImgBoundsDebounced, true);
    }
    onMouseEnter() {
        this.calcImgBounds();
    }
    onMouseMove(e) {
        const { mgMouseOffsetX, mgMouseOffsetY } = this.props;
        if (this.imgBounds) {
            const target = e.target;
            const relX = (e.pageX - this.imgBounds.left) / target.clientWidth;
            const relY = (e.pageY - this.imgBounds.top) / target.clientHeight;
            this.setState({
                mgOffsetX: mgMouseOffsetX,
                mgOffsetY: mgMouseOffsetY,
                relX,
                relY,
                showZoom: true,
            });
        }
    }
    onMouseOut() {
        this.setState({
            showZoom: false,
        });
    }
    onTouchStart(e) {
        e.preventDefault();
        this.calcImgBounds();
    }
    onTouchMove(e) {
        e.preventDefault();
        if (this.imgBounds) {
            const target = e.target;
            const { mgTouchOffsetX, mgTouchOffsetY } = this.props;
            const relX = (e.targetTouches[0].clientX - this.imgBounds.left) / target.clientWidth;
            const relY = (e.targetTouches[0].clientY - this.imgBounds.top) / target.clientHeight;
            if (relX >= 0 && relY >= 0 && relX <= 1 && relY <= 1) {
                this.setState({
                    mgOffsetX: mgTouchOffsetX,
                    mgOffsetY: mgTouchOffsetY,
                    relX,
                    relY,
                    showZoom: true,
                });
            }
            else {
                this.setState({
                    showZoom: false,
                });
            }
        }
    }
    onTouchEnd() {
        this.setState({
            showZoom: false,
        });
    }
    calcImgBounds() {
        if (this.img) {
            this.imgBounds = this.img.getBoundingClientRect();
        }
    }
    render() {
        const _a = this.props, { src, width, height, className, zoomImgSrc, zoomFactor, mgHeight, mgWidth, mgBorderWidth, mgMouseOffsetX, mgMouseOffsetY, mgTouchOffsetX, mgTouchOffsetY, mgShape, mgShowOverflow } = _a, otherProps = __rest(_a, ["src", "width", "height", "className", "zoomImgSrc", "zoomFactor", "mgHeight", "mgWidth", "mgBorderWidth", "mgMouseOffsetX", "mgMouseOffsetY", "mgTouchOffsetX", "mgTouchOffsetY", "mgShape", "mgShowOverflow"]);
        const { mgOffsetX, mgOffsetY, relX, relY, showZoom, scTop, scLeft, sc, scBackgroundPosition } = this.state;
        let mgClasses = "magnifying-glass";
        if (showZoom) {
            mgClasses += " visible";
        }
        if (mgShape === "circle") {
            mgClasses += " circle";
        }
        return (React.createElement("div", { className: `magnifier ${className}`, style: {
                width,
                height,
                overflow: mgShowOverflow ? "visible" : "hidden",
            } },
            React.createElement("img", Object.assign({ className: "magnifier-image", src: src, width: "100%", height: "100%" }, otherProps, { onLoad: () => {
                    this.calcImgBounds();
                }, ref: (img) => {
                    this.img = img;
                }, onClick: () => {
                    this.setState({
                        scTop: `calc(${relY * 100}% - ${mgHeight / 2}px + ${mgOffsetY}px - ${mgBorderWidth}px)`,
                        scLeft: `calc(${relX * 100}% - ${mgWidth / 2}px + ${mgOffsetX}px - ${mgBorderWidth}px)`,
                        scBackgroundPosition: `calc(${relX * 100}% + ${mgWidth / 2}px - ${relX *
                            mgWidth}px) calc(${relY * 100}% + ${mgHeight / 2}px - ${relY * mgWidth}px)`,
                        sc: true
                    });
                    console.log(scTop, scLeft, scBackgroundPosition);
                } })),
            sc && (React.createElement("div", { className: "magnifying-glass visible", style: {
                    width: mgWidth,
                    height: mgHeight,
                    left: scLeft,
                    top: scTop,
                    backgroundImage: `url("${zoomImgSrc || src}")`,
                    backgroundPosition: scBackgroundPosition,
                    backgroundSize: `${zoomFactor * this.imgBounds.width}% ${zoomFactor *
                        this.imgBounds.height}%`,
                    borderWidth: mgBorderWidth,
                } })),
            this.imgBounds && (React.createElement("div", { className: mgClasses, style: {
                    width: mgWidth,
                    height: mgHeight,
                    left: `calc(${relX * 100}% - ${mgWidth / 2}px + ${mgOffsetX}px - ${mgBorderWidth}px)`,
                    top: `calc(${relY * 100}% - ${mgHeight / 2}px + ${mgOffsetY}px - ${mgBorderWidth}px)`,
                    backgroundImage: `url("${zoomImgSrc || src}")`,
                    backgroundPosition: `calc(${relX * 100}% + ${mgWidth / 2}px - ${relX *
                        mgWidth}px) calc(${relY * 100}% + ${mgHeight / 2}px - ${relY * mgWidth}px)`,
                    backgroundSize: `${zoomFactor * this.imgBounds.width}% ${zoomFactor *
                        this.imgBounds.height}%`,
                    borderWidth: mgBorderWidth,
                } }))));
    }
}
Magnifier.defaultProps = {
    className: "image",
    height: "100%",
    zoomFactor: 1.5,
    mgWidth: 150,
    mgHeight: 150,
    mgBorderWidth: 2,
    mgShape: "circle",
    mgShowOverflow: true,
    mgMouseOffsetX: 0,
    mgMouseOffsetY: 0,
    mgTouchOffsetX: -50,
    mgTouchOffsetY: -50,
};

export default Magnifier;
