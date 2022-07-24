# 正向代理与反向代理

## 正向代理

正向代理其实相当于请求的中继，比如说，如果某个网站国内无法访问，也就是被墙了，这时我们可以通过一台可以访问到这个网站的服务器，也就是代理服务器，来进行访问。这台代理服务器，分析我们请求的信息，然后去对应的要去的网站上将内容取回来发给我，这样我就能读到想要访问的网站上的内容了。

基于这种技术原理，VPN 就是这样产生的。通过 VPN，我们可以在家里访问公司的内网，也可以在电信宽带的环境下更好地玩网通区地 LOL（游戏加速器）。

通过以下图片，可以很清晰的看出正向代理的原理：

<div style="text-align: center;">
  <svg id="SvgjsSvg1006" width="603.0124816894531" height="278" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1007"><pattern id="SvgjsPattern1014" x="0" y="0" width="63" height="63" patternUnits="userSpaceOnUse"><image id="SvgjsImage1015" xlink:href="https://iconsapi.com/5ee27816e4b0b788a934aa1e.svg" width="63" height="63" preserveAspectRatio="none" crossOrigin="anonymous" x="0" y="0"></image></pattern><pattern id="SvgjsPattern1018" x="0" y="0" width="90" height="90" patternUnits="userSpaceOnUse"><image id="SvgjsImage1019" xlink:href="https://iconsapi.com/5ee268b1e4b0b788a9338b53.svg" width="90" height="90" preserveAspectRatio="none" crossOrigin="anonymous" x="0" y="0"></image></pattern><pattern id="SvgjsPattern1034" x="0" y="0" width="63" height="63" patternUnits="userSpaceOnUse"><image id="SvgjsImage1035" xlink:href="https://iconsapi.com/5ee27816e4b0b788a934aa1e.svg" width="63" height="63" preserveAspectRatio="none" crossOrigin="anonymous" x="0" y="0"></image></pattern></defs><g id="SvgjsG1008" transform="translate(25.012481689453125,25)"><path id="SvgjsPath1009" d="M 0 0L 331 0L 331 228L 0 228Z" stroke="rgba(100,181,246,1)" stroke-width="2" fill="none"></path><g id="SvgjsG1010"><text id="SvgjsText1011" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="311px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="104.375" transform="rotate(0)"></text></g></g><g id="SvgjsG1012" transform="translate(264.5124816894531,99)"><path id="SvgjsPath1013" d="M 0 0L 63 0L 63 63L 0 63Z" stroke="none" fill="url(#SvgjsPattern1014)"></path></g><g id="SvgjsG1016" transform="translate(59.012481689453125,88.5)"><path id="SvgjsPath1017" d="M 0 0L 90 0L 90 90L 0 90Z" stroke="none" fill="url(#SvgjsPattern1018)"></path></g><g id="SvgjsG1020" transform="translate(44.012481689453125,156.5)"><path id="SvgjsPath1021" d="M 0 0L 120 0L 120 40L 0 40Z" stroke="none" fill="none"></path><g id="SvgjsG1022"><text id="SvgjsText1023" font-family="微软雅黑" text-anchor="middle" font-size="16px" width="120px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="16px" weight="400" font-style="" opacity="1" y="8" transform="rotate(0)"><tspan id="SvgjsTspan1024" dy="20" x="60"><tspan id="SvgjsTspan1025" style="text-decoration:;">客户端</tspan></tspan></text></g></g><g id="SvgjsG1026" transform="translate(236.01248168945312,156.5)"><path id="SvgjsPath1027" d="M 0 0L 120 0L 120 40L 0 40Z" stroke="none" fill="none"></path><g id="SvgjsG1028"><text id="SvgjsText1029" font-family="微软雅黑" text-anchor="middle" font-size="16px" width="120px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="16px" weight="400" font-style="" opacity="1" y="8" transform="rotate(0)"><tspan id="SvgjsTspan1030" dy="20" x="60"><tspan id="SvgjsTspan1031" style="text-decoration:;">正向代理</tspan></tspan></text></g></g><g id="SvgjsG1032" transform="translate(486.5124816894531,99)"><path id="SvgjsPath1033" d="M 0 0L 63 0L 63 63L 0 63Z" stroke="none" fill="url(#SvgjsPattern1034)"></path></g><g id="SvgjsG1036" transform="translate(458.0124816894531,156.5)"><path id="SvgjsPath1037" d="M 0 0L 120 0L 120 40L 0 40Z" stroke="none" fill="none"></path><g id="SvgjsG1038"><text id="SvgjsText1039" font-family="微软雅黑" text-anchor="middle" font-size="16px" width="120px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="16px" weight="400" font-style="" opacity="1" y="8" transform="rotate(0)"><tspan id="SvgjsTspan1040" dy="20" x="60"><tspan id="SvgjsTspan1041" style="text-decoration:;">目标服务器</tspan></tspan></text></g></g><g id="SvgjsG1042" transform="translate(164.01248168945312,116.89805825242718)"><path id="SvgjsPath1043" d="M 0 10.95728155339806L 78.39805825242718 10.95728155339806L 78.39805825242718 0L 95 16.601941747572816L 78.39805825242718 33.20388349514563L 78.39805825242718 22.246601941747574L 0 22.246601941747574L 0 10.95728155339806Z" stroke="rgba(100,181,246,1)" stroke-width="2" fill-opacity="1" fill="#ffffff"></path><g id="SvgjsG1044"><text id="SvgjsText1045" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="95px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="6.976941747572818" transform="rotate(0)"></text></g></g><g id="SvgjsG1046" transform="translate(377.0124816894531,116.89805825242718)"><path id="SvgjsPath1047" d="M 0 10.95728155339806L 78.39805825242718 10.95728155339806L 78.39805825242718 0L 95 16.601941747572816L 78.39805825242718 33.20388349514563L 78.39805825242718 22.246601941747574L 0 22.246601941747574L 0 10.95728155339806Z" stroke="rgba(100,181,246,1)" stroke-width="2" fill-opacity="1" fill="#ffffff"></path><g id="SvgjsG1048"><text id="SvgjsText1049" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="95px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="6.976941747572818" transform="rotate(0)"></text></g></g></svg>
  <p style="text-align:center; color: #888;">（正向代理）</p>
</div>

## 反向代理

反向代理，其实客户端对代理是无感知的，因为客户端并不知道访问的是代理服务器。当客户端请求一个网址的时候，由反向代理服务器去选择目标服务器并获取数据，再返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器地址，隐藏了真实服务器 IP 地址。

反向代理的原理如图：

<div style="text-align: center;">
  <svg id="SvgjsSvg1006" width="602.0124816894531" height="278" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1007"><pattern id="SvgjsPattern1014" x="0" y="0" width="63" height="63" patternUnits="userSpaceOnUse"><image id="SvgjsImage1015" xlink:href="https://iconsapi.com/5ee27816e4b0b788a934aa1e.svg" width="63" height="63" preserveAspectRatio="none" crossOrigin="anonymous" x="0" y="0"></image></pattern><pattern id="SvgjsPattern1018" x="0" y="0" width="90" height="90" patternUnits="userSpaceOnUse"><image id="SvgjsImage1019" xlink:href="https://iconsapi.com/5ee268b1e4b0b788a9338b53.svg" width="90" height="90" preserveAspectRatio="none" crossOrigin="anonymous" x="0" y="0"></image></pattern><pattern id="SvgjsPattern1034" x="0" y="0" width="63" height="63" patternUnits="userSpaceOnUse"><image id="SvgjsImage1035" xlink:href="https://iconsapi.com/5ee27816e4b0b788a934aa1e.svg" width="63" height="63" preserveAspectRatio="none" crossOrigin="anonymous" x="0" y="0"></image></pattern></defs><g id="SvgjsG1008" transform="translate(257.0124816894531,25)"><path id="SvgjsPath1009" d="M 0 0L 320 0L 320 228L 0 228Z" stroke="rgba(100,181,246,1)" stroke-width="2" fill="none"></path><g id="SvgjsG1010"><text id="SvgjsText1011" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="300px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="104.375" transform="rotate(0)"></text></g></g><g id="SvgjsG1012" transform="translate(285.5124816894531,99)"><path id="SvgjsPath1013" d="M 0 0L 63 0L 63 63L 0 63Z" stroke="none" fill="url(#SvgjsPattern1014)"></path></g><g id="SvgjsG1016" transform="translate(40.012481689453125,88.5)"><path id="SvgjsPath1017" d="M 0 0L 90 0L 90 90L 0 90Z" stroke="none" fill="url(#SvgjsPattern1018)"></path></g><g id="SvgjsG1020" transform="translate(25.012481689453125,156.5)"><path id="SvgjsPath1021" d="M 0 0L 120 0L 120 40L 0 40Z" stroke="none" fill="none"></path><g id="SvgjsG1022"><text id="SvgjsText1023" font-family="微软雅黑" text-anchor="middle" font-size="16px" width="120px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="16px" weight="400" font-style="" opacity="1" y="8" transform="rotate(0)"><tspan id="SvgjsTspan1024" dy="20" x="60"><tspan id="SvgjsTspan1025" style="text-decoration:;">客户端</tspan></tspan></text></g></g><g id="SvgjsG1026" transform="translate(257.0124816894531,156.5)"><path id="SvgjsPath1027" d="M 0 0L 120 0L 120 40L 0 40Z" stroke="none" fill="none"></path><g id="SvgjsG1028"><text id="SvgjsText1029" font-family="微软雅黑" text-anchor="middle" font-size="16px" width="120px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="16px" weight="400" font-style="" opacity="1" y="8" transform="rotate(0)"><tspan id="SvgjsTspan1030" dy="20" x="60"><tspan id="SvgjsTspan1031" style="text-decoration:;">反向代理</tspan></tspan></text></g></g><g id="SvgjsG1032" transform="translate(467.5124816894531,99)"><path id="SvgjsPath1033" d="M 0 0L 63 0L 63 63L 0 63Z" stroke="none" fill="url(#SvgjsPattern1034)"></path></g><g id="SvgjsG1036" transform="translate(439.0124816894531,156.5)"><path id="SvgjsPath1037" d="M 0 0L 120 0L 120 40L 0 40Z" stroke="none" fill="none"></path><g id="SvgjsG1038"><text id="SvgjsText1039" font-family="微软雅黑" text-anchor="middle" font-size="16px" width="120px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="16px" weight="400" font-style="" opacity="1" y="8" transform="rotate(0)"><tspan id="SvgjsTspan1040" dy="20" x="60"><tspan id="SvgjsTspan1041" style="text-decoration:;">目标服务器</tspan></tspan></text></g></g><g id="SvgjsG1042" transform="translate(145.01248168945312,116.89805825242718)"><path id="SvgjsPath1043" d="M 0 10.95728155339806L 78.39805825242718 10.95728155339806L 78.39805825242718 0L 95 16.601941747572816L 78.39805825242718 33.20388349514563L 78.39805825242718 22.246601941747574L 0 22.246601941747574L 0 10.95728155339806Z" stroke="rgba(100,181,246,1)" stroke-width="2" fill-opacity="1" fill="#ffffff"></path><g id="SvgjsG1044"><text id="SvgjsText1045" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="95px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="6.976941747572818" transform="rotate(0)"></text></g></g><g id="SvgjsG1046" transform="translate(364.0124816894531,116.89805825242718)"><path id="SvgjsPath1047" d="M 0 10.95728155339806L 78.39805825242718 10.95728155339806L 78.39805825242718 0L 95 16.601941747572816L 78.39805825242718 33.20388349514563L 78.39805825242718 22.246601941747574L 0 22.246601941747574L 0 10.95728155339806Z" stroke="rgba(100,181,246,1)" stroke-width="2" fill-opacity="1" fill="#ffffff"></path><g id="SvgjsG1048"><text id="SvgjsText1049" font-family="微软雅黑" text-anchor="middle" font-size="13px" width="95px" fill="#323232" font-weight="400" align="middle" lineHeight="125%" anchor="middle" family="微软雅黑" size="13px" weight="400" font-style="" opacity="1" y="6.976941747572818" transform="rotate(0)"></text></g></g></svg>
  <p style="text-align:center; color: #888;">（反向代理）</p>
</div>

**总的来说**：

正向代理代理的是客户端（如通过代理访问谷歌），我们需要在客户端进行一些代理的设置；反向代理代理的是服务器（如 Nginx 代理 Tomcat 服务器），作为客户端的我们是无法感知到服务器的真实存在的。

