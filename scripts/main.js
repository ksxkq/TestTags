/**
 * Created by xukq on 6/15/16.
 */

var tableObj = document.getElementById("table");

insertNewRow(tableObj, "<a>", '<a href="https://developer.mozilla.org">MDN</a>');
insertNewRow(tableObj, "<abbr>", '<p>I do <abbr title=\"Hypertext Markup Language\">HTML</abbr></p>');
insertNewRow(tableObj, "<address>", "<address>You can contact author at <a href=\"http://www.somedomain.com/contact\">www.somedomain.com</a>.<br>If you see any bugs, please <a href=\"mailto:webmaster@somedomain.com\">contact webmaster</a>.<br>You may also want to visit us:<br>Mozilla Foundation<br></address>");
insertNewRow(tableObj, "<area>", "<area name=\"primary\"><area shape=\"circle\" coords=\"200,250,25\" href=\"another.htm\" />    <area shape=\"default\" nohref /></area>");
insertNewRow(tableObj, "<article>", '<article class="film_review"><p>This is a article</p></article>');
insertNewRow(tableObj, "<aside>", '<article>    <p>    The Disney movie <em>The Little Mermaid</em> was first released to theatres in 1989.</p><aside>The movie earned $87 million during its initial release.</aside><p>More info about the movie...</p></article>');
// insertNewRow(tableObj, "<audio>", '<audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" autoplay>Your browser does not support the <code>audio</code> element.</audio><audio src="foo.ogg">    <track kind="captions" src="foo.en.vtt" srclang="en" label="English">    <track kind="captions" src="foo.sv.vtt" srclang="sv" label="Svenska">    </audio>');
insertNewRow(tableObj, "<b>", '<p>This article describes several <b>text-level</b> elements. It explains their usage in an <b>HTML</b> document.</p>');
insertNewRow(tableObj, "<bdi>", '<p dir="ltr">This arabic word <bdi>ARABIC_PLACEHOLDER</bdi> is automatically displayed right-to-left.</p>');
insertNewRow(tableObj, "<bdo>", '<p>This text will go left to right.</p>    <p><bdo dir="rtl">This text will go right to left.</bdo></p>');
insertNewRow(tableObj, "<blockquote>", '<blockquote cite="http://developer.mozilla.org">    <p>This is a quotation taken from the Mozilla Developer Center.</p></blockquote>');
insertNewRow(tableObj, "<br>", 'Mozilla Foundation<br>Second line');
insertNewRow(tableObj, "<button>", '<button name="button">Click me</button>');
insertNewRow(tableObj, "<canvas>", '<canvas id="canvas" width="300" height="300">Sorry, your browser doesn\'t support the &lt;canvas&gt;element.</canvas>');
insertNewRow(tableObj, "<caption>", '<table>    <caption>Awesome caption</caption><tr><td>Awesome data</td></tr></table>');
insertNewRow(tableObj, "<site>", 'More information can be found in <cite>[ISO-0000]</cite>.');
insertNewRow(tableObj, "<code>", '<p>Regular text. <code>This is code.</code> Regular text.</p>');
insertNewRow(tableObj, "<data>", '<p>新产品</p>    <ul>    <li><data value="3967381398">迷你番茄酱</data></li>    <li><data value="3967381399">巨无霸番茄酱</data></li>    <li><data value="3967381400">超级巨无霸番茄酱</data></li>    </ul>');
insertNewRow(tableObj, "<dl> <dt> <dd>", '<dl>    <dt>Firefox</dt>    <dd>A free, open source, cross-platform, graphical web browserdeveloped by the Mozilla Corporation and hundreds of volunteers.</dd></dl>');
insertNewRow(tableObj, "<dl>", '<p><del>This text has been deleted</del>, here is the rest of the paragraph.</p>');
insertNewRow(tableObj, "<details>", '<details>    <summary>Some details</summary><p>More info about the details.</p></details>');

function insertNewRow(tableObj, tagName, tagResult) {
    var currentTableLength = tableObj.rows.length;
    var row = tableObj.insertRow(currentTableLength);
    row.insertCell(0).innerText = tagName;
    row.insertCell(1).innerHTML = tagResult;
}



