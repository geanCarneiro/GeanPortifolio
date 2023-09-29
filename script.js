function init(){
    document.querySelectorAll('nav > ul > li').forEach( (li) => {
        li.onclick = function () {
            document.querySelector('nav > ul > li[active="true"]').setAttribute('active', 'false');
            li.setAttribute('active', 'true');

            updatePage();
        }
    });

    updatePage();
}

function updatePage() {
    fetch(document.querySelector('nav > ul > li[active="true"]').getAttribute('content'))
    .then( response => response.text())
    .then( text => document.querySelector('div#content').innerHTML = text)
}