//FOR CONTENT DIVS & HR TO CHANGE WHEN HOVERED OVER
const element = document.getElementsByClassName("content");
for (const el of element) {

    el.onmouseover = function() {mouseOver()};
    el.onmouseout = function() {mouseOut()};

    const lineElement = el;

    function mouseOver() {
        el.style.color = "lime";
        el.style.backgroundColor = "rgb(46, 123, 238)";
        const lineEl = document.querySelector('div.content hr.line');
        lineEl.style.borderColor = "purple";
        };
    
    function mouseOut() {
        el.style.color = "purple";
        el.style.backgroundColor = "rgb(255, 115, 0)";
        const lineEl = document.querySelector('div.content hr.line');
        lineEl.style.borderColor = "rgba(182, 8, 182, 0.644)";
        };

};


//FOR EMAIL COLOR CHANGE WHEN HOVERED OVER
const word = document.getElementById("mail");
word.onmouseover = function() {mouseOverEmail()};
word.onmouseout = function() {mouseOutEmail()};
function mouseOverEmail() {
    word.style.color = "lime";
};
function mouseOutEmail() {
    word.style.color= "purple";
};
