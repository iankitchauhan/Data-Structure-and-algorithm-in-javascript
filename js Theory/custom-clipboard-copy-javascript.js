function clipboardCopyText(){
    const clipboardCopyText = document.createElement('textarea');
    clipboardCopyText.value = 'Text to copy to clipboard';
    clipboardCopyText.readOnly =true;
    clipboardCopyText.style.position = 'fixed';
    clipboardCopyText.style.opacity= '0';
    document.body.appendChild(clipboardCopyText);
    clipboardCopyText.select();
    document.execCommand("copy");
    document.body.removeChild(clipboardCopyText);
}
