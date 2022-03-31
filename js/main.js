function assistir(){
	openInNewTab("https://www.netflix.com/watch/70178217?source=35");
}

function informacoes(){
	openInNewTab("https://www.netflix.com/br/title/70178217#section-more-details");
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}