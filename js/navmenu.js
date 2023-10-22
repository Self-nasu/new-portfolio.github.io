var mymenu = document.getElementById('navmenu')
var own = document.getElementById('toggle-navmenu')
var display = 0

function navmenu()
{
    if(display == 1)
    {
        own.style.display = 'flex';
        mymenu.style.display = 'none';
        display = 0;
    }
    else
    {
        own.style.display = 'none';
        mymenu.style.display = 'flex';
        display = 1;
    }
}