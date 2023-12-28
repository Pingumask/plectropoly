function handleDrop(event) {
	localStorage.setItem(`${event.target.id}-X`, event.target.style.left);
	localStorage.setItem(`${event.target.id}-Y`, event.target.style.top);
}
document.addEventListener('drag', function (event) {}, false);
document.querySelectorAll('[draggable=true]').forEach((element) => {
	element.addEventListener('mouseup', handleDrop);
	element.style.left = localStorage.getItem(`${element.id}-X`) || '3vmin';
	element.style.top = localStorage.getItem(`${element.id}-Y`) || '91vmin';
});
$(function () {
	$('[draggable=true]').draggable();
});
