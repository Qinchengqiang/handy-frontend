import React, { Component } from "react";

class HomeView extends Component {

  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
  }

  render() {

    return (
      <div>
        <div>
          <div>be together. not the same.</div>
          <div>welcome to android... be yourself. do your thing. see what's going on.</div>
          <div>
            <a href=""><img src="images/andy.png" /> create your android character</a>
          </div>

          <a onClick={() => this.scrollToAnchor('part1')}>
            <button>
              <i>expand_more</i>
            </button>
          </a>
          <a onClick={() => this.scrollToAnchor('part2')}>
            <button>
              <i>expand_more</i>
            </button>
          </a>
        </div>
        <div style={{ height: 800 }}>
          <a id="part1"></a>
          跳到这里跳到这里跳到这里跳到这里跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          <a id="part2"></a>
          跳到这里跳到这里跳到这里跳到这里跳到这里跳到这里跳到这里跳到这里跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
          跳到这里
<br />
        </div>
      </div>
    );
  }
}
export default HomeView;